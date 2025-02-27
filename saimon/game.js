let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "purple"];

let started = false; 
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText =(`Level ${level};`)  // Fixed syntax here

    let randIdx = Math.floor(Math.random() * 4); // Corrected to include all buttons
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); // Fixed selector syntax

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(gameSeq.length == userSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML =(`oops! <b>your score: ${level}, </b> press any key to start `);
        reset();
    }
    
}

function btnPress(){
    let btn = this ;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor); 

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 

}

