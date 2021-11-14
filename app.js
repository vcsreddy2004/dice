let timerKey;
let diceRollBtn = document.querySelector("#diceRoll");
diceRollBtn.addEventListener("click" , () => {
    diceAnimation();
});
let dice = document.querySelector("#dice");
window.addEventListener("keydown" , (event) => {
    if(event.key == " ")
    {
        diceAnimation();
    }
});
function diceAnimation()
{
    timerKey = setInterval("diceRoll()" , 1000);
    dice.style.animation = "dice 3s";
}
function diceRoll()
{
    let diceValue;
    diceValue = Math.floor(Math.random() * 7);
    if(diceValue == 0)
    {
        diceValue = 1;
    }
    dice.src=`images/dice${diceValue}.png`;
    dice.style.animation = "";
    clearInterval(timerKey);
}