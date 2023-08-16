const mainDiv = document.getElementById('main-div');


mainDiv.style.height = `${window.innerHeight-300}px`;

const timeDiv = document.getElementById('time-div');
const scoreDiv = document.getElementById('score-div');
let clicksBt = document.getElementById('clicksBt');
let timeP = document.getElementById('time');
let scoreP = document.getElementById('score');
let startBt = document.getElementById('startBt');
let againBt = document.getElementById('againBt');
let opt1 = document.querySelector('.opt1');
let opt2 = document.querySelector('.opt2');
let opt3 = document.querySelector('.opt3');
let opt4 = document.querySelector('.opt4');

let time = 0, num, score = 0;

timeP.innerText = time;
scoreP.innerText = score;

let timeInterval;

startBt.addEventListener('click', ()=>{
    main();
})

opt1.addEventListener('click', ()=>{
    time = 5;
    timeP.innerText = time;
    num = 5;
})

opt2.addEventListener('click', ()=>{
    time = 10;
    timeP.innerText = time;
    num = 10;
})

opt3.addEventListener('click', ()=>{
    time = 15;
    timeP.innerText = time;
    num = 15
})

opt4.addEventListener('click', ()=>{
    time = 20;
    timeP.innerText = time;
    num = 20;
})

againBt.addEventListener('click', ()=>{
    setTimeout(function(){
        location.reload();
    }, 2000)
})

function main(){
    clicksBt.addEventListener('click', ()=>{
        changeScore();
    })

    setInterval(changeTime, 1000);
}

function changeTime(){
    if(time > 0){
        time--;
        timeP.innerText = time;
    }
    else over();
}

function changeScore(){
    if(time != 0){
        score++;
        scoreP.innerText = score;
    }
}

function over(){
        clicksBt.innerText = `your speed is ${score/num} clicks per second`;
}

