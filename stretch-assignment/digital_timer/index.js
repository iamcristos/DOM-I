let timer = 0
let sum = 0;
let count = 0
let secondTens = document.getElementById('secondTens');
secondTens.innerText = 0;
let secondOnes = document.getElementById('secondOnes');
secondOnes.innerText = 0
let msHundreds = document.getElementById('msHundreds');
msHundreds.innerText = 0
let msTens = document.getElementById('msTens');
msTens.innerText = 0;
const setTime = setInterval(()=>{
    sum ++
    msTens.innerText = sum
    console.log(msTens.innerText)
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
