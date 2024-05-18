
//teleport,timetravel
let allBtn = document.querySelectorAll(".game-button");     //selecting all the buttons of game
let resetBtn = document.querySelector(".reset-btn");        //selecting the reset button
let powerPlayerO = document.querySelector(".playerO-power");        //selecting the power div element containing symbol and background for player-O
let powerPlayerX = document.querySelector(".playerX-power");        //selecting the power div element containing symbol and background for player-X
let powerOBtn = document.querySelector(".powerO-button");       //selecting the powerbutton for player-O
let powerXBtn = document.querySelector(".powerX-button");       //selecting the powerbutton for player-X
let powerOSymbol = document.querySelector(".powerO-symbol");        //selecting the p tag for power symbol of player-O
let powerXSymbol = document.querySelector(".powerX-symbol");        //selecting the p tag for power symbol of player-X
let powerOName = document.querySelector(".powerO-Name");      //selecting power name p tag of player-O
let powerXName = document.querySelector(".powerX-Name");      //selecting power name p tag of player-X
let drawCountdown = document.querySelector(".draw-countdown"); //selecting p tag countdown heading
let result = document.querySelector(".result");       //selecting p tag for result 
let turnO = true;
let first = 0, second = 1, third = 2, fourth = 3;
let powers = ['<i class="fa-solid fa-shield-halved"></i>', '<i class="fa-solid fa-ban"></i>', '<i class="fa-solid fa-circle-minus"></i>'];
let powerNames = ["SHIELD", "SKIP", "DELETE"];
let colours = ["rgb(255, 193, 7)", "rgb(255, 87, 34)", "rgb(3, 169, 244)", "rgb(76, 175, 80)", "rgb(255, 235, 59)", "rgb(156, 39, 176)", "rgb(121, 85, 72)", "rgb(0, 188, 212)"];
let allNeighbours = [-1, -7, 7, 1, -8, -6, 6, 8];
let pointO = 0;
let pointX = 0;
let num1 = 0;
let num2 = 0;
let powerO = false;
let powerX = false;
let powerONotAlloted = true;
let powerXNotAlloted = true;
let playerOSkipInterval = 0;
let playerXSkipInterval = 0;
let skipRedPlayerO = true;
let skipRedPlayerX = true;
let shieldBluePlayerO = true;
let shieldBluePlayerX = true;
let playerOShieldInterval = 0;
let playerXShieldInterval = 0;
let deleteYellowPlayerO = true;
let deleteYellowPlayerX = true;
let playerODeleteInterval = 0;
let playerXDeleteInterval = 0;
let playerOSkipUse = false;
let playerXSkipUse = false;
let playerODeleteUse = false;
let playerXDeleteUse = false;
let playerOShieldUse = false;
let playerXShieldUse = false;
let time = 0;
const startingSec = 19;
let countDownIntervalID = 0;
let checkResultIntervalID = 0;
let patterns = [
    [0, 8, 16, 24], [7, 15, 23, 31], [14, 22, 30, 38], [21, 29, 37, 45], [2, 10, 18, 26], [1, 9, 17, 25], [3, 11, 19, 27], [0, 1, 2, 3],
    [7, 8, 9, 10], [14, 15, 16, 17], [21, 22, 23, 24], [28, 29, 30, 31], [35, 36, 37, 38], [42, 43, 44, 45], [1, 2, 3, 4], [8, 9, 10, 11],
    [15, 16, 17, 18], [22, 23, 24, 25], [29, 30, 31, 32], [36, 37, 38, 39], [43, 44, 45, 46], [2, 3, 4, 5], [9, 10, 11, 12],
    [16, 17, 18, 19], [23, 24, 25, 26], [30, 31, 32, 33], [37, 38, 39, 40], [44, 45, 46, 47], [3, 4, 5, 6], [10, 11, 12, 13],
    [17, 18, 19, 20], [24, 25, 26, 27], [31, 32, 33, 34], [38, 39, 40, 41], [45, 46, 47, 48], [0, 7, 14, 21], [1, 8, 15, 22],
    [2, 9, 16, 23], [3, 10, 17, 24], [4, 11, 18, 25], [5, 12, 19, 26], [6, 13, 20, 27], [7, 14, 21, 28], [8, 15, 22, 29],
    [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35], [15, 22, 29, 36],
    [16, 23, 30, 37], [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41], [21, 28, 35, 42], [22, 29, 36, 43],
    [23, 30, 37, 44], [24, 31, 38, 45], [25, 32, 39, 46], [26, 33, 40, 47], [27, 34, 41, 48], [22, 30, 38, 46], [10, 18, 26, 34],
    [15, 23, 31, 39], [23, 31, 39, 47], [9, 17, 25, 33], [17, 25, 33, 41], [8, 16, 24, 32], [16, 24, 32, 40], [24, 32, 40, 48],
    [27, 33, 39, 45], [20, 26, 32, 38], [13, 19, 25, 31], [6, 12, 18, 24], [5, 11, 17, 23], [4, 10, 16, 22], [3, 9, 15, 21],
    [10, 16, 22, 28], [26, 32, 38, 44], [11, 17, 23, 29], [17, 23, 29, 35], [19, 25, 31, 37], [25, 31, 37, 43], [12, 18, 24, 30],
    [18, 24, 30, 36], [24, 30, 36, 42]
];


// function to find different border color for every 4-X's or O's
function findColour(i) {
    for (let j = 0; j < colours.length; j++) {
        let colourFound = true;
        let clr = colours[j];
        for (let neighbourIndex of allNeighbours) {
            if (i + neighbourIndex > -1 && i + neighbourIndex < 49) {
                if (allBtn[(neighbourIndex + i)].style.borderColor == clr) {
                    colourFound = false;
                }
            }
        }
        if (colourFound) {
            return clr;
        }
    }
}


//changing the color of button when hovered
powerXBtn.addEventListener("mouseover", () => {
    powerXBtn.style.backgroundColor = "#E0E1DD";
    powerXBtn.style.color = "black";
    powerXBtn.style.borderColor = "black";
});

powerXBtn.addEventListener("mouseout", () => {
    powerXBtn.style.backgroundColor = "#334057";
    powerXBtn.style.color = "#E0E1DD";
    powerXBtn.style.borderColor = "#E0E1DD";
});

powerOBtn.addEventListener("mouseover", () => {
    powerOBtn.style.backgroundColor = "#E0E1DD";
    powerOBtn.style.color = "black";
    powerOBtn.style.borderColor = "black";
});

powerOBtn.addEventListener("mouseout", () => {
    powerOBtn.style.backgroundColor = "#334057";
    powerOBtn.style.color = "#E0E1DD";
    powerOBtn.style.borderColor = "#E0E1DD";
});

resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = "#E0E1DD";
    resetBtn.style.color = "black";
    resetBtn.style.borderColor = "black";
});

resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "#334057";
    resetBtn.style.color = "#E0E1DD";
    resetBtn.style.borderColor = "#E0E1DD";
});

//function to change background color when skip power is obtained player-O
function callSkipRedPlayerO() {
    if (skipRedPlayerO) {
        skipRedPlayerO = false;
        powerPlayerO.style.backgroundColor = "rgb(255, 57, 57)";
    } else {
        skipRedPlayerO = true;
        powerPlayerO.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when skip power is obtained player-X
function callSkipRedPlayerX() {
    if (skipRedPlayerX) {
        skipRedPlayerX = false;
        powerPlayerX.style.backgroundColor = "rgb(255, 57, 57)";
    } else {
        skipRedPlayerX = true;
        powerPlayerX.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when shield power is obtained player-O
function callShieldBluePlayerO() {
    if (shieldBluePlayerO) {
        shieldBluePlayerO = false;
        powerPlayerO.style.backgroundColor = "#00eeff"
    } else {
        shieldBluePlayerO = true;
        powerPlayerO.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when shield power is obtained player-X
function callShieldBluePlayerX() {
    if (shieldBluePlayerX) {
        shieldBluePlayerX = false;
        powerPlayerX.style.backgroundColor = "#00eeff"
    } else {
        shieldBluePlayerX = true;
        powerPlayerX.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when delete power is obtained player-O
function callDeleteYellowPlayerO() {
    if (deleteYellowPlayerO) {
        deleteYellowPlayerO = false;
        powerPlayerO.style.backgroundColor = "rgb(251, 255, 0)"
    } else {
        deleteYellowPlayerO = true;
        powerPlayerO.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when delete power is obtained player-X
function callDeleteYellowPlayerX() {
    if (deleteYellowPlayerX) {
        deleteYellowPlayerX = false;
        powerPlayerX.style.backgroundColor = "rgb(251, 255, 0)"
    } else {
        deleteYellowPlayerX = true;
        powerPlayerX.style.backgroundColor = "#778DA9";
    }
}

//impementing reset button functionality
resetBtn.addEventListener("click", () => {
    pointO = 0;
    pointX = 0;
    num1 = 0;
    num2 = 0;
    powerO = false;
    powerX = false;
    powerONotAlloted = true;
    powerXNotAlloted = true;
    playerOSkipInterval = 0;
    playerXSkipInterval = 0;
    skipRedPlayerO = true;
    skipRedPlayerX = true;
    shieldBluePlayerO = true;
    shieldBluePlayerX = true;
    playerOShieldInterval = 0;
    playerXShieldInterval = 0;
    deleteYellowPlayerO = true;
    deleteYellowPlayerX = true;
    playerODeleteInterval = 0;
    playerXDeleteInterval = 0;
    playerOSkipUse = false;
    playerXSkipUse = false;
    playerODeleteUse = false;
    playerXDeleteUse = false;
    playerOShieldUse = false;
    playerXShieldUse = false;
    time = 0;
    countDownIntervalID = 0;
    checkResultIntervalID = 0;
    powerOSymbol.innerText = "Score a point to gain a power-up";
    powerXSymbol.innerText = "Score a point to gain a power-up";
    powerOSymbol.style.margin = "0px";
    powerXSymbol.style.margin = "0px";
    powerOSymbol.style.fontSize = "32px";
    powerXSymbol.style.fontSize = "32px";
    powerOName.innerText = "";
    powerXName.innerText = "";
    powerPlayerX.style.backgroundColor = "#778DA9";
    powerPlayerO.style.backgroundColor = "#778DA9";
    clearInterval(playerOSkipInterval);
    clearInterval(playerOShieldInterval);
    clearInterval(playerODeleteInterval);
    clearInterval(playerXSkipInterval);
    clearInterval(playerXShieldInterval);
    clearInterval(playerXDeleteInterval);
    turnO = true;

    for (let btn of allBtn) {
        btn.innerText = "";
        btn.style.backgroundColor = "#E0E1DD";
        btn.style.color = "black";
        btn.style.border = "2px solid black";
        btn.disabled = false;
    }
});

//implementing power button of player-O 
powerOBtn.addEventListener("click", () => {
    powerONotAlloted = true;    //to prevent new power allocation when previous one is not used
    let currentPower = powerOName.innerText;

    if (currentPower == "SKIP") {
        clearInterval(playerOSkipInterval);
        playerOSkipUse = true;
        powerOName.innerText = "";
        powerOSymbol.innerText = "Score a point to gain a power-up";
        powerOSymbol.style.margin = "0px";
        powerOSymbol.style.fontSize = "32px";
        powerPlayerO.style.backgroundColor = "#778DA9";
    } else if (currentPower == "DELETE") {
        let num = 0;
        for (let a of allBtn) {
            if (a.innerText == "X") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerODeleteInterval);
            playerODeleteUse = true;
            powerOName.innerText = "";
            powerOSymbol.innerText = "Score a point to gain a power-up";
            powerOSymbol.style.margin = "0px";
            powerOSymbol.style.fontSize = "32px";
            powerPlayerO.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerText == "O") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                }
            }
            setTimeout(() => {
                for (let all of allBtn) {
                    if (all.innerText == "" || all.innerText == "O") {
                        all.style.transition = "none";
                        all.style.backgroundColor = "#E0E1DD";
                    }
                }
            }, 1000);
        }

    } else if (currentPower == "SHIELD") {
        let num = 0;
        for (let all of allBtn) {
            if (all.innerText == "O") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerOShieldInterval);
            playerOShieldUse = true;
            powerOName.innerText = "";
            powerOSymbol.innerText = "Score a point to gain a power-up";
            powerOSymbol.style.margin = "0px";
            powerOSymbol.style.fontSize = "32px";
            powerPlayerO.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerText == "X") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                }
            }
            setTimeout(() => {
                for (let all of allBtn) {
                    if (all.innerText == "" || all.innerText == "X") {
                        all.style.transition = "none";
                        all.style.backgroundColor = "#E0E1DD";
                    }
                }
            }, 1000);
        }

    }

});

//implementing power button of player-X
powerXBtn.addEventListener("click", () => {
    powerXNotAlloted = true;    //to prevent new power allocation when previous one is not used
    let currentPower = powerXName.innerText;

    if (currentPower == "SKIP") {
        clearInterval(playerXSkipInterval);
        playerXSkipUse = true;
        powerXName.innerText = "";
        powerXSymbol.innerText = "Score a point to gain a power-up";
        powerXSymbol.style.margin = "0px";
        powerXSymbol.style.fontSize = "32px";
        powerPlayerX.style.backgroundColor = "#778DA9";
    } else if (currentPower == "DELETE") {
        let num = 0;
        for (let a of allBtn) {
            if (a.innerText == "O") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerXDeleteInterval);
            playerXDeleteUse = true;
            powerXName.innerText = "";
            powerXSymbol.innerText = "Score a point to gain a power-up";
            powerXSymbol.style.margin = "0px";
            powerXSymbol.style.fontSize = "32px";
            powerPlayerX.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerText == "X") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                }
            }
            setTimeout(() => {
                for (let all of allBtn) {
                    if (all.innerText == "" || all.innerText == "X") {
                        all.style.transition = "none";
                        all.style.backgroundColor = "#E0E1DD";
                    }
                }
            }, 1000);
        }

    } else if (currentPower == "SHIELD") {
        let num = 0;
        for (let all of allBtn) {
            if (all.innerText == "X") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerXShieldInterval);
            playerXShieldUse = true;
            powerXName.innerText = "";
            powerXSymbol.innerText = "Score a point to gain a power-up";
            powerXSymbol.style.margin = "0px";
            powerXSymbol.style.fontSize = "32px";
            powerPlayerX.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerText == "O") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                }
            }
            setTimeout(() => {
                for (let all of allBtn) {
                    if (all.innerText == "" || all.innerText == "O") {
                        all.style.transition = "none";
                        all.style.backgroundColor = "#E0E1DD";
                    }
                }
            }, 1000);
        }

    }
});

//function to implement alert when a shielded element is tried to remove
function shieldAlert(btn) {
    btn.style.transition = "all 1s ease-in-out";
    btn.style.backgroundColor = "#00eeff";
    setTimeout(() => {
        btn.style.backgroundColor = "#E0E1DD";
        btn.style.transition = "none";
    }, 1000);
}

//function to implement countdown timer
function countDown() {
    if (time <= 0) {
        clearInterval(countDownIntervalID);
        clearInterval(playerOSkipInterval);
        clearInterval(playerOShieldInterval);
        clearInterval(playerODeleteInterval);
        clearInterval(playerXSkipInterval);
        clearInterval(playerXShieldInterval);
        clearInterval(playerXDeleteInterval);
        pointO = 0;
        pointX = 0;
        num1 = 0;
        num2 = 0;
        powerO = false;
        powerX = false;
        powerONotAlloted = true;
        powerXNotAlloted = true;
        playerOSkipInterval = 0;
        playerXSkipInterval = 0;
        skipRedPlayerO = true;
        skipRedPlayerX = true;
        shieldBluePlayerO = true;
        shieldBluePlayerX = true;
        playerOShieldInterval = 0;
        playerXShieldInterval = 0;
        deleteYellowPlayerO = true;
        deleteYellowPlayerX = true;
        playerODeleteInterval = 0;
        playerXDeleteInterval = 0;
        playerOSkipUse = false;
        playerXSkipUse = false;
        playerODeleteUse = false;
        playerXDeleteUse = false;
        playerOShieldUse = false;
        playerXShieldUse = false;
        time = 0;
        countDownIntervalID = 0;
        checkResultIntervalID = 0;
        powerOSymbol.innerText = "Score a point to gain a power-up";
        powerXSymbol.innerText = "Score a point to gain a power-up";
        powerOSymbol.style.margin = "0px";
        powerXSymbol.style.margin = "0px";
        powerOSymbol.style.fontSize = "32px";
        powerXSymbol.style.fontSize = "32px";
        powerOName.innerText = "";
        powerXName.innerText = "";
        powerPlayerX.style.backgroundColor = "#778DA9";
        powerPlayerO.style.backgroundColor = "#778DA9";
        turnO = true;
        result.innerText = "";
        drawCountdown.innerText = "";
        result.style.display = "none";
        drawCountdown.style.display = "none";
        resetBtn.style.display="inline-block";
        for (let btn of allBtn) {
            btn.innerText = "";
            btn.style.backgroundColor = "#E0E1DD";
            btn.style.color = "black";
            btn.style.border = "2px solid black";
            btn.disabled = false;
        }
    } else {
        time--;
        drawCountdown.innerText = `Game restarts in ${time} seconds`;
    }
}

//function for checking the result of the game and restarting the game in 15 seconds
function checkDraw() {

    if (pointO == pointX) {
        time = startingSec;
        countDownIntervalID = setInterval(countDown, 1000);
        resetBtn.style.display = "none";
        result.style.display = "inline-block";
        drawCountdown.style.display = "inline-block";
        result.innerText = "Game resulted in a draw";
        drawCountdown.innerText = `Game restarts in 20 seconds`;
    } else if (pointO > pointX) {
        time = startingSec;
        countDownIntervalID = setInterval(countDown, 1000);
        resetBtn.style.display = "none";
        result.style.display = "inline-block";
        drawCountdown.style.display = "inline-block";
        result.innerText = `Player-1 wins the game by ${pointO - pointX} points`;
        drawCountdown.innerText = `Game restarts in 20 seconds`;
    } else if (pointX > pointO) {
        time = startingSec;
        countDownIntervalID = setInterval(countDown, 1000);
        resetBtn.style.display = "none";
        result.style.display = "inline-block";
        drawCountdown.style.display = "inline-block";
        result.innerText = `Player-2 wins the game by ${pointX - pointO} points`;
        drawCountdown.innerText = `Game restarts in 20 seconds`;
    }
}


//displaying O and X when a button is clicked
for (let btn of allBtn) {
    btn.addEventListener("click", () => {

        if (turnO) {
            if (playerODeleteUse) {
                let txt = btn.innerText;
                if (btn.innerHTML == `<span class="shield">${txt}</span>`) {
                    shieldAlert(btn);
                } else if (btn.innerText != "X") {
                    redAlert(btn);
                } else if (btn.innerText == "X") {
                    playerODeleteUse = false;
                    btn.style.transition = "all 0.5s ease-in-out";
                    btn.style.color = "#E0E1DD";
                    setTimeout(() => {
                        btn.style.color = "black";
                        btn.style.transition = "none";
                        btn.innerText = "";
                        btn.disabled = false;
                    }, 500);
                    for (let singleBtn of allBtn) {
                        if (singleBtn.innerText != "") {
                            singleBtn.disabled = true;
                        }
                    }
                }
            } else if (playerXSkipUse) {   //adding skip functionality
                turnO = true;
                btn.innerText = "X";
                playerXSkipUse = false;
                btn.disabled = true;
            } else if (playerOShieldUse) {
                if (btn.innerText != "O") {
                    redAlert(btn);
                } else if (btn.innerText == "O") {
                    let html = btn.innerHTML;
                    btn.innerHTML = `<span class="shield">${html}</span>`;
                    btn.disabled = true;
                    playerOShieldUse = false;
                    for (let singleBtn of allBtn) {
                        if (singleBtn.innerText != "") {
                            singleBtn.disabled = true;
                        }
                    }
                }
            } else {
                btn.innerText = "O";
                turnO = false;
                btn.disabled = true;
            }
        } else {
            if (playerXDeleteUse) {
                let txt = btn.innerText;
                if (btn.innerHTML == `<span class="shield">${txt}</span>`) {
                    shieldAlert(btn);
                } else if (btn.innerText != "O") {
                    redAlert(btn);
                } else if (btn.innerText == "O") {
                    playerXDeleteUse = false;
                    btn.style.transition = "all 0.5s ease-in-out";
                    btn.style.color = "#E0E1DD";
                    setTimeout(() => {
                        btn.style.color = "black";
                        btn.style.transition = "none";
                        btn.innerText = "";
                        btn.disabled = false;
                    }, 500);
                    for (let singleBtn of allBtn) {
                        if (singleBtn.innerText != "") {
                            singleBtn.disabled = true;
                        }
                    }
                }
            } else if (playerOSkipUse) {   //adding skip functionality
                turnO = false;
                btn.innerText = "O";
                playerOSkipUse = false;
                btn.disabled = true;
            } else if (playerXShieldUse) {
                if (btn.innerText != "X") {
                    redAlert(btn);
                } else if (btn.innerText == "X") {
                    let html = btn.innerHTML;
                    btn.innerHTML = `<span class="shield">${html}</span>`;
                    btn.disabled = true;
                    playerXShieldUse = false;
                    for (let singleBtn of allBtn) {
                        if (singleBtn.innerText != "") {
                            singleBtn.disabled = true;
                        }
                    }
                }
            } else {
                btn.innerText = "X";
                turnO = true;
                btn.disabled = true;
            }
        }
        gameLogic();
        let emptyBtn = 0;
        for (let ab of allBtn) {
            if (ab.innerText == "") {
                emptyBtn++;
            }
        }
        if (emptyBtn) {

        } else {
            checkDraw();
        }
    })
}


//initializing power when player scores a point
function powerStore() {

    if (powerO && powerONotAlloted) {
        powerONotAlloted = false;
        let randomPower = Math.floor(Math.random() * 3);
        while (num1 == randomPower && num2 == randomPower) {
            randomPower = Math.floor(Math.random() * 3);
        }
        num1 = randomPower;
        let onePower = powers[randomPower];
        powerOSymbol.innerHTML = onePower;
        powerOSymbol.style.fontSize = "90px";
        powerOSymbol.style.marginLeft = "80px";
        powerOSymbol.style.marginRight = "80px";
        powerOName.innerText = powerNames[randomPower];
        powerO = false;
        if (powerOName.innerText == "SKIP") {
            callSkipRedPlayerO();
            playerOSkipInterval = setInterval(callSkipRedPlayerO, 1000);
        } else if (powerOName.innerText == "SHIELD") {
            callShieldBluePlayerO();
            playerOShieldInterval = setInterval(callShieldBluePlayerO, 1000);
        } else if (powerOName.innerText == "DELETE") {
            callDeleteYellowPlayerO();
            playerODeleteInterval = setInterval(callDeleteYellowPlayerO, 1000);
        }
    } else if (powerX && powerXNotAlloted) {
        powerXNotAlloted = false;
        let randomPower = Math.floor(Math.random() * 3);
        while (num2 == randomPower && num2 == randomPower) {
            randomPower = Math.floor(Math.random() * 3);
        }
        num2 = randomPower;
        let onePower = powers[randomPower];
        powerXSymbol.innerHTML = onePower;
        powerXSymbol.style.fontSize = "90px";
        powerXSymbol.style.marginLeft = "80px";
        powerXSymbol.style.marginRight = "80px";
        powerXName.innerText = powerNames[randomPower];
        powerX = false;
        if (powerXName.innerText == "SKIP") {
            callSkipRedPlayerX();
            playerXSkipInterval = setInterval(callSkipRedPlayerX, 1000);
        } else if (powerXName.innerText == "SHIELD") {
            callShieldBluePlayerX();
            playerXShieldInterval = setInterval(callShieldBluePlayerX, 1000);
        } else if (powerXName.innerText == "DELETE") {
            callDeleteYellowPlayerX();
            playerXDeleteInterval = setInterval(callDeleteYellowPlayerX, 1000);
        }
    }
}


//implementing game logic
function gameLogic() {
    for (let i = 0; i < 88; i++) {
        if (allBtn[patterns[i][first]].innerText != "" && allBtn[patterns[i][second]].innerText != "" && allBtn[patterns[i][third]].innerText != "" && allBtn[patterns[i][fourth]].innerText != "") {
            if ((allBtn[patterns[i][first]].innerText == "O" || allBtn[patterns[i][first]].innerText == "X") && (allBtn[patterns[i][second]].innerText == "O" || allBtn[patterns[i][second]].innerText == "X") && (allBtn[patterns[i][third]].innerText == "O" || allBtn[patterns[i][third]].innerText == "X") && (allBtn[patterns[i][fourth]].innerText == "O" || allBtn[patterns[i][fourth]].innerText == "X")) {
                if ((allBtn[patterns[i][first]].innerText == allBtn[patterns[i][second]].innerText) && (allBtn[patterns[i][second]].innerText == allBtn[patterns[i][third]].innerText) && (allBtn[patterns[i][third]].innerText == allBtn[patterns[i][fourth]].innerText)) {

                    if (allBtn[patterns[i][first]].innerText == "O") {
                        powerO = true;
                        powerStore();
                        pointO++;
                        allBtn[patterns[i][first]].innerText = pointO;
                        allBtn[patterns[i][second]].innerText = pointO;
                        allBtn[patterns[i][third]].innerText = pointO;
                        allBtn[patterns[i][fourth]].innerText = pointO;
                        allBtn[patterns[i][first]].style.backgroundColor = "rgb(106, 0, 110)";
                        allBtn[patterns[i][second]].style.backgroundColor = "rgb(106, 0, 110)";
                        allBtn[patterns[i][third]].style.backgroundColor = "rgb(106, 0, 110)";
                        allBtn[patterns[i][fourth]].style.backgroundColor = "rgb(106, 0, 110)";
                        allBtn[patterns[i][first]].style.color = "#E0E1DD";
                        allBtn[patterns[i][second]].style.color = "#E0E1DD";
                        allBtn[patterns[i][third]].style.color = "#E0E1DD";
                        allBtn[patterns[i][fourth]].style.color = "#E0E1DD";
                        let colour = findColour(patterns[i][first]);
                        allBtn[patterns[i][first]].style.border = `5px solid ${colour}`;
                        allBtn[patterns[i][second]].style.border = `5px solid ${colour}`;
                        allBtn[patterns[i][third]].style.border = `5px solid ${colour}`;
                        allBtn[patterns[i][fourth]].style.border = `5px solid ${colour}`;

                    } else if (allBtn[patterns[i][first]].innerText == "X") {
                        powerX = true;
                        powerStore();
                        pointX++;
                        allBtn[patterns[i][first]].innerText = pointX;
                        allBtn[patterns[i][second]].innerText = pointX;
                        allBtn[patterns[i][third]].innerText = pointX;
                        allBtn[patterns[i][fourth]].innerText = pointX;
                        allBtn[patterns[i][first]].style.backgroundColor = "#415A77";
                        allBtn[patterns[i][second]].style.backgroundColor = "#415A77";
                        allBtn[patterns[i][third]].style.backgroundColor = "#415A77";
                        allBtn[patterns[i][fourth]].style.backgroundColor = "#415A77";
                        allBtn[patterns[i][first]].style.color = "#E0E1DD";
                        allBtn[patterns[i][second]].style.color = "#E0E1DD";
                        allBtn[patterns[i][third]].style.color = "#E0E1DD";
                        allBtn[patterns[i][fourth]].style.color = "#E0E1DD";
                        let colour = findColour(patterns[i][first]);
                        allBtn[patterns[i][first]].style.border = `5px solid ${colour}`;
                        allBtn[patterns[i][second]].style.border = `5px solid ${colour}`;
                        allBtn[patterns[i][third]].style.border = `5px solid ${colour}`;
                        allBtn[patterns[i][fourth]].style.border = `5px solid ${colour}`;
                    }
                } else {

                }
            }
        }
    }
}

//function to show particular player's turn using borders around power grid
function playerTurn() {
    if (turnO && playerXSkipUse) {
        powerPlayerX.style.border = "10px solid white";
        powerPlayerX.style.borderRadius = "5px";
        powerPlayerO.style.border = "none";
        powerPlayerO.style.borderRadius = "0px";
        powerOBtn.disabled = true;
        powerXBtn.disabled = false;
    } else if (turnO && !playerXSkipUse) {
        powerPlayerX.style.border = "none";
        powerPlayerX.style.borderRadius = "0px";
        powerPlayerO.style.border = "10px solid white";
        powerPlayerO.style.borderRadius = "5px";
        powerOBtn.disabled = false;
        powerXBtn.disabled = true;
    } else if (!turnO && playerOSkipUse) {
        powerPlayerX.style.border = "none";
        powerPlayerX.style.borderRadius = "0px";
        powerPlayerO.style.border = "10px solid white";
        powerPlayerO.style.borderRadius = "5px";
        powerOBtn.disabled = false;
        powerXBtn.disabled = true;
    } else if (!turnO && !playerOSkipUse) {
        powerPlayerX.style.border = "10px solid white";
        powerPlayerX.style.borderRadius = "5px";
        powerPlayerO.style.border = "none";
        powerPlayerO.style.borderRadius = "0px";
        powerOBtn.disabled = true;
        powerXBtn.disabled = false;
    }
}

//setting interval to change the border indication player's turn
setInterval(playerTurn, 1);

//function to show red alert tiles for delete and update powers
function redAlert(btn) {
    btn.style.transition = "all 0.4s ease-in-out";
    let bordr = btn.style.border;
    let clr = btn.style.backgroundColor;
    btn.style.borderColor = "red";
    btn.style.backgroundColor = "red";
    let temp = btn.innerText;
    btn.innerText = "";
    setTimeout(() => {
        btn.innerText = temp;
        btn.style.border = bordr;
        btn.style.backgroundColor = clr;
        btn.style.transition = "none";
    }, 500);
}

