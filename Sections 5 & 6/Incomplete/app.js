document.addEventListener('DOMContentLoaded', () => {
    var i;
    // This for loop creates a div and adds it inside "maingrid", repeating this 200 times.
    for(i = 0; i < 200; i++){
        var block = document.createElement("div")
        document.getElementById("maingrid").appendChild(block)
    }

    // This for loop creates a div, gives it the class "taken", and adds it inside "maingrid", repeating this 10 times.
    for(i = 0; i < 10; i++){
        var block = document.createElement("div")
        block.className = 'taken'
        document.getElementById("maingrid").appendChild(block)
    }
    
    // This for loop creates a div and adds it inside "minigrid", repeating this 16 times.
    for(i = 0; i < 16; i++){
		var block = document.createElement("div")
		document.getElementById("minigrid").appendChild(block)
	}

    // VARIABLES
	let squares = Array.from(document.querySelectorAll('#maingrid div'))
	const width = 10
    
    // Tetrominoes
	const iTetro = [
    [1, width + 1, 2*width + 1, 3*width + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, 2*width + 1, 3*width + 1],
    [width, width + 1, width + 2, width + 3]
    ]

    const oTetro = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
    ]

    const tTetro = [
    [width + 1, 2*width, 2*width + 1, 2*width + 2],
    [1, width + 1, width + 2, 2*width + 1],
    [width, width + 1, width + 2, 2*width + 1],
    [1, width + 1, width, 2*width + 1]
    ]

    const jTetro = [
    [1, width + 1, 2*width, 2*width + 1],
    [width, 2*width, 2*width + 1, 2*width + 2],
    [1, 2, width + 1, 2*width + 1],
    [width, width + 1, width + 2, 2*width + 2]
    ]

    const lTetro = [
    [1, width + 1, 2*width + 1, 2*width + 2],
    [width, width + 1, width + 2, 2*width],
    [0, 1, width + 1, 2*width + 1],
    [width + 2, 2*width, 2*width + 1, 2*width + 2]
    ]

    const sTetro = [
    [1, 2, width, width + 1],
    [0, width, width + 1, 2*width + 1],
    [1, 2, width, width + 1],
    [0, width, width + 1, 2*width + 1]
    ]

    const zTetro = [
    [0, 1, width + 1, width + 2],
    [1, width, width + 1, 2*width],
    [0, 1, width + 1, width + 2],
    [1, width, width + 1, 2*width]
    ]

    // One list for all of your tetrominos and another list for all of their colours
	const tetros = [iTetro, oTetro, tTetro, jTetro, lTetro, sTetro, zTetro]
	const colours = ['cyan','yellow','magenta','blue','orange','lime','red']



// SECTION 5: DRAW(), UNDRAW(), FREEZE()

	//currentPosition is what index div the tetromino starts at (4 is in the center)
	//currentRotation is what rotation from our tetromino array is selected
    let currentPosition = 4
    let currentRotation = 0

	//Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
	//Multiplying it by the length of the tetros array gives a number from 0 - 6.93 (since the length of tetros is 7)
	//Math.floor() returns a random integer less than or equal to a given number so in this case it just removes the decimals on the end

	//random is an index of what colour and tetromino to use from the arrays
	//nextRandom is the same thing but is the next tetromino that will be selected
    let random = Math.floor(Math.random()*tetros.length)
    let nextRandom = Math.floor(Math.random()*tetros.length)

	//colour is which random colour is selected from the colours array
    let colour = colours[random]
    // current is an array of indexes for the main grid for each square in the tetromino
    let current = tetros[random][currentRotation]

	/*
	Activity: log which colour and tetromino is selected to confirm everything is working
	console.log(colour)
	console.log(current)
	*/

    //draw the Tetromino
    function draw() {
		//forEach applies stuff for each index in the array
		//in this case the array is current and for each index in the current, we are adding the random colour class
		//essentially it is adding a colour to the div to represent a square of the tetromino

		//currentPosition + index is making it so currentPosition is our new reference for where the tetromino is
		current.forEach(index=>{
			squares[currentPosition + index].classList.add(colour)
		})
	}

	/*
	Activity: try drawing a tetromino!
	draw()
	*/

    //undraw the Tetromino
    function undraw() {
		//this function does the same thing as draw but removes the colour from the div
		current.forEach(index=>{
			squares[currentPosition + index].classList.remove(colour)
		})
	}

    function freeze() {
		// .some() returns true if any arguments are true
		// checks if next row is taken and if it is makes that tetromino taken and drops a new one

		//if any of the divs below the tetromino are taken
		if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
			//making each index of the tetromino become taken
			current.forEach(index=>squares[currentPosition + index].classList.add('taken'))
			//setting random to the next random and getting a new nextRandom
			random = nextRandom
			nextRandom = Math.floor(Math.random()*tetros.length)
			//setting the array current to the new random tetromino
			current = tetros[random][currentRotation]
			//Resetting the current position to the top centre
			currentPosition = 4
			//getting the new random colour and drawing the new tetromino
			colour = colours[random]
			draw()
		}
	}

    // SECTION 6: KEY PRESSES

	//in all of these functions we are undrawing the tetromino, changing something, then redrawing it
	//usually we are changing the position or rotation of the tetromino

    function moveDown() {
		//undrawing, changing tetromino position then redrawing in new position
		undraw()
		//setting position of tetromino an entire width (or row) below
		currentPosition += width
		draw()
		freeze()
	}

	//setInterval calls the function moveDown every 1000 milliseconds
	setInterval(moveDown, 1000)

	function moveLeft() {
		undraw()
		//the tetromino is at the left border/wall if the (position / width) has no remainder
		const atLeft = current.some(index => (currentPosition + index)%width === 0)
		if(!atLeft){
			// moves position left by 1 if not at left edge
			currentPosition -=1
		}
		if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
			// moves position right by 1 if there is a tetromino already there
			currentPosition +=1
		}
		draw()
	}

	/*
	Activity: attempt to code the moveRight() function!
	Hint: It is basically opposite except for the atRight variable
			Think of what index means it is at the right border (something to do with width)
	*/
	
	function moveRight() {
		
	}

    function rotate() {
		undraw()
		const atRight = current.some(index => (currentPosition + index)%width === width - 1)
		const atLeft = current.some(index => (currentPosition + index)%width === 0)
		//if the tetromino is not at the left or right side, increase the currentRotation
		if (!atRight && !atLeft){
			currentRotation++
		} 
		//if the currentRotation is 4, it means it is higher than the max index of rotations so it is set back to the zero index rotation
		if(currentRotation == 4){
			currentRotation = 0
		}
		//changing current tetromino to the same one but the new rotation value
		current = tetros[random][currentRotation]
		draw()
        freeze()
	}

	/*
	Activity: Figure out which number keycode corresponds to what key
	Go to: https://keycode.info/
	Replace the 0s below with the correct codes
	*/

    function control(arrow){
		// left arrow or a
		if(arrow.keyCode === 0 || arrow.keyCode === 0){
			moveLeft()
		}
		// right arrow or d
		else if(arrow.keyCode === 0 || arrow.keyCode === 0){
			moveRight()
		}
		// up arrow or w
		else if(arrow.keyCode === 0 || arrow.keyCode === 0){
			rotate()
		}
		// down arrow or s
		else if(arrow.keyCode === 0 || arrow.keyCode === 0){
			moveDown()
		}
	}
	// calls function 'control' when a key is released
	//it automatically passes which key was released into the function as parameter 'arrow'
	document.addEventListener('keyup',control)


	//Remember to comment out setInterval(moveDown,1000)
	//We will be adding a better way to make the tetrominos move down in the next section
})