let app = document.getElementById('app');

let playerStart;
let playerTurn;
let turnCount = 0;
let xHasWon = false;
let oHasWon = false;
let draw = false;
let infoMessage = "Click a square to begin!"
let resultClass;

let grid0 = false;
let grid1 = false;
let grid2 = false;
let grid3 = false;
let grid4 = false;
let grid5 = false;
let grid6 = false;
let grid7 = false;
let grid8 = false;

let grid = [

    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
    {
        isX: false,
        isO: false,
    },
]

startGame();
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
    <div class="title">Tic tac toe!</div>
        <div class="gridContainer">
            <div id="0" class="gridBox ${grid0 ? resultClass : ''}" ${grid[0].isX || grid[0].isO ? '' : `onmouseup="placeX('0')"`}>
                <img src="${grid[0].isX ? "img/X.png" : (grid[0].isO ? "img/O.png" : "")}">
            </div>
            <div id="1" class="gridBox ${grid1 ? resultClass : ''}" ${grid[1].isX || grid[1].isO ? '' : `onmouseup="placeX('1')"`}>
                <img src="${grid[1].isX ? "img/X.png" : (grid[1].isO ? "img/O.png" : "")}">
            </div>
            <div id="2" class="gridBox ${grid2 ? resultClass : ''}" ${grid[2].isX || grid[2].isO ? '' : `onmouseup="placeX('2')"`}>
                <img src="${grid[2].isX ? "img/X.png" : (grid[2].isO ? "img/O.png" : "")}">
            </div>
            <div id="3" class="gridBox ${grid3 ? resultClass : ''}" ${grid[3].isX || grid[3].isO ? '' : `onmouseup="placeX('3')"`}>
                <img src="${grid[3].isX ? "img/X.png" : (grid[3].isO ? "img/O.png" : "")}">
            </div>
            <div id="4" class="gridBox ${grid4 ? resultClass : ''}" ${grid[4].isX || grid[4].isO ? '' : `onmouseup="placeX('4')"`}>
                <img src="${grid[4].isX ? "img/X.png" : (grid[4].isO ? "img/O.png" : "")}">
            </div>
            <div id="5" class="gridBox ${grid5 ? resultClass : ''}" ${grid[5].isX || grid[5].isO ? '' : `onmouseup="placeX('5')"`}>
                <img src="${grid[5].isX ? "img/X.png" : (grid[5].isO ? "img/O.png" : "")}">
            </div>
            <div id="6" class="gridBox ${grid6 ? resultClass : ''}" ${grid[6].isX || grid[6].isO ? '' : `onmouseup="placeX('6')"`}>
                <img src="${grid[6].isX ? "img/X.png" : (grid[6].isO ? "img/O.png" : "")}">
            </div>
            <div id="7" class="gridBox ${grid7 ? resultClass : ''}" ${grid[7].isX || grid[7].isO ? '' : `onmouseup="placeX('7')"`}>
                <img src="${grid[7].isX ? "img/X.png" : (grid[7].isO ? "img/O.png" : "")}">
            </div>
            <div id="8" class="gridBox ${grid8 ? resultClass : ''}" ${grid[8].isX || grid[8].isO ? '' : `onmouseup="placeX('8')"`}>
                <img src="${grid[8].isX ? "img/X.png" : (grid[8].isO ? "img/O.png" : "")}">
            </div>
        </div>
            <div class="infoScreen">${infoMessage}${oHasWon || xHasWon || draw ? '<button onmousedown="location.reload()">Restart</button>' : ''}</div>

    `;
}

function startGame(){
    let whoStarts = Math.floor(Math.random()*2)
    if (whoStarts == 1){
        playerTurn = true;
    }else{
        turnCount++;
        infoMessage = "Opponent starts the game!"
        setTimeout(placeO, 1000);
    }
}

function placeX(gridNumber) {
    if (!playerTurn) return;
    if (xHasWon || oHasWon || draw) return;
    if (gridNumber == '0' && grid[gridNumber].isO == false) {
        grid[0].isX = true;
    }
    else if (gridNumber == '1' && grid[gridNumber].isO == false) {
        grid[1].isX = true;
    }
    else if (gridNumber == '2' && grid[gridNumber].isO == false) {
        grid[2].isX = true;
    }
    else if (gridNumber == '3' && grid[gridNumber].isO == false) {
        grid[3].isX = true;
    }
    else if (gridNumber == '4' && grid[gridNumber].isO == false) {
        grid[4].isX = true;
    }
    else if (gridNumber == '5' && grid[gridNumber].isO == false) {
        grid[5].isX = true;
    }
    else if (gridNumber == '6' && grid[gridNumber].isO == false) {
        grid[6].isX = true;
    }
    else if (gridNumber == '7' && grid[gridNumber].isO == false) {
        grid[7].isX = true;
    }
    else if (gridNumber == '8' && grid[gridNumber].isO == false) {
        grid[8].isX = true;
    }
    playerTurn = false;
    infoMessage = "Opponent plays..."
    setTimeout(() => {
        placeO();
    }, 500);

    turnCount++;
    checkGameStatus();
    updateView();
}

function placeO() {

    if (xHasWon || oHasWon || draw) return;

    //OPPONENT WIN ATTEMPTS
    //ROW 1
    if (grid[0].isO && grid[1].isO && !grid[2].isO && !grid[2].isX) grid[2].isO = true;
    else if (grid[0].isO && !grid[1].isO && grid[2].isO && !grid[1].isX) grid[1].isO = true;
    else if (!grid[0].isO && grid[1].isO && grid[2].isO && !grid[0].isX) grid[0].isO = true;

    //ROW 2
    else if (grid[3].isO && grid[4].isO && !grid[5].isO && !grid[5].isX) grid[5].isO = true;
    else if (grid[3].isO && !grid[4].isO && grid[5].isO && !grid[4].isX) grid[4].isO = true;
    else if (!grid[3].isO && grid[4].isO && grid[5].isO && !grid[3].isX) grid[3].isO = true;

    //ROW 3
    else if (grid[6].isO && grid[7].isO && !grid[8].isO && !grid[8].isX) grid[8].isO = true;
    else if (grid[6].isO && !grid[7].isO && grid[8].isO && !grid[7].isX) grid[7].isO = true;
    else if (!grid[6].isO && grid[7].isO && grid[8].isO && !grid[6].isX) grid[6].isO = true;

    //COLUMN 1
    else if (grid[0].isO && grid[3].isO && !grid[6].isO && !grid[6].isX) grid[6].isO = true;
    else if (grid[0].isO && !grid[3].isO && grid[6].isO && !grid[3].isX) grid[3].isO = true;
    else if (!grid[0].isO && grid[3].isO && grid[6].isO && !grid[0].isX) grid[0].isO = true;

    //COLUMN 2
    else if (grid[1].isO && grid[4].isO && !grid[7].isO && !grid[7].isX) grid[7].isO = true;
    else if (grid[1].isO && !grid[4].isO && grid[7].isO && !grid[4].isX) grid[4].isO = true;
    else if (!grid[1].isO && grid[4].isO && grid[7].isO && !grid[1].isX) grid[1].isO = true;

    //COLUMN 3
    else if (grid[2].isO && grid[5].isO && !grid[8].isO && !grid[8].isX) grid[8].isO = true;
    else if (grid[2].isO && !grid[5].isO && grid[8].isO && !grid[5].isX) grid[5].isO = true;
    else if (!grid[2].isO && grid[5].isO && grid[8].isO && !grid[2].isX) grid[2].isO = true;

    //DIAGONAL 1
    else if (grid[0].isO && grid[4].isO && !grid[8].isO && !grid[8].isX) grid[8].isO = true;
    else if (grid[0].isO && !grid[4].isO && grid[8].isO && !grid[4].isX) grid[4].isO = true;
    else if (!grid[0].isO && grid[4].isO && grid[8].isO && !grid[0].isX) grid[0].isO = true;

    //DIAGONAL 2

    else if (grid[2].isO && grid[4].isO && !grid[6].isO && !grid[6].isX) grid[6].isO = true;
    else if (grid[2].isO && !grid[4].isO && grid[6].isO && !grid[4].isX) grid[4].isO = true;
    else if (!grid[2].isO && grid[4].isO && grid[6].isO && !grid[2].isX) grid[2].isO = true;


    //OPPONENT BLOCK ATTEMPTS
    //ROW 1
    else if (grid[0].isX && grid[1].isX && !grid[2].isX && !grid[2].isO) grid[2].isO = true;
    else if (grid[0].isX && !grid[1].isX && grid[2].isX && !grid[1].isO) grid[1].isO = true;
    else if (!grid[0].isX && grid[1].isX && grid[2].isX && !grid[0].isO) grid[0].isO = true;

    //ROW 2
    else if (grid[3].isX && grid[4].isX && !grid[5].isX && !grid[5].isO) grid[5].isO = true;
    else if (grid[3].isX && !grid[4].isX && grid[5].isX && !grid[4].isO) grid[4].isO = true;
    else if (!grid[3].isX && grid[4].isX && grid[5].isX && !grid[3].isO) grid[3].isO = true;

    //ROW 3
    else if (grid[6].isX && grid[7].isX && !grid[8].isX && !grid[8].isO) grid[8].isO = true;
    else if (grid[6].isX && !grid[7].isX && grid[8].isX && !grid[7].isO) grid[7].isO = true;
    else if (!grid[6].isX && grid[7].isX && grid[8].isX && !grid[6].isO) grid[6].isO = true;

    //COLUMN 1
    else if (grid[0].isX && grid[3].isX && !grid[6].isX && !grid[6].isO) grid[6].isO = true;
    else if (grid[0].isX && !grid[3].isX && grid[6].isX && !grid[3].isO) grid[3].isO = true;
    else if (!grid[0].isX && grid[3].isX && grid[6].isX && !grid[0].isO) grid[0].isO = true;

    //COLUMN 2
    else if (grid[1].isX && grid[4].isX && !grid[7].isX && !grid[7].isO) grid[7].isO = true;
    else if (grid[1].isX && !grid[4].isX && grid[7].isX && !grid[4].isO) grid[4].isO = true;
    else if (!grid[1].isX && grid[4].isX && grid[7].isX && !grid[1].isO) grid[1].isO = true;

    //COLUMN 3
    else if (grid[2].isX && grid[5].isX && !grid[8].isX && !grid[8].isO) grid[8].isO = true;
    else if (grid[2].isX && !grid[5].isX && grid[8].isX && !grid[5].isO) grid[5].isO = true;
    else if (!grid[2].isX && grid[5].isX && grid[8].isX && !grid[2].isO) grid[2].isO = true;

    //DIAGONAL 1
    else if (grid[0].isX && grid[4].isX && !grid[8].isX && !grid[8].isO) grid[8].isO = true;
    else if (grid[0].isX && !grid[4].isX && grid[8].isX && !grid[4].isO) grid[4].isO = true;
    else if (!grid[0].isX && grid[4].isX && grid[8].isX && !grid[0].isO) grid[0].isO = true;

    //DIAGONAL 2

    else if (grid[2].isX && grid[4].isX && !grid[6].isX && !grid[6].isO) grid[6].isO = true;
    else if (grid[2].isX && !grid[4].isX && grid[6].isX && !grid[4].isO) grid[4].isO = true;
    else if (!grid[2].isX && grid[4].isX && grid[6].isX && !grid[2].isO) grid[2].isO = true;

    else {
        randomNumber = Math.floor(Math.random() * 9)
        if (grid[randomNumber].isX == false && grid[randomNumber].isO == false) {
            grid[randomNumber].isO = true;
        } else {
            placeO();
        }
    }
    playerTurn = true;
    infoMessage = "Your turn!"
    checkGameStatus();
    updateView();
}

function checkGameStatus() {
    if (grid[0].isX && grid[1].isX && grid[2].isX ||
        grid[3].isX && grid[4].isX && grid[5].isX ||
        grid[6].isX && grid[7].isX && grid[8].isX ||

        grid[0].isX && grid[3].isX && grid[6].isX ||
        grid[1].isX && grid[4].isX && grid[7].isX ||
        grid[2].isX && grid[5].isX && grid[8].isX ||

        grid[0].isX && grid[4].isX && grid[8].isX ||
        grid[2].isX && grid[4].isX && grid[6].isX) {
        infoMessage = "You win!"
        xHasWon = true;
        resultClass = 'winDisplay'
        setInterval(() => {
            displayWin();
        }, 300);
    }
    else if (grid[0].isO && grid[1].isO && grid[2].isO ||
        grid[3].isO && grid[4].isO && grid[5].isO ||
        grid[6].isO && grid[7].isO && grid[8].isO ||

        grid[0].isO && grid[3].isO && grid[6].isO ||
        grid[1].isO && grid[4].isO && grid[7].isO ||
        grid[2].isO && grid[5].isO && grid[8].isO ||

        grid[0].isO && grid[4].isO && grid[8].isO ||
        grid[2].isO && grid[4].isO && grid[6].isO) {
        infoMessage = "You lose!"
        oHasWon = true;
        resultClass = 'loseDisplay';
        setInterval(() => {
            displayLoss();
        }, 300);
    } else if (turnCount == 5 && !xHasWon && !oHasWon) {
        for(let i = 0; i < grid.length; i++){
            setTimeout(grid[i].isO = true, 500);
        }
        infoMessage = "It's a draw!"
        draw = true;
    }
}

function displayWin() {

    if (grid[0].isX && grid[1].isX && grid[2].isX) {
        grid0 = !grid0;
        grid1 = !grid1;
        grid2 = !grid2;
    }
    else if (grid[3].isX && grid[4].isX && grid[5].isX) {
        grid3 = !grid3;
        grid4 = !grid4;
        grid5 = !grid5;
    }
    else if (grid[6].isX && grid[7].isX && grid[8].isX) {
        grid6 = !grid6;
        grid7 = !grid7;
        grid8 = !grid8;
    }

    else if (grid[0].isX && grid[3].isX && grid[6].isX) {
        grid0 = !grid0;
        grid3 = !grid3;
        grid6 = !grid6;
    }
    else if (grid[1].isX && grid[4].isX && grid[7].isX) {
        grid1 = !grid1;
        grid4 = !grid4;
        grid7 = !grid7;
    }
    else if (grid[2].isX && grid[5].isX && grid[8].isX) {
        grid2 = !grid2;
        grid5 = !grid5;
        grid8 = !grid8;
    }

    else if (grid[0].isX && grid[4].isX && grid[8].isX) {
        grid0 = !grid0;
        grid4 = !grid4;
        grid8 = !grid8;
    }
    else if (grid[2].isX && grid[4].isX && grid[6].isX) {
        grid2 = !grid2;
        grid4 = !grid4;
        grid6 = !grid6;
    }
    updateView();
}

function displayLoss() {

    if (grid[0].isO && grid[1].isO && grid[2].isO) {
        grid0 = !grid0;
        grid1 = !grid1;
        grid2 = !grid2;
    }
    else if (grid[3].isO && grid[4].isO && grid[5].isO) {
        grid3 = !grid3;
        grid4 = !grid4;
        grid5 = !grid5;
    }
    else if (grid[6].isO && grid[7].isO && grid[8].isO) {
        grid6 = !grid6;
        grid7 = !grid7;
        grid8 = !grid8;
    }

    else if (grid[0].isO && grid[3].isO && grid[6].isO) {
        grid0 = !grid0;
        grid3 = !grid3;
        grid6 = !grid6;
    }
    else if (grid[1].isO && grid[4].isO && grid[7].isO) {
        grid1 = !grid1;
        grid4 = !grid4;
        grid7 = !grid7;
    }
    else if (grid[2].isO && grid[5].isO && grid[8].isO) {
        grid2 = !grid2;
        grid5 = !grid5;
        grid8 = !grid8;
    }

    else if (grid[0].isO && grid[4].isO && grid[8].isO) {
        grid0 = !grid0;
        grid4 = !grid4;
        grid8 = !grid8;
    }
    else if (grid[2].isO && grid[4].isO && grid[6].isO) {
        grid2 = !grid2;
        grid4 = !grid4;
        grid6 = !grid6;
    }
    updateView();
}