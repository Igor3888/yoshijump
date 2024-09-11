const yoshi = document.querySelector('.yoshi');
const pipe = document.querySelector('.pipe');
const pipi = document.querySelector('.pipi');
const score = document.querySelector('.score');
let alreadyJump = false;
let count =0;

const jump = () => {
    yoshi.classList.add('jump');
    alreadyJump=true;

    setTimeout(() =>{
        yoshi.classList.remove('jump');
        alreadyJump = false;

    },500);
}
document.addEventListener('keydown',jump);
const loop = setInterval(() => {

    const pipePosition =  pipe.offsetLeft;
    const pipiPosition =  pipi.offsetLeft;
    
    
    const yoshiPosition = +window.getComputedStyle(yoshi).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && yoshiPosition < 90 && !alreadyJump){
        alert(`GAME OVER! seu score foi: ${count}`);
        count=0; 
        
        pipe.style.animation =  'none';
        pipe.style.left = `${pipePosition}px`;

        yoshi.style.animation =  'none';
        yoshi.style.bottom = `${yoshiPosition}px`;

        let gif= document.getElementById('mygif');
        function playGif() {
        yoshi.src = './morte.gif';}
    }


    
    if (pipiPosition <= 120 && pipiPosition > 0 && yoshiPosition < 90 && !alreadyJump){
        alert(`GAME OVER! seu score foi: ${count}`);
        count=0; 
        
        pipi.style.animation =  'none';
        pipi.style.left = `${pipePosition}px`;

        yoshi.style.animation =  'none';
        yoshi.style.bottom = `${yoshiPosition}px`;

        let gif= document.getElementById('mygif');
        function playGif() {
        yoshi.src = './morte.gif';}
    }
    
    
    count++;
    score.innerHTML = `SCORE: ${count}`;

},10);

document .addEventListener('keydown', jump);



