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

let today = ["I'm", "making", "Tetris", "today", "!"]
console.log(today[2])
today[0] = "Calvin's"
for (i = 0; i<today.length; i++){
	console.log(today[i])
}





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



	// var i;
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
	const grid = document.querySelector('#maingrid')
	let squares = Array.from(document.querySelectorAll('#maingrid div'))
	const width = 10
	const scoreDisplay = document.querySelector('#score')
	const gameEnd = document.querySelector('#gameend')
	const startButton = document.querySelector('#startButton')
	let timerId
	let score = 0

	const musicMaster = document.querySelector('#musicMaster')
    	const volU = document.querySelector('#volU')
    	const volD = document.querySelector('#volD')



// SECTION 4: CREATING TETROMINOS

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

	// the width is 10 so halfway through the screen is 5
	// since we are indexing, the position becomes 4
	// (remember, x[4] accesses the 5th item of the array x)
	let currentPosition = 4
	let currentRotation = 0

	let random = Math.floor(Math.random()*tetros.length)
	let colour = colours[random]
	// SECTION 8 VARIABLES (nextRandom AND nextColour)
	let nextRandom = Math.floor(Math.random()*tetros.length)
	let nextColour = colours[nextRandom]
	// current is an array of indexes for each square in the tetromino
	let current = tetros[random][currentRotation]
	let display = false
	let started = false


	function draw() {
		current.forEach(index=>{
			squares[currentPosition + index].classList.add(colour)
		})
	}

	function undraw() {
		current.forEach(index=>{
			squares[currentPosition + index].classList.remove(colour)
		})
	}

	function freeze() {
		// .some() returns true if any arguments are true
		// checks if next row is the 'bottom' row
		if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
			current.forEach(index=>squares[currentPosition + index].classList.add('taken'))
			random = nextRandom
			nextRandom = Math.floor(Math.random()*tetros.length)
			current = tetros[random][currentRotation]
			currentPosition = 4
			currentRotation = 0
			colour = colours[random]
			miniDraw()
<<<<<<< HEAD
			// addScore()
			// gameOver()
=======
			addScore()
			gameOver()
>>>>>>> ea31c0e0548f4cb9719e05b3b3543e9dcbcc30ba
			
		}
	}


	function moveDown() {
		undraw()
		currentPosition += width
		draw()
		freeze()
	}







// SECTION 6: KEY PRESSES



	


	function moveLeft() {
		undraw()
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
		freeze()
	}

	function moveRight() {
		undraw()
		const atRight = current.some(index => (currentPosition + index)%width === width - 1)
		if(!atRight){
			// moves position left by 1 if not at left edge
			currentPosition +=1
		}
		if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
			// moves position right by 1 if there is a tetromino already there
			currentPosition -=1
		}
		draw()
		freeze()
	}



	function rotate() {
		undraw()
		const atRight = current.some(index => (currentPosition + index)%width === width - 1)
		const atLeft = current.some(index => (currentPosition + index)%width === 0)
		if (!atRight && !atLeft){
			currentRotation++
		} 
		if(currentRotation == current.length){
			currentRotation = 0
		}
		current = tetros[random][currentRotation]
		draw()
		freeze()
	}


	function control(arrow){
		if(timerId){
			// left arrow or a
			if(arrow.keyCode === 37 || arrow.keyCode === 65){
				moveLeft()
			}
			// right arrow or d
			else if(arrow.keyCode === 39 || arrow.keyCode === 68){
				moveRight()
			}
			// up arrow or w
			else if(arrow.keyCode === 38 || arrow.keyCode === 87){
				rotate()
			}
			// down arrow or s
			else if(arrow.keyCode === 40 || arrow.keyCode === 83){
				moveDown()
			}
		}
	}
	// passes function 'control' to event listener on a keypress
	document.addEventListener('keyup',control)

	// timerID = setInterval(moveDown,100)










// (SECTION 7 IS BELOW SECTION 8)
// SECTION 8: NEXT UP DISPLAY





	// MINI GRID
	// similar to how we made the tetrominos for the main grid, we can make the tetrominos for the mini grid
	// however, since the tetrominos in the mini grid don't rotate we can just put one orientation
	// also, instead of width, which is 10, we need to use a new width of 4 for the mini grid
	const mwidth = 4
	// EXERCISE
	// make the O and T tetrominos!
	const moTetro = [0, 1, mwidth, mwidth + 1]
	const mtTetro = [mwidth + 1, 2*mwidth, 2*mwidth + 1, 2*mwidth + 2]

	// the rest of the tetrominos have been made for you
	const miTetro = [1, mwidth + 1, 2*mwidth + 1, 3*mwidth + 1]
	const mjTetro = [1, mwidth + 1, 2*mwidth, 2*mwidth + 1]
	const mlTetro = [1, mwidth + 1, 2*mwidth + 1, 2*mwidth + 2]
	const msTetro = [1, 2, mwidth, mwidth + 1]
	const mzTetro = [0, 1, mwidth + 1, mwidth + 2]
	const mtetros = [miTetro, moTetro, mtTetro, mjTetro, mlTetro, msTetro, mzTetro]
	// EXERCISE
	// can you figure out how to extract the minigrid and the squares in the minigrid from the HTML document?
	const miniGrid = document.querySelector('#minigrid')
	let miniSquares = Array.from(document.querySelectorAll('#minigrid div'))

	// NEXT RANDOM
	// originally we had: let random = Math.floor(Math.random()*tetros.length) 
	// and let colour = colours[random]
	// to show the next tetromino we need to know the random number that comes next
	// to do this we can use: let nextRandom = Math.floor(Math.random()*tetros.length) 
	// and let nextColour = colours[nextRandom]
	// then, in our freeze function we can assign random to the next random number instead of generating a new number
	// like this: random = nextRandom
	// and we still need to generate the next random number: nextRandom = Math.floor(Math.random()*tetros.length)
	let next = mtetros[nextRandom]

	// UNDRAW() AND DRAW()
	// undraw() removes the colour from the each square
	// draw() adds colour to the squares at which have the indexes in the tetromino

	// MINIDRAW
	// each time we have a new tetromino, we need to undraw the previous tetromino and draw the next tetromino
	// here we combine the undraw() and draw() functions to make miniDraw()
	// after we undraw a tetromino, we need to update the tetronimo and colour to the next tetromino
	// then, we can draw it
	// we can put this function in freeze() so that when a tetromino hits the bottom, we will update the Next Up display
	
	function miniDraw() {
		next.forEach(index=>{
			miniSquares[index].classList.remove(nextColour)
		})
		next = mtetros[nextRandom]
		nextColour = colours[nextRandom]
		next.forEach(index=>{
			miniSquares[index].classList.add(nextColour)
		})
	}







// SECTION 7: START/PAUSE BUTTON AND TIMER ID


// in this section, we will use two built-in functions: setInterval() and clearInterval()


// SETINTERVAL()
// the function setInterval() has two parameters, a function and a number representing milliseconds
// you would input the function and milliseconds like this: setInterval(function, milliseconds)
// using setInterval() starts a continued function call where every number of milliseconds the input function is executed
// e.g. for some function named playAlarm() that plays an alarm and 2000 milliseconds
// setInterval(playAlarm,2000) would play an alarm every 2000 milliseconds, or every 2 seconds (1000 milliseconds = 1 second)
// setInterval() returns the id of the timer that you set
// to stop this continued function call, you would use clearInterval()


// CLEARINTERVAL()
// the function clearInterval() has one parameter, the id of the timer returned by setInterval()
// to use this, we initialize setInterval() in a variable
// then we use variable in clearInterval()
// e.g. using the playAlarm() example, initializing the variable time starts playing the alarm every 2 seconds, clearInterval() stops the timer
// var timer = setInterval(playAlarm,2000)
// clearInterval(timer)


// STARTBUTTON
// to get the start button from the HTML document, we can use: const startButton = document.querySelector('#startButton')
// this retrives the element with the id "startButton"
// then, we can add an event listener which will execute a function every time the element is clicked
// note that here you see ()=>{}
// this is the same as declaring a function as function(){}
// once the button is clicked, we want to use setInterval() and moveDown() to start the game
// we initialize setInterval() to the variable timerId so we can clear it later
// since we also want to be able to pause the game from the same button, we add an if statement so that if the game is already running, we clear timerId
// here we can use if(timerId){} since a variable that is not undefined or 0 returns True which means the code in the if statement will run


// BOOLEANS(TRUE OR FALSE)
// in JavaScript, certain values will return false when we evaluate them as true or false
// if we initialize a variable x, the following will all return false: x, x=0, x=null, x="", x=false
// x is undefined by itself, null is equivalent to 0 and both represent false, an empty string has no value and is false
// there are also statements using "==", ">", and "<"
// these represent equal to, greater than, and less than
// e.g. 3 == (2+1) will return true
// e.g. 3 > 4 will return false
// e.g. 3 < 4 will return true
// "!"" represents not
// e.g. !true will return false
// e.g. !(3<4) will return false


// TIMERID
// timerId will return true if it has a value
// it is being used to store the timer id of setInterval() so it will have a value if the game is running


// PAUSE
// if timerId is true, which means the game is running, if(timerId){} will execute
// we will clearInterval(timerId) so that moveDown() is no longer running every x milliseconds (x being whatever you set the number to)
// then, we will set timerId to false so that the next time the start/pause button is clicked the game starts again
// remember, null is the same as false in this case
// if timerId is not true, then the if statement moves to else{}
// in else{} we set timerId to setInterval() again to resume the game


// MUSIC
// we can also pause and play the music when the game pauses and resumes



<<<<<<< HEAD
	startButton.addEventListener('click', () =>{
		if(timerId){
			clearInterval(timerId)
			timerId = null
		}
		else {
			timerId = setInterval(moveDown,350)
=======
	var musicOff = false;

	startButton.addEventListener('click', () =>{
		var music = document.getElementById("music")
		music.volume = 0.3
		if(timerId){
			clearInterval(timerId)
			timerId = null
			music.pause();
		}
		else {
			timerId = setInterval(moveDown,350)
			if(!musicOff){
                		music.play();
            		}
			
>>>>>>> ea31c0e0548f4cb9719e05b3b3543e9dcbcc30ba
		}
		if(!started){
			moveDown()
			started = true
			nextRandom = Math.floor(Math.random()*tetros.length)
			miniDraw()
		}
	})


// CORBIN'S VOLUME CONTROLS
<<<<<<< HEAD
	// musicMaster.addEventListener('click', () =>{
	// 	if(!musicOff){
	//     		musicOff = true;
	//     		music.pause();
	// 	}
	// 	else{
	//     		musicOff = false;
	//     		music.play();
	// 	}
 //    	})

	// volU.addEventListener('click', () =>{
	// 	music.volume += 0.1
	// })

	// volD.addEventListener('click', () =>{
	// 	music.volume -= 0.1
	// })
=======
	musicMaster.addEventListener('click', () =>{
		if(!musicOff){
	    		musicOff = true;
	    		music.pause();
		}
		else{
	    		musicOff = false;
	    		music.play();
		}
    	})

	volU.addEventListener('click', () =>{
		music.volume += 0.1
	})

	volD.addEventListener('click', () =>{
		music.volume -= 0.1
	})
>>>>>>> ea31c0e0548f4cb9719e05b3b3543e9dcbcc30ba






// SECTION X: SCORING THE GAME




<<<<<<< HEAD
	// function addScore() {
	// 	var i
	// 	var j
	// 	for (i = 0; i < 199; i+=width) {
	// 		const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
	// 		if(row.every(index => squares[index].classList.contains('taken'))){
	// 			score +=10
	// 			scoreDisplay.innerHTML = score
	// 			row.forEach(index => {
	// 				squares[index].classList.remove('taken')
	// 				squares[index].classList.remove('tetro')
	// 				for (j = 0; j<colours.length; j++){
	// 					squares[index].classList.remove(colours[j])
	// 				}
	// 			})
	// 			// removes row from squares and saves it in squaresRemoved
	// 			const squaresRemoved = squares.splice(i, width)
	// 			// appends squares to the bottom of squaresRemoved
	// 			squares = squaresRemoved.concat(squares)
	// 			squares.forEach(cell => grid.appendChild(cell))

	// 		}
	// 	}
	// }


	// function gameOver() {
	// 	if(current.some(index=> squares[currentPosition + index].classList.contains('taken'))){
	// 		gameEnd.innerHTML = 'GAME OVER!!!'
	// 		// scoreDisplay.innerHTML = ''
	// 		clearInterval(timerId)
	// 		timerId = null
	// 		music.pause();
	// 	}
	// }
=======
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
>>>>>>> ea31c0e0548f4cb9719e05b3b3543e9dcbcc30ba

})



