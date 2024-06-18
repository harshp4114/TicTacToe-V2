//teleport,timetravel
let allBtn = document.querySelectorAll(".game-button");     //selecting all the buttons of game
let resetBtn = document.querySelector(".reset-btn");        //selecting the reset button
let resetBtnMedia = document.querySelector(".reset-btn-media");
let powerPlayerO = document.querySelector(".playerO-power");        //selecting the power div element containing symbol and background for player-O
let powerPlayerOMedia = document.querySelector(".playerO-power-media");
let powerPlayerX = document.querySelector(".playerX-power");        //selecting the power div element containing symbol and background for player-X
let powerOBtn = document.querySelector(".powerO-button");       //selecting the powerbutton for player-O
let powerOBtnMedia = document.querySelector(".powerO-button-media");
let powerXBtn = document.querySelector(".powerX-button");       //selecting the powerbutton for player-X
let powerOSymbol = document.querySelector(".powerO-symbol");        //selecting the p tag for power symbol of player-O
let powerOSymbolMedia = document.querySelector(".powerO-symbol-media");
let powerXSymbol = document.querySelector(".powerX-symbol");        //selecting the p tag for power symbol of player-X
let powerOName = document.querySelector(".powerO-Name");      //selecting power name p tag of player-O
let powerONameMedia = document.querySelector(".powerO-Name-media");
let powerXName = document.querySelector(".powerX-Name");      //selecting power name p tag of player-X
let drawCountdown = document.querySelector(".draw-countdown"); //selecting p tag countdown heading
let result = document.querySelector(".result");       //selecting p tag for result 
let gameDraw = document.querySelector(".game-draw");    //selecting div containg all the game buttons
let overlay = document.querySelector(".overlay");         //selecting div responsible for overlay in result
let gameHeading = document.querySelector(".game-heading");       //selecting div containg result and countdown headings
let homeBtn = document.querySelector(".home-btn");
let homeBtnMedia = document.querySelector(".home-btn-media");
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
let powerONotAllotedMedia = true;
let powerXNotAlloted = true;
let playerOSkipInterval = 0;
let playerXSkipInterval = 0;
let skipRedPlayerO = true;
let skipRedPlayerOMedia = true;
let skipRedPlayerX = true;
let shieldBluePlayerO = true;
let shieldBluePlayerOMedia = true;
let shieldBluePlayerX = true;
let playerOShieldInterval = 0;
let playerXShieldInterval = 0;
let deleteYellowPlayerO = true;
let deleteYellowPlayerOMedia = true;
let deleteYellowPlayerX = true;
let playerODeleteInterval = 0;
let playerXDeleteInterval = 0;
let playerOSkipUse = false;
let playerOSkipUseMedia = false;
let playerXSkipUse = false;
let playerODeleteUse = false;
let playerODeleteUseMedia = false;
let playerXDeleteUse = false;
let playerOShieldUse = false;
let playerOShieldUseMedia = false;
let playerXShieldUse = false;
let time = 0;
const startingSec = 10;
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
let viewportWidth = window.innerWidth;
setInterval(() => {
    viewportWidth = window.innerWidth;
}, 100);

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

powerOBtnMedia.addEventListener("mouseover", () => {
    powerOBtnMedia.style.backgroundColor = "#E0E1DD";
    powerOBtnMedia.style.color = "black";
    powerOBtnMedia.style.borderColor = "black";
});

powerOBtnMedia.addEventListener("mouseout", () => {
    powerOBtnMedia.style.backgroundColor = "#334057";
    powerOBtnMedia.style.color = "#E0E1DD";
    powerOBtnMedia.style.borderColor = "#E0E1DD";
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

homeBtn.addEventListener("mouseover", () => {
    homeBtn.style.backgroundColor = "#E0E1DD";
    homeBtn.style.color = "black";
    homeBtn.style.borderColor = "black";
});

homeBtn.addEventListener("mouseout", () => {
    homeBtn.style.backgroundColor = "#334057";
    homeBtn.style.color = "#E0E1DD";
    homeBtn.style.borderColor = "#E0E1DD";
});

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

resetBtnMedia.addEventListener("mouseover", () => {
    resetBtnMedia.style.backgroundColor = "#E0E1DD";
    resetBtnMedia.style.color = "black";
    resetBtnMedia.style.borderColor = "black";
});

resetBtnMedia.addEventListener("mouseout", () => {
    resetBtnMedia.style.backgroundColor = "#334057";
    resetBtnMedia.style.color = "#E0E1DD";
    resetBtnMedia.style.borderColor = "#E0E1DD";
});

homeBtnMedia.addEventListener("mouseover", () => {
    homeBtnMedia.style.backgroundColor = "#E0E1DD";
    homeBtnMedia.style.color = "black";
    homeBtnMedia.style.borderColor = "black";
});

homeBtnMedia.addEventListener("mouseout", () => {
    homeBtnMedia.style.backgroundColor = "#334057";
    homeBtnMedia.style.color = "#E0E1DD";
    homeBtnMedia.style.borderColor = "#E0E1DD";
});

homeBtnMedia.addEventListener("click", () => {
    window.location.href = "index.html";
});

//function to change background color when skip power is obtained player-O
function callSkipRedPlayerO() {
    if (skipRedPlayerO || skipRedPlayerOMedia) {
        skipRedPlayerO = false;
        skipRedPlayerOMedia = false;
        powerPlayerO.style.backgroundColor = "rgb(255, 57, 57)";
        powerPlayerOMedia.style.backgroundColor = "rgb(255, 57, 57)";
    } else {
        skipRedPlayerO = true;
        skipRedPlayerOMedia = true;
        powerPlayerO.style.backgroundColor = "#778DA9";
        powerPlayerOMedia.style.backgroundColor = "#778DA9";
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
    if (shieldBluePlayerO || shieldBluePlayerOMedia) {
        shieldBluePlayerO = false;
        shieldBluePlayerOMedia = false;
        powerPlayerO.style.backgroundColor = "#00eeff";
        powerPlayerOMedia.style.backgroundColor = "#00eeff";
    } else {
        shieldBluePlayerO = true;
        shieldBluePlayerOMedia = true;
        powerPlayerO.style.backgroundColor = "#778DA9";
        powerPlayerOMedia.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when shield power is obtained player-X
function callShieldBluePlayerX() {
    if (shieldBluePlayerX) {
        shieldBluePlayerX = false;
        powerPlayerX.style.backgroundColor = "#00eeff";
    } else {
        shieldBluePlayerX = true;
        powerPlayerX.style.backgroundColor = "#778DA9";
    }
}

//function to change background color when delete power is obtained player-O
function callDeleteYellowPlayerO() {
    if (deleteYellowPlayerO || deleteYellowPlayerOMedia) {
        deleteYellowPlayerO = false;
        deleteYellowPlayerOMedia = false;
        powerPlayerO.style.backgroundColor = "rgb(251, 255, 0)";
        powerPlayerOMedia.style.backgroundColor = "rgb(251, 255, 0)";
    } else {
        deleteYellowPlayerO = true;
        deleteYellowPlayerOMedia = true;
        powerPlayerO.style.backgroundColor = "#778DA9";
        powerPlayerOMedia.style.backgroundColor = "#778DA9";
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
    clearInterval(playerOSkipInterval);         //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerOShieldInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerODeleteInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerXSkipInterval);         //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerXShieldInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerXDeleteInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    powerO = false;
    powerX = false;
    powerONotAlloted = true;
    powerONotAllotedMedia = true;
    powerXNotAlloted = true;
    playerOSkipInterval = 0;
    playerXSkipInterval = 0;
    skipRedPlayerO = true;
    skipRedPlayerOMedia = true;
    skipRedPlayerX = true;
    shieldBluePlayerO = true;
    shieldBluePlayerOMedia = true;
    shieldBluePlayerX = true;
    playerOShieldInterval = 0;
    playerXShieldInterval = 0;
    deleteYellowPlayerO = true;
    deleteYellowPlayerOMedia = true;
    deleteYellowPlayerX = true;
    playerODeleteInterval = 0;
    playerXDeleteInterval = 0;
    playerOSkipUse = false;
    playerOSkipUseMedia = false;
    playerXSkipUse = false;
    playerODeleteUse = false;
    playerODeleteUseMedia = false;
    playerXDeleteUse = false;
    playerOShieldUse = false;
    playerOShieldUseMedia = false;
    playerXShieldUse = false;
    time = 0;
    countDownIntervalID = 0;
    checkResultIntervalID = 0;
    homeBtn.style.display = "inline-block";
    powerOSymbol.innerText = "Score a point to gain a power-up";
    powerOSymbolMedia.innerText = "Score a point to gain a power-up";
    powerXSymbol.innerText = "Score a point to gain a power-up";
    powerOSymbol.style.margin = "0px";
    powerOSymbolMedia.style.margin = "0px";
    powerXSymbol.style.margin = "0px";
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (viewportWidth >= 300 && viewportWidth < 510) {
        powerOSymbol.style.fontSize = "20px";
        powerOSymbolMedia.style.fontSize = "20px";
        powerXSymbol.style.fontSize = "20px";
    } else if (viewportWidth >= 510 && viewportWidth < 1001) {
        powerOSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
        powerOSymbolMedia.style.fontSize = "clamp(20px, 4vw, 26px)";
        powerXSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
    } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
        powerOSymbol.style.fontSize = "33px";
        powerOSymbolMedia.style.fontSize = "33px";
        powerXSymbol.style.fontSize = "33px";
    } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
        powerOSymbol.style.fontSize = "33px";
        powerOSymbolMedia.style.fontSize = "33px";
        powerXSymbol.style.fontSize = "33px";
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    powerOName.innerText = "";
    powerONameMedia.innerText = "";
    powerXName.innerText = "";
    powerPlayerX.style.backgroundColor = "#778DA9";
    powerPlayerO.style.backgroundColor = "#778DA9";
    powerPlayerOMedia.style.backgroundColor = "#778DA9";
    turnO = true;
    for (let btn of allBtn) {       //reserting all the game buttons
        btn.innerText = "";
        btn.style.backgroundColor = "#E0E1DD";
        btn.style.color = "black";
        btn.style.border = "2px solid black";
        btn.disabled = false;
    }
});

resetBtnMedia.addEventListener("click", () => {
    pointO = 0;
    pointX = 0;
    num1 = 0;
    num2 = 0;
    clearInterval(playerOSkipInterval);         //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerOShieldInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerODeleteInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerXSkipInterval);         //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerXShieldInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    clearInterval(playerXDeleteInterval);       //stopping the blinking red, yellow, blue color shown for power-ups
    powerO = false;
    powerX = false;
    powerONotAlloted = true;
    powerONotAllotedMedia = true;
    powerXNotAlloted = true;
    playerOSkipInterval = 0;
    playerXSkipInterval = 0;
    skipRedPlayerO = true;
    skipRedPlayerOMedia = true;
    skipRedPlayerX = true;
    shieldBluePlayerO = true;
    shieldBluePlayerOMedia = true;
    shieldBluePlayerX = true;
    playerOShieldInterval = 0;
    playerXShieldInterval = 0;
    deleteYellowPlayerO = true;
    deleteYellowPlayerOMedia = true;
    deleteYellowPlayerX = true;
    playerODeleteInterval = 0;
    playerXDeleteInterval = 0;
    playerOSkipUse = false;
    playerOSkipUseMedia = false;
    playerXSkipUse = false;
    playerODeleteUse = false;
    playerODeleteUseMedia = false;
    playerXDeleteUse = false;
    playerOShieldUse = false;
    playerOShieldUseMedia = false;
    playerXShieldUse = false;
    time = 0;
    countDownIntervalID = 0;
    checkResultIntervalID = 0;
    homeBtn.style.display = "inline-block";
    powerOSymbol.innerText = "Score a point to gain a power-up";
    powerOSymbolMedia.innerText = "Score a point to gain a power-up";
    powerXSymbol.innerText = "Score a point to gain a power-up";
    powerOSymbol.style.margin = "0px";
    powerOSymbolMedia.style.margin = "0px";
    powerXSymbol.style.margin = "0px";
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (viewportWidth >= 300 && viewportWidth < 510) {
        powerOSymbol.style.fontSize = "20px";
        powerOSymbolMedia.style.fontSize = "20px";
        powerXSymbol.style.fontSize = "20px";
    } else if (viewportWidth >= 510 && viewportWidth < 1001) {
        powerOSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
        powerOSymbolMedia.style.fontSize = "clamp(20px, 4vw, 26px)";
        powerXSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
    } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
        powerOSymbol.style.fontSize = "33px";
        powerOSymbolMedia.style.fontSize = "33px";
        powerXSymbol.style.fontSize = "33px";
    } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
        powerOSymbol.style.fontSize = "33px";
        powerOSymbolMedia.style.fontSize = "33px";
        powerXSymbol.style.fontSize = "33px";
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    powerOName.innerText = "";
    powerONameMedia.innerText = "";
    powerXName.innerText = "";
    powerPlayerX.style.backgroundColor = "#778DA9";
    powerPlayerO.style.backgroundColor = "#778DA9";
    powerPlayerOMedia.style.backgroundColor = "#778DA9";
    turnO = true;
    for (let btn of allBtn) {       //reserting all the game buttons
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
    powerONotAllotedMedia = true;
    let currentPower = powerOName.innerText;

    if (currentPower == "SKIP") {
        clearInterval(playerOSkipInterval);
        playerOSkipUse = true;
        powerOName.innerText = "";
        powerOSymbol.innerText = "Score a point to gain a power-up";
        powerOSymbol.style.margin = "0px";
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerOSymbol.style.fontSize = "20px";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerOSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerOSymbol.style.fontSize = "33px";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerOSymbol.style.fontSize = "33px";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerO.style.backgroundColor = "#778DA9";
    } else if (currentPower == "DELETE") {
        let num = 0;
        for (let a of allBtn) {
            if (a.innerHTML == "X") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerODeleteInterval);
            playerODeleteUse = true;
            powerOName.innerText = "";
            powerOSymbol.innerText = "Score a point to gain a power-up";
            powerOSymbol.style.margin = "0px";
            ////////////////////////////////////////////////////////////////////////////////////////////
            if (viewportWidth >= 300 && viewportWidth < 510) {
                powerOSymbol.style.fontSize = "20px";
            } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                powerOSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
            } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                powerOSymbol.style.fontSize = "33px";
            } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                powerOSymbol.style.fontSize = "33px";
            }
            ////////////////////////////////////////////////////////////////////////////////////////////
            powerPlayerO.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerHTML == "O") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                } else if (all.innerHTML == '<span class="shield">X</span>' || all.innerHTML == '<span class="shield">O</span>') {
                    shieldAlert(all);
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
            powerONotAlloted = false;
            powerONotAllotedMedia = false;
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
            ////////////////////////////////////////////////////////////////////////////////////////////
            if (viewportWidth >= 300 && viewportWidth < 510) {
                powerOSymbol.style.fontSize = "20px";
            } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                powerOSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
            } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                powerOSymbol.style.fontSize = "33px";
            } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                powerOSymbol.style.fontSize = "33px";
            }
            ////////////////////////////////////////////////////////////////////////////////////////////
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
            powerONotAlloted = false;
            powerONotAllotedMedia = false;
        }

    }

});

powerOBtnMedia.addEventListener("click", () => {
    powerONotAlloted = true;    //to prevent new power allocation when previous one is not used
    powerONotAllotedMedia = true;
    let currentPower = powerONameMedia.innerText;

    if (currentPower == "SKIP") {
        clearInterval(playerOSkipInterval);
        playerOSkipUse = true;
        playerOSkipUseMedia = true;
        powerONameMedia.innerText = "";
        powerOSymbolMedia.innerText = "Score a point to gain a power-up";
        powerOSymbolMedia.style.margin = "0px";
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerOSymbolMedia.style.fontSize = "20px";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerOSymbolMedia.style.fontSize = "clamp(20px, 4vw, 26px)";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerOSymbolMedia.style.fontSize = "33px";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerOSymbolMedia.style.fontSize = "33px";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerOMedia.style.backgroundColor = "#778DA9";
    } else if (currentPower == "DELETE") {
        let num = 0;
        for (let a of allBtn) {
            if (a.innerHTML == "X") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerODeleteInterval);
            playerODeleteUseMedia = true;
            powerONameMedia.innerText = "";
            powerOSymbolMedia.innerText = "Score a point to gain a power-up";
            powerOSymbolMedia.style.margin = "0px";
            ////////////////////////////////////////////////////////////////////////////////////////////
            if (viewportWidth >= 300 && viewportWidth < 510) {
                powerOSymbolMedia.style.fontSize = "20px";
            } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                powerOSymbolMedia.style.fontSize = "clamp(20px, 4vw, 26px)";
            } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                powerOSymbolMedia.style.fontSize = "33px";
            } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                powerOSymbolMedia.style.fontSize = "33px";
            }
            ////////////////////////////////////////////////////////////////////////////////////////////
            powerPlayerOMedia.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerHTML == "O") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                } else if (all.innerHTML == '<span class="shield">X</span>' || all.innerHTML == '<span class="shield">O</span>') {
                    shieldAlert(all);
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
            powerONotAlloted = false;
            powerONotAllotedMedia = false;
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
            playerOShieldUseMedia = true;
            powerONameMedia.innerText = "";
            powerOSymbolMedia.innerText = "Score a point to gain a power-up";
            powerOSymbolMedia.style.margin = "0px";
            ////////////////////////////////////////////////////////////////////////////////////////////
            if (viewportWidth >= 300 && viewportWidth < 510) {
                powerOSymbolMedia.style.fontSize = "20px";
            } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                powerOSymbolMedia.style.fontSize = "clamp(20px, 4vw, 26px)";
            } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                powerOSymbolMedia.style.fontSize = "33px";
            } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                powerOSymbolMedia.style.fontSize = "33px";
            }
            ////////////////////////////////////////////////////////////////////////////////////////////
            powerPlayerOMedia.style.backgroundColor = "#778DA9";
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
            powerONotAlloted = false;
            powerONotAllotedMedia = false;
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
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerXSymbol.style.fontSize = "20px";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerXSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerXSymbol.style.fontSize = "33px";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerXSymbol.style.fontSize = "33px";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerX.style.backgroundColor = "#778DA9";
    } else if (currentPower == "DELETE") {
        let num = 0;
        for (let a of allBtn) {
            if (a.innerHTML == "O") {
                num++;
            }
        }
        if (num) {
            clearInterval(playerXDeleteInterval);
            playerXDeleteUse = true;
            powerXName.innerText = "";
            powerXSymbol.innerText = "Score a point to gain a power-up";
            powerXSymbol.style.margin = "0px"; viewportWidth
            ////////////////////////////////////////////////////////////////////////////////////////////
            if (viewportWidth >= 300 && viewportWidth < 510) {
                powerXSymbol.style.fontSize = "20px";
            } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                powerXSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
            } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                powerXSymbol.style.fontSize = "33px";
            } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                powerXSymbol.style.fontSize = "33px";
            }
            ////////////////////////////////////////////////////////////////////////////////////////////
            powerPlayerX.style.backgroundColor = "#778DA9";
            for (let singleBtn of allBtn) {
                singleBtn.disabled = false;
            }
        } else {
            for (let all of allBtn) {
                if (all.innerText == "" || all.innerHTML == "X") {
                    all.style.transition = "all 1s ease-in-out";
                    all.style.backgroundColor = "red";
                } else if (all.innerHTML == '<span class="shield">O</span>' || all.innerHTML == '<span class="shield">X</span>') {
                    shieldAlert(all);
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
            powerXNotAlloted = false;
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
            ////////////////////////////////////////////////////////////////////////////////////////////
            if (viewportWidth >= 300 && viewportWidth < 510) {
                powerXSymbol.style.fontSize = "20px";
            } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                powerXSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
            } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                powerXSymbol.style.fontSize = "33px";
            } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                powerXSymbol.style.fontSize = "33px";
            } viewportWidth
            ////////////////////////////////////////////////////////////////////////////////////////////
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
            powerXNotAlloted = false;
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
        powerONotAllotedMedia = true;
        powerXNotAlloted = true;
        playerOSkipInterval = 0;
        playerXSkipInterval = 0;
        skipRedPlayerO = true;
        skipRedPlayerOMedia = true;
        skipRedPlayerX = true;
        shieldBluePlayerO = true;
        shieldBluePlayerOMedia = true;
        shieldBluePlayerX = true;
        playerOShieldInterval = 0;
        playerXShieldInterval = 0;
        deleteYellowPlayerO = true;
        deleteYellowPlayerOMedia = true;
        deleteYellowPlayerX = true;
        powerOBtn.disabled = false;
        powerOBtnMedia.disabled = false;
        powerXBtn.disabled = false;
        playerODeleteInterval = 0;
        playerXDeleteInterval = 0;
        playerOSkipUse = false;
        playerOSkipUseMedia = false;
        playerXSkipUse = false;
        playerODeleteUse = false;
        playerODeleteUseMedia = false;
        playerXDeleteUse = false;
        playerOShieldUse = false;
        playerOShieldUseMedia = false;
        playerXShieldUse = false;
        time = 0;
        countDownIntervalID = 0;
        checkResultIntervalID = 0;
        gameDraw.style.marginTop = "1%";
        gameDraw.style.marginBottom = "0.7%";
        powerOSymbol.innerText = "Score a point to gain a power-up";
        powerOSymbolMedia.innerText = "Score a point to gain a power-up";
        powerXSymbol.innerText = "Score a point to gain a power-up";
        powerOSymbolMedia.style.margin = "0px";
        powerOSymbol.style.margin = "0px";
        powerXSymbol.style.margin = "0px";
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerOSymbol.style.fontSize = "20px";
            powerOSymbolMedia.style.fontSize = "20px";
            powerXSymbol.style.fontSize = "20px";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerOSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
            powerOSymbolMedia.style.fontSize = "clamp(20px, 4vw, 26px)";
            powerXSymbol.style.fontSize = "clamp(20px, 4vw, 26px)";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerOSymbol.style.fontSize = "33px";
            powerOSymbolMedia.style.fontSize = "33px";
            powerXSymbol.style.fontSize = "33px";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerOSymbol.style.fontSize = "33px";
            powerOSymbolMedia.style.fontSize = "33px";
            powerXSymbol.style.fontSize = "33px";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerOName.innerText = "";
        powerONameMedia.innerText = "";
        powerXName.innerText = "";
        powerPlayerX.style.backgroundColor = "#778DA9";
        powerPlayerO.style.backgroundColor = "#778DA9";
        powerPlayerOMedia.style.backgroundColor = "#778DA9";
        turnO = true;
        result.innerText = "";
        drawCountdown.innerText = "";
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            resetBtn.style.display = "inline-block";
            homeBtn.style.display = "inline-block";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            resetBtnMedia.style.display = "inline-block";
            homeBtnMedia.style.display = "inline-block";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            resetBtn.style.display = "inline-block";
            homeBtn.style.display = "inline-block";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            resetBtn.style.display = "inline-block";
            homeBtn.style.display = "inline-block";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        overlay.style.visibility = "hidden";
        gameHeading.style.visibility = "hidden";
        drawCountdown.style.visibility = "hidden";
        result.style.visibility = "hidden";
        overlay.style.opacity = "0";
        gameHeading.style.opacity = "0";
        drawCountdown.style.opacity = "0";
        result.style.opacity = "0";
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
        gameDraw.style.marginTop = "10px";
        gameDraw.style.marginBottom = "0%";
        overlay.style.visibility = "visible";
        gameHeading.style.visibility = "visible";
        drawCountdown.style.visibility = "visible";
        result.style.visibility = "visible";
        overlay.style.opacity = "0.7";
        gameHeading.style.opacity = "1";
        drawCountdown.style.opacity = "1";
        result.style.opacity = "1";
        result.innerText = "Game resulted in a draw";
        drawCountdown.innerText = `Game restarts in 10 seconds`;
    } else if (pointO > pointX) {
        time = startingSec;
        countDownIntervalID = setInterval(countDown, 1000);
        resetBtn.style.display = "none";
        gameDraw.style.marginTop = "10px";
        overlay.style.visibility = "visible";
        gameHeading.style.visibility = "visible";
        drawCountdown.style.visibility = "visible";
        result.style.visibility = "visible";
        overlay.style.opacity = "0.7";
        gameHeading.style.opacity = "1";
        drawCountdown.style.opacity = "1";
        result.style.opacity = "1";
        gameDraw.style.marginBottom = "0%";
        result.innerText = `Player-1 wins the game by ${pointO - pointX} points`;
        drawCountdown.innerText = `Game restarts in 10 seconds`;
    } else if (pointX > pointO) {
        time = startingSec;
        countDownIntervalID = setInterval(countDown, 1000);
        resetBtn.style.display = "none";
        gameDraw.style.marginBottom = "0%";
        overlay.style.visibility = "visible";
        gameHeading.style.visibility = "visible";
        drawCountdown.style.visibility = "visible";
        result.style.visibility = "visible";
        overlay.style.opacity = "0.7";
        gameHeading.style.opacity = "1";
        drawCountdown.style.opacity = "1";
        result.style.opacity = "1";
        gameDraw.style.marginTop = "10px";
        result.innerText = `Player-2 wins the game by ${pointX - pointO} points`;
        drawCountdown.innerText = `Game restarts in 10 seconds`;
    }
}

//displaying O and X when a button is clicked
for (let btn of allBtn) {
    btn.addEventListener('dblclick', function (event) {
        event.preventDefault(); // Prevent the default action of double-click
    });
    btn.addEventListener("click", () => {
        homeBtn.style.display = "none";
        if (turnO) {
            if (playerODeleteUse || playerODeleteUseMedia) {
                let txt = btn.innerText;
                if (btn.innerHTML == `<span class="shield">${txt}</span>`) {
                    shieldAlert(btn);
                } else if (btn.innerText != "X") {
                    redAlert(btn);
                } else if (btn.innerText == "X") {
                    playerODeleteUse = false;
                    playerODeleteUseMedia = false;
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
            } else if (playerOShieldUse || playerOShieldUseMedia) {
                if (btn.innerText != "O") {
                    redAlert(btn);
                } else if (btn.innerText == "O") {
                    let html = btn.innerHTML;
                    btn.innerHTML = `<span class="shield">${html}</span>`;
                    btn.disabled = true;
                    playerOShieldUse = false;
                    playerOShieldUseMedia = false;
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
            } else if (playerOSkipUse || playerOSkipUseMedia) {   //adding skip functionality
                turnO = false;
                btn.innerText = "O";
                playerOSkipUse = false;
                playerOSkipUseMedia = false;
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
            powerOBtn.disabled = true;
            powerOBtnMedia.disabled = true;
            powerXBtn.disabled = true;

            checkDraw();
        }
    })
}


//initializing power when player scores a point
function powerStore() {

    if (powerO && powerONotAlloted && powerONotAllotedMedia) {
        powerONotAlloted = false;
        powerONotAllotedMedia = false;
        let randomPower = Math.floor(Math.random() * 3);
        while (num1 == randomPower && num2 == randomPower) {
            randomPower = Math.floor(Math.random() * 3);
        }
        num1 = randomPower;
        let onePower = powers[randomPower];
        powerOSymbol.innerHTML = onePower;
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerOSymbol.style.fontSize = "65px";
            powerOSymbolMedia.style.fontSize = "65px";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerOSymbol.style.fontSize = "85px";
            powerOSymbolMedia.style.fontSize = "85px";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerOSymbol.style.fontSize = "85px";
            powerOSymbolMedia.style.fontSize = "85px";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerOSymbol.style.fontSize = "109px";
            powerOSymbolMedia.style.fontSize = "109px";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerOSymbol.style.marginLeft = "auto";
        powerOSymbol.style.marginRight = "auto";
        powerOSymbolMedia.innerHTML = onePower;
        powerOSymbolMedia.style.marginLeft = "auto";
        powerOSymbolMedia.style.marginRight = "auto";
        powerOName.innerText = powerNames[randomPower];
        powerONameMedia.innerText = powerNames[randomPower];
        powerO = false;
        if (powerOName.innerText == "SKIP" || powerONameMedia.innerText == "SKIP") {
            callSkipRedPlayerO();
            playerOSkipInterval = setInterval(callSkipRedPlayerO, 1000);
        } else if (powerOName.innerText == "SHIELD" || powerONameMedia.innerText == "SHIELD") {
            callShieldBluePlayerO();
            playerOShieldInterval = setInterval(callShieldBluePlayerO, 1000);
        } else if (powerOName.innerText == "DELETE" || powerONameMedia.innerText == "DELETE") {
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
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerXSymbol.style.fontSize = "65px";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerXSymbol.style.fontSize = "85px";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerXSymbol.style.fontSize = "85px";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerXSymbol.style.fontSize = "99px";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerXSymbol.style.marginLeft = "auto";
        powerXSymbol.style.marginRight = "auto";
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                        ////////////////////////////////////////////////////////////////////////////////////////////
                        if (viewportWidth >= 300 && viewportWidth < 510) {
                            allBtn[patterns[i][first]].style.border = `4px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `4px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `4px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `4px solid ${colour}`;
                        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                            allBtn[patterns[i][first]].style.border = `5px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `5px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `5px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `5px solid ${colour}`;
                        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                            allBtn[patterns[i][first]].style.border = `6px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `6px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `6px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `6px solid ${colour}`;
                        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                            allBtn[patterns[i][first]].style.border = `7px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `7px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `7px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `7px solid ${colour}`;
                        }
                        ////////////////////////////////////////////////////////////////////////////////////////////

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
                        ////////////////////////////////////////////////////////////////////////////////////////////
                        if (viewportWidth >= 300 && viewportWidth < 510) {
                            allBtn[patterns[i][first]].style.border = `4px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `4px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `4px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `4px solid ${colour}`;
                        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
                            allBtn[patterns[i][first]].style.border = `5px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `5px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `5px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `5px solid ${colour}`;
                        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
                            allBtn[patterns[i][first]].style.border = `6px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `6px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `6px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `6px solid ${colour}`;
                        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
                            allBtn[patterns[i][first]].style.border = `7px solid ${colour}`;
                            allBtn[patterns[i][second]].style.border = `7px solid ${colour}`;
                            allBtn[patterns[i][third]].style.border = `7px solid ${colour}`;
                            allBtn[patterns[i][fourth]].style.border = `7px solid ${colour}`;
                        }
                        ////////////////////////////////////////////////////////////////////////////////////////////
                    }
                } else {

                }
            }
        }
    }
}

function adjustHeight() {
    const container = document.querySelector('.container-2');
    const width = container.clientWidth; // Directly get the client width
    container.style.height = `${width}px`; // Set height to be equal to the width
}

// Adjust the height on load and when the window is resized
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);


//function to show particular player's turn using borders around power grid
function playerTurn() {
    if (turnO && playerXSkipUse) {
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerPlayerX.style.border = "6.5px solid white";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerPlayerX.style.border = "9.5px solid white";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerPlayerX.style.border = "10.5px solid white";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerPlayerX.style.border = "11.5px solid white";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerX.style.borderRadius = "5px";
        powerPlayerO.style.border = "none";
        powerPlayerO.style.borderRadius = "0px";
        powerPlayerOMedia.style.border = "none";
        powerPlayerOMedia.style.borderRadius = "0px";
        powerOBtn.disabled = true;
        powerOBtnMedia.disabled = true;
        powerXBtn.disabled = false;
    } else if (turnO && !playerXSkipUse) {
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerPlayerO.style.border = "6.5px solid white";
            powerPlayerOMedia.style.border = "6.5px solid white";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerPlayerO.style.border = "9.5px solid white";
            powerPlayerOMedia.style.border = "9.5px solid white";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerPlayerO.style.border = "10.5px solid white";
            powerPlayerOMedia.style.border = "10.5px solid white";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerPlayerO.style.border = "11.5px solid white";
            powerPlayerOMedia.style.border = "11.5px solid white";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerX.style.border = "none";
        powerPlayerX.style.borderRadius = "0px";
        powerPlayerO.style.borderRadius = "5px";
        powerPlayerOMedia.style.borderRadius = "5px";
        powerOBtn.disabled = false;
        powerOBtnMedia.disabled = false;
        powerXBtn.disabled = true;
    } else if (!turnO && (playerOSkipUse || playerOSkipUseMedia)) {
        powerPlayerX.style.border = "none";
        powerPlayerX.style.borderRadius = "0px";
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerPlayerO.style.border = "6.5px solid white";
            powerPlayerOMedia.style.border = "6.5px solid white";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerPlayerO.style.border = "9.5px solid white";
            powerPlayerOMedia.style.border = "9.5px solid white";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerPlayerO.style.border = "10.5px solid white";
            powerPlayerOMedia.style.border = "10.5px solid white";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerPlayerO.style.border = "11.5px solid white";
            powerPlayerOMedia.style.border = "11.5px solid white";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerO.style.borderRadius = "5px";
        powerPlayerOMedia.style.borderRadius = "5px";
        powerOBtn.disabled = false;
        powerOBtnMedia.disabled = false;
        powerXBtn.disabled = true;
    } else if (!turnO && !(playerOSkipUse || playerOSkipUseMedia)) {
        ////////////////////////////////////////////////////////////////////////////////////////////
        if (viewportWidth >= 300 && viewportWidth < 510) {
            powerPlayerX.style.border = "6.5px solid white";
        } else if (viewportWidth >= 510 && viewportWidth < 1001) {
            powerPlayerX.style.border = "9.5px solid white";
        } else if (viewportWidth >= 1001 && viewportWidth < 1400) {
            powerPlayerX.style.border = "10.5px solid white";
        } else if (viewportWidth >= 1400 && viewportWidth < 1800) {
            powerPlayerX.style.border = "11.5px solid white";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        powerPlayerX.style.borderRadius = "5px";
        powerPlayerO.style.border = "none";
        powerPlayerO.style.borderRadius = "0px";
        powerPlayerOMedia.style.border = "none";
        powerPlayerOMedia.style.borderRadius = "0px";
        powerOBtn.disabled = true;
        powerOBtnMedia.disabled = true;
        powerXBtn.disabled = false;
    }
}

//setting interval to change the border indication player's turn
setInterval(playerTurn, 1);

//function to show red alert tiles for delete and update powers
function redAlert(btn) {
    btn.style.transition = "all 0.4s ease-in-out";
    let bordr;
    let clr;
    if (btn.style.backgroundColor != "red" && btn.style.borderColor != "red") {
        clr = btn.style.backgroundColor;
        bordr = btn.style.border;
    }
    btn.style.borderColor = "red";
    btn.style.backgroundColor = "red";
    let temp;
    if (btn.innerText != "") {
        temp = btn.innerText;
    }
    btn.innerText = "";
    setTimeout(() => {
        if (temp != undefined) {
            btn.innerText = temp;
        }
        btn.style.border = bordr;
        btn.style.backgroundColor = clr;
        btn.style.transition = "none";
    }, 500);
}

