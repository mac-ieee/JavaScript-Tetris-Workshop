// SECTION 2: JAVASCRIPT BASICS (VARIABLES, LOOPS, ARRAYS, FUNCTIONS)

// VARIABLES (VAR, LET, CONST)
// there are three keywords to define variables in JavaScript: var, let, const

// VAR
// a variable defined using var is scoped to the function it is in
// variables defined using var that are not inside a function are globally defined

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


// VARIABLE TYPES (NUMBERS, BOOLEANS, ARRAYS)
// there are many different data and structure types in JavaScript
// you can read more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// in this workshop, we will focus on numbers, booleans, and arrays 

// NUMBERS
// numbers are somewhat unique to JavaScript
// a number will be an integer if you set it to an integer and will be a floating-point number
// if you set it to a floating-point number

// var x = 1.5
// console.log(x)

// BOOLEANS
// booleans hold two possible values: true or false


// LOOPS (FOR, WHILE)

// a "while" loop takes a conditional as a parameter and runs as long as the condition is true
// you can read it as "while () is true, do {}"
// if you're not careful with while loops, they can run indefinitely which can cause problems
// let i
// i = 100
// while (i < 110) {
//     console.log(i)
//     i++
// }

// to increment the variable i:
// i++ increases i by 1
// i-- decreases i by 1
// i+=n increases i by some number n 
// i-=n decreases i by some number n
// (e.g. i+=5 would increase i by 5 each increment)


// a "for" loop has three parameters: a start point, a conditional, and an increment
// the one below starts at i = 0, continues until the conditional is no longer true, and increments by 1
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


// ARRAYS AND INDEXING
// arrays are objects which can hold multiple pieces of data and different types of data
// indexing an array starts at 0
// i.e. to get the first item of an array named x, you would have to use x[0]
// to access the second item of the array named x, you would have to use x[1] and so forth

// this array is declared using const so you cannot reassign it, but you can change items inside the array
// a built-in method is of an array x is x.length which returns the number of items in the array
// this "for" loop logs every item in the array
// const arr = ["It's", "raining", "dogs", "and", "cats!", 3, 8, 1998]
// console.log(arr[2])
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// here we change the 3rd item and the 5th item of the array
// arr[2] = "snakes"
// arr[4] = "ladders!"
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// EXERCISE
// A) try declaring an array with the items "I'm", "making", "Tetris", "today", "!"
// B) first, log only the word "Tetris" in the console
// C) then, change "I'm" to "(your name)'s" 
// (i.e. my name is Calvin so I would change "I'm" to "Calvin's")
// D) lastly, make a for loop to log the entire array

// TYPE BELOW___________________________________________________________________________________________________________________________




// FUNCTIONS (standard definition, arrow function notation)
// functions are used to perform a specific task, possibly many times
// for example, in our game, we may want to rotate the piece if the player presses a certain button
// but, we don't know how many times they are going to press it
// so we use a function that gets called every time a player presses the rotate button (you'll see later)
// here is a demo of a function definition in JavaScript with the keyword function

// function hello(name) {
//     console.log('My name is ' + name)
// }

// hello('Edward')

// the following two definitions are equivalent
// function (parameters) {function body}
// (parameters) => {function body}



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
// event listeners execute the specified function when a specified event occurs on the element it is attached to

// 'DOMContentLoaded' is the most common event and refers to when the contents of the HTML document have finished loading/displaying
// document.addEventListener('DOMContentLoaded', () => { code })
// this event listener is attached to the whole document itself

// 'click' is another common event and refers to when the attached element is clicked
// e.g. to make code run when elementA is clicked:
// elementA.addEventListener('click',() => {code})
// document.addEventListener('DOMContentLoaded', () => {
//     var startButton = document.getElementById("startButton")
//     startButton.addEventListener('click', () => {
//         console.log('Start button pressed')
//     })
// })
// the 'DOMContentLoaded' event listener is used here to ensure that the HTML DOM is fully loaded so that getElementById("startButton")
// can actually find the start button element

// there are a lot of methods associated with the DOM so for more information, you can visit:
// https://www.w3schools.com/js/js_htmldom_document.asp



document.addEventListener('DOMContentLoaded', () => {
    // var i;
    // // This for loop creates a div and adds it inside "maingrid", repeating this 200 times.
    // for (i = 0; i < 200; i++) {
    //     var block = document.createElement("div")
    //     document.getElementById("maingrid").appendChild(block)
    // }
    // // This for loop creates a div, gives it the class "taken", and adds it inside "maingrid", repeating this 10 times.
    // for (i = 0; i < 10; i++) {
    //     var block = document.createElement("div")
    //     block.className = 'taken'
    //     document.getElementById("maingrid").appendChild(block)
    // }
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
        [1, width + 1, 2 * width + 1, 3 * width + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, 2 * width + 1, 3 * width + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const oTetro = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const tTetro = [
        [width + 1, 2 * width, 2 * width + 1, 2 * width + 2],
        [1, width + 1, width + 2, 2 * width + 1],
        [width, width + 1, width + 2, 2 * width + 1],
        [1, width + 1, width, 2 * width + 1]
    ]

    const jTetro = [
        [1, width + 1, 2 * width, 2 * width + 1],
        [width, 2 * width, 2 * width + 1, 2 * width + 2],
        [1, 2, width + 1, 2 * width + 1],
        [width, width + 1, width + 2, 2 * width + 2]
    ]

    const sTetro = [
        [1, 2, width, width + 1],
        [0, width, width + 1, 2 * width + 1],
        [1, 2, width, width + 1],
        [0, width, width + 1, 2 * width + 1]
    ]

    const zTetro = [
        [0, 1, width + 1, width + 2],
        [1, width, width + 1, 2 * width],
        [0, 1, width + 1, width + 2],
        [1, width, width + 1, 2 * width]
    ]

    // One list for all of your tetrominos and another list for all of their colours
    const tetros = [iTetro, oTetro, tTetro, jTetro, lTetro, sTetro, zTetro]
    const colours = ['cyan', 'yellow', 'magenta', 'blue', 'orange', 'lime', 'red']
})
