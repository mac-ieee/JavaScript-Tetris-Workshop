// _________________________________________________________________________________________________________________________
// SECTION 1: HTML & CSS



// _________________________________________________________________________________________________________________________
// SECTION 2: JAVASCRIPT BASICS (VARIABLES, LOOPS, ARRAYS, FUNCTIONS)

// VARIABLES (VAR, LET, CONST)
// if a variable is not inside a function, you can consider it globally defined

// VAR
// a variable defined using var is scoped to the function it is in

// LET & CONST
// a variable defined using let or const is scoped to the block it is in (a block is {})

// CONST
// variable using const cannot be reassigned, but items in a const array can

{
	var x1 = "var"
	let x2 = "let"
	const x3 = "const"
	// x1 = "changed var" 
	// x2 = "changed let"
	// x3 = "changed const"
	// console.log(x1)
	// console.log(x2)
	// console.log(x3)
}
// console.log(x1)
// console.log(x2)
// console.log(x3)



// LOOPS (FOR, WHILE)

// a "while" loop takes a conditional as a parameter and runs as long as the condition is true
// you can read it as "while () is true, do {}"
// if you're not careful with while loops, they can run indefinitely which can cause problems
let i
i = 100
while(i<110){
	console.log(i)
	i++
}

// to increment the variable i:
// i++ increases i by 1
// i-- decreases i by 1
// i+=n increases i by some number n 
// i-=n decreases i by some number n
// (e.g. i+=5 would increase i by 5 each increment)


// a "for" loop has three parameters: a start point, a conditional, and an increment
// the one below starts at i = 0, continues until the conditional is no longer true, and increments by 1
for(i = 0; i < 10; i++){
	console.log(i)
}


// ARRAYS AND INDEXING
// arrays are objects which can hold multiple pieces of data and different types of data
// indexing an array starts at 0
// i.e. to get the first item of an array named x, you would have to use x[0]
// to access the second item of the array named x, you would have to use x[1] and so forth

// this array is declared using const so you cannot reassign it, but you can change items inside the array
// a built-in method is of an array x is x.length which returns the number of items in the array
// this "for" loop logs every item in the array
const arr = ["It's","raining","dogs","and","cats!",3,8,1998]
console.log(arr[2])
for (i = 0; i<arr.length; i++){
	console.log(arr[i])
}
// here we change the 3rd item and the 5th item of the array
arr[2] = "snakes"
arr[4] = "ladders!"
for (i = 0; i<arr.length; i++){
	console.log(arr[i])
}

// EXERCISE
// A) try declaring an array with the items "I'm", "making", "Tetris", "today", "!"
// B) first, log only the word "Tetris" in the console
// C) then, change "I'm" to "(your name)'s" 
// (i.e. my name is Calvin so I would change "I'm" to "Calvin's")
// D) lastly, make a for loop to log the entire array

// TYPE BELOW___________________________________________________________________________________________________________________________






// _________________________________________________________________________________________________________________________
// SECTION 3: EDITING HTML IN JAVASCRIPT


// THE HTML DOM
// when JavaScript is running through an HTML file, the HTML document can be accessed in JavaScript using the variable "document"

// ACCESSING AN ELEMENT
// to access an element, you can use document.getElementById("id_name")
// where id_name is the ID of the element you are trying to access
// e.g. element with id = "goodstuff"
// document.getElementById("goodstuff")

// CREATING AN ELEMENT
// to create an element, you can use document.createElement("element_type")
// where element_type is the type of element you want to create
// e.g. to create a div
// document.createElement("div")

// APPENDING OR REMOVING AN ELEMENT
// to add an element A to another element B in the document, you can use elementB.appendChild(elementA)
// where elementA is the element to be added and elementB is the element being added to
// similarly to remove an element, elementB.removeChild(elementA)
// for example:
// var elementB = document.getElementById("elementB")
// var elementA = document.createElement("div")
// elementB.appendChild(elementA)

// ADDING OR REMOVING CLASSES
// to add or remove a class to some element X
// elementX.classList.add("class_name")
// elementX.classList.remove("class_name")
// where class_name is the class
// e.g. to add the class "villain" to the element joker
// joker.classList.add("villain")

// EVENT LISTENERS
// event listeners execute the code within the block only when a specified event occurs on the element it is attached to

// 'DOMContentLoaded' is the most common event and refers to when the contents of the HTML document have finished loading/displaying
// document.addEventListener('DOMContentLoaded',() => {code})
// this event listener is attached to the whole document itself

// 'click' is another common event and refers to when the attached element is clicked
// e.g. to make code run when elementA is clicked:
// elementA.addEventListener('click',() => {code})


// there are a lot of methods associated with the DOM so for more information, you can visit:
// https://www.w3schools.com/js/js_htmldom_document.asp



document.addEventListener('DOMContentLoaded',() => {
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
	// For our NEXT UP display, we need to create 16 divs and add it to the div with the "minigrid" id.
	// Try doing this with a for loop like the examples above.
	// TYPE BELOW___________________________________________________________________________________________________________________________
	





// VARIABLES
	const grid = document.querySelector('#maingrid')
	let squares = Array.from(document.querySelectorAll('#maingrid div'))
	const width = 10
	const scoreDisplay = document.querySelector('#score')
	const gameEnd = document.querySelector('#gameend')
	const startButton = document.querySelector('#startButton')
	let timerId
	let score = 0



// SECTION 4: CREATING TETROMINOS

	// Try making the L-shaped Tetromino! The rest of the tetrominos have been created for you.
	// TYPE BELOW___________________________________________________________________________________________________________________________
	const lTetro = []


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






// SECTION


	// Mini Grid
	const mwidth = 4
	const miTetro = [1, mwidth + 1, 2*mwidth + 1, 3*mwidth + 1]
	const moTetro = [0, 1, mwidth, mwidth + 1]
	const mtTetro = [mwidth + 1, 2*mwidth, 2*mwidth + 1, 2*mwidth + 2]
	const mjTetro = [1, mwidth + 1, 2*mwidth, 2*mwidth + 1]
	const mlTetro = [1, mwidth + 1, 2*mwidth + 1, 2*mwidth + 2]
	const msTetro = [1, 2, mwidth, mwidth + 1]
	const mzTetro = [0, 1, mwidth + 1, mwidth + 2]
	const mtetros = [miTetro, moTetro, mtTetro, mjTetro, mlTetro, msTetro, mzTetro]
	const miniGrid = document.querySelector('#minigrid')
	let miniSquares = Array.from(document.querySelectorAll('#minigrid div'))
	let next = mtetros[nextRandom]
	function miniDraw() {
		next.forEach(index=>{
			miniSquares[index].classList.remove('mtetro')
			miniSquares[index].classList.remove(nextColour)
		})
		next = mtetros[nextRandom]
		nextColour = colours[nextRandom]
		next.forEach(index=>{
			miniSquares[index].classList.add('mtetro')
			miniSquares[index].classList.add(nextColour)
		})
	}

	startButton.addEventListener('click', () =>{
		var music = document.getElementById("music")
		if(timerId){
			clearInterval(timerId)
			timerId = null
			music.pause();
		}
		else {
			timerId = setInterval(moveDown,300)
			music.play();
			music.volume = 0.4
		}
		if(!started){
			started = true
			moveDown()
			nextRandom = Math.floor(Math.random()*tetros.length)
			miniDraw()
		}
	})












// SECTION X: SCORE AND GAME OVER

	function addScore() {
		var i
		var j
		for (i = 0; i < 199; i+=width) {
			const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
			if(row.every(index => squares[index].classList.contains('taken'))){
				score +=10
				scoreDisplay.innerHTML = score
				row.forEach(index => {
					squares[index].classList.remove('taken')
					squares[index].classList.remove('tetro')
					for (j = 0; j<colours.length; j++){
						squares[index].classList.remove(colours[j])
					}
				})
				// removes row from squares and saves it in squaresRemoved
				const squaresRemoved = squares.splice(i, width)
				// appends squares to the bottom of squaresRemoved
				squares = squaresRemoved.concat(squares)
				squares.forEach(cell => grid.appendChild(cell))

			}
		}
	}


	function gameOver() {
		if(current.some(index=> squares[currentPosition + index].classList.contains('taken'))){
			gameEnd.innerHTML = 'GAME OVER!!!'
			// scoreDisplay.innerHTML = ''
			clearInterval(timerId)
			timerId = null
			music.pause();
		}
	}

})



