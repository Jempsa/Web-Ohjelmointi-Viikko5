function rollDice() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;


    document.querySelector('#dice img').src = './img/' + randomNumber + '.png';
}

document.getElementById("dice").addEventListener("click", rollDice);
