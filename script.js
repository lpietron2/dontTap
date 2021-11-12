const playField = document.getElementById("play-field");
const strButton = document.getElementById("str-button");
const timeField = document.getElementById("time");
const textField = document.getElementById("text");
const leaderBoard = document.getElementById("leaderBoard-left");
var points = 0;
var activeGame = false;
var theFinalCountdown = 3;

var timeCounter = 30_000;
var seconds = 0;
var t1 = 0;
var t2 = 0;

var p1, p2, p3;
var p1_old, p2_old, p3_old;

var tiles = [];
tiles[0] = document.getElementById("tile0");
tiles[1] = document.getElementById("tile1");
tiles[2] = document.getElementById("tile2");
tiles[3] = document.getElementById("tile3");

tiles[4] = document.getElementById("tile4");
tiles[5] = document.getElementById("tile5");
tiles[6] = document.getElementById("tile6");
tiles[7] = document.getElementById("tile7");

tiles[8] = document.getElementById("tile8");
tiles[9] = document.getElementById("tile9");
tiles[10] = document.getElementById("tile10");
tiles[11] = document.getElementById("tile11");

tiles[12] = document.getElementById("tile12");
tiles[13] = document.getElementById("tile13");
tiles[14] = document.getElementById("tile14");
tiles[15] = document.getElementById("tile15");

function randomNumber(number){
    do{
        number = Math.floor(Math.random() * 16);
    }while(number === p1 || number === p2 || number === p3);
    return number;
}
function drawOneTile(nrTile){
    switch(nrTile){
        case p1:{
            tiles[p1].style.backgroundColor = "white";
            p1 = randomNumber(p1);
            points++;
            document.getElementById("points").innerHTML = points;
            tiles[p1].style.backgroundColor = "black";
        }break;
        case p2:{
            tiles[p2].style.backgroundColor = "white";
            p2 = randomNumber(p2);
            points++;
            document.getElementById("points").innerHTML = points;
            tiles[p2].style.backgroundColor = "black";
        }break;
        case p3:{
            tiles[p3].style.backgroundColor = "white";
            p3 = randomNumber(p3);
            points++;
            document.getElementById("points").innerHTML = points;
            tiles[p3].style.backgroundColor = "black";
        }break;
        default:
            console.log("drawOne - fail");
        break;
    }
}
function drawTiles() {
    do{
        p1 = Math.floor(Math.random() * 16);
    }while(p1 === p1_old);
    do{
        p2 = Math.floor(Math.random() * 16);
    }while(p2 === p1 || p2 === p2_old);
    do{
        p3 = Math.floor(Math.random() * 16);
    }while(p3 === p1 || p3 === p2 || p3 === p3_old);

    p1_old = p1;
    p2_old = p2;
    p3_old = p3;

    //console.log(p1 + " " + p2 + " " + p3);
    
    tiles[p1].style.backgroundColor = "black";
    tiles[p2].style.backgroundColor = "black";
    tiles[p3].style.backgroundColor = "black";

}
function startGame() {
    if(activeGame == false){
        restart();

        //t1 = new Date().getTime();
        //countDown();

        activeGame = true;
        drawTiles();
        strButton.innerHTML = "Restart";
    }else{
        activeGame == false;
        restart();
        strButton.innerHTML = "Start";
    }
}
function restart(){
    activeGame = false;
    for(let i=0; i<16; i++){
        tiles[i].style.backgroundColor = "white";
    }
    points = 0;
    timeCounter = 30_000;
    document.getElementById("points").innerHTML = points;
}
function timer(){
    window.setInterval(function() {
        if(activeGame){
            seconds = timeCounter/1000;
            mili = timeCounter/100;
            timeField.innerHTML = seconds;
            timeCounter = timeCounter - 10;
            if(timeCounter < 0){
                activeGame = false;
            }
        }
    }, 10);
    
}
function countDown(){
    textField.innerHTML = "uuuuuuuuu";
    do{
        t2 = new Date().getTime();
    }while(t2-t1 < 3000);
    console.log("count down");
}
playField.addEventListener('mousedown', start = (clickedTile) => {
    if(activeGame){
        clickedTile = clickedTile.target;
        const nrTile = parseInt(clickedTile.getAttribute("data-tile"))
        if(nrTile === p1 || nrTile === p2 || nrTile === p3){
            drawOneTile(nrTile);
        }else{
            clickedTile.style.backgroundColor = "red";
            activeGame = false;
            strButton.innerHTML = "Restart";
        }
    }
});

function loadDoc() {
    
}

window.onload = function time(){
    timer();
    loadDoc();
}