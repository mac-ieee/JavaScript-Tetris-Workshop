document.addEventListener('DOMContentLoaded', () => {
    var i;
    // This for loop creates a div and adds it inside "maingrid", repeating this 200 times.
    for (i = 0; i < 200; i++) {
        var block = document.createElement("div")
        document.getElementById("maingrid").appendChild(block)
    }
    // This for loop creates a div, gives it the class "taken", and adds it inside "maingrid", repeating this 10 times.
    for (i = 0; i < 10; i++) {
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
