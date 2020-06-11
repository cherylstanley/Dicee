


// Dice 1 (Left)
// Math.floor(Math.random()*6)+1; //Angela version
var RandomNumber1 = Math.ceil(Math.random()*6);
document.querySelector(".img1").src ="images/dice"+ RandomNumber1 + ".png";


// Dice 2 (Right)
var RandomNumber2= Math.ceil(Math.random()*6);
//document.querySelectorAll("img")[0].setAttribute(src, blah.png) ....
document.querySelector(".img2").src ="images/dice"+ RandomNumber2 + ".png";

// Winner
if(RandomNumber1>RandomNumber2){
document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(RandomNumber2>RandomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";

}
else{
  document.querySelector("h1").innerHTML = "Draw!";

}
