var life = 40;

//PLAYER 1 LIFE STUFF
function lifeUp() {
    document.getElementById("lifeTotal").innerHTML = (life += 1);
}
function lifeUp10() {
    document.getElementById("lifeTotal").innerHTML = (life += 10);
}
function lifeDown() {
    life =(life - 1)
    document.getElementById("lifeTotal").innerHTML = life;
}
function lifeDown10() {
    document.getElementById("lifeTotal").innerHTML = (life -= 10);
}

//PLAYER 2 LIFE STUFF
function lifeUp2() {
    document.getElementById("lifeTotal2").innerHTML = (life += 1);
}
function lifeUp102() {
    document.getElementById("lifeTotal2").innerHTML = (life += 10);
}
function lifeDown2() {
    life =(life - 1)
    document.getElementById("lifeTotal2").innerHTML = life;
}
function lifeDown102() {
    document.getElementById("lifeTotal2").innerHTML = (life -= 10);
}

//COLOR CHANGE
function colorChange1(color){
    // console.log(color);
    var newClass = 'background-color:'+color;
    // console.log('newClass is: ' + newClass );
    document.getElementById("player1background").style = newClass;
}
function colorChange2(color){
    // console.log(color);
    var newClass = 'background-color:'+color;
    // console.log('newClass is: ' + newClass );
    document.getElementById("player2background").style = newClass;
}

//COMMANDER DAMAGE
function cdPlayer1(value){
    document.getElementById("cdPlayer1").innerHTML = (value);
}
function cdPlayer2(value){
    document.getElementById("cdPlayer2").innerHTML = (value);
}

//ROLL DICE
function roll2Dice(){
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die1").innerHTML = (die1);
    document.getElementById("die2").innerHTML = (die2);
}
//ANIMATE DICE
function animateDice(){
    animation=setInterval(roll2Dice,20)
    setTimeout(function(){ 
        clearInterval( animation ); 
    }, 1000);
}