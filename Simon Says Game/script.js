
let h3 = document.querySelector("h3");

let gameSequence = [];
let userSequence = [];
let level = 0;
let started = false;
let btnList = ["btn1","btn2","btn3","btn4"];

document.addEventListener("keypress",(e)=>{
        
    if(started == false){
        started = true;
        levelUp();
    }
});

function  levelUp(){
    userSequence = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randomClass = btnList[Math.floor(Math.random() * 3)];
    let randomBtn = document.querySelector(`.${randomClass}`);
    gameSequence.push(randomClass);
    flashButton(randomBtn);
}

function flashButton(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },80)
}

function  checkAns(index){
    
    if(gameSequence[index] === userSequence[index]){
        if(gameSequence.length === userSequence.length){
            setTimeout(()=>{
                levelUp();
            }, 1000);
        }
    }else{
        h3.innerText = `Game Over! Your score is ${level}. \nPress any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
        document.querySelector("body").style.backgroundColor = "white";
        },20);
        reset();
    }
}

function pressBtn (){
    let btn = this;
    flashButton(btn);
    let userId = btn.getAttribute("id");
    userSequence.push(userId);

    checkAns(userSequence.length-1);
}

let btns = document.querySelectorAll(".btn");

for(btn of btns){
    btn.addEventListener("click",pressBtn);
}

function reset(){
    level =0;
    userSequence = [];
    gameSequence = [];
    started = false;

}


