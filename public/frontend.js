const btn = document.getElementById('btn');
const display = document.getElementById('diceRoll');
btn.addEventListener('click', async() => {
    let randNum = await fetch('/getNumber', {
        cache: 'no-store'
    });
    let num = await randNum.text();
    console.log(num);
    display.textContent = num;
});