var randomNumber1 = (Math.floor(Math.random()*6)) + 1;
console.log(randomNumber1);
var img1New = "./images/dice"+ randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",img1New);


var randomNumber2 = (Math.floor(Math.random()*6)) + 1;
console.log(randomNumber2);
var img2New = "./images/dice"+ randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",img2New);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🎮Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins🎮";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}