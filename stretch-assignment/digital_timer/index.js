let timer = 0
let sum = 0;
let count = 0;
let setTime = null
let secondTens = document.getElementById('secondTens');
secondTens.innerText = 0;
let secondOnes = document.getElementById('secondOnes');
secondOnes.innerText = 0
let msHundreds = document.getElementById('msHundreds');
msHundreds.innerText = 0
let msTens = document.getElementById('msTens');
msTens.innerText = 0;
const btnStart = document.createElement('button');
btnStart.innerText = 'START'
const btnReset = document.createElement('button');
btnReset.innerText = 'RESET'
const div = document.querySelector('.digits');
const btnDiv = document.createElement('div');
div.appendChild(btnDiv)
btnDiv.appendChild(btnReset)
btnDiv.appendChild(btnStart)
btnDiv.style.textAlign = 'center';
btnStart.style.margin = 'auto 10px'
btnStart.addEventListener('click', ()=>{
    msTens.innerText = 0;
    msHundreds.innerText = 0;
    secondOnes.innerText = 0;
    secondTens.innerText = 0;
     setTime = setInterval(()=>{
        sum ++
        msTens.innerText = sum
        if(sum === 10) {
           sum = 0;
           timer ++;
            msTens.innerText = 0
            msHundreds.innerText = timer;
            if (timer === 10) {
                timer = 0;
                msHundreds.innerText = 0;
                count++;
                secondOnes.innerText = count;
                if (count === 10) {
                    count = 0;
                    secondOnes.innerText = 0;
                    secondTens.innerText = 1;
                    clearInterval(setTime)
                }
            }
        } 
    }, 10);  
});

btnReset.addEventListener('click', ()=>{
    sum = 0;
    timer = 0;
    count = 0;
    clearInterval(setTime)
})
