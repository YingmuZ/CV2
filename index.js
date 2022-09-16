
// document.querySelectorAll("button").addEventListener("click", handleClick);
// here單數 所以只是第一個button；以及後邊這個function call沒有parentheses，因為我們要想像電腦readcode時的次序！
// its the idea of passing a function as an input so that it can be called at a later time
// function handleClick() {
//   alert("i got clicked!");
// }

// or just go like "anonymous function" such as :
// document.querySelector("button").addEventListener("click", function () {
//   alert("i got clicked!");
// });

// 這裏（17-20）是我查詢的解決方案～⋯⋯^ ^
// document.querySelectorAll("button").forEach(function(el){
//   el.addEventListener("click", e => {
//     alert("clicked!");});
// });

//okay 標答用了 loop 如下
// for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
//
// document.querySelectorAll("button")[i].addEventListener("click", function() {
//  alert("clicked!");
//
// });
// }


//📌 detecting button press 📌
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll("button")[i].addEventListener("click", function() {

 // var audio = new Audio("sounds/tom-1.mp3")
 // audio.play();

 // console.log(this);
 // console.log(this.innerHTML);

 // event.target.style.color = "white";这是我谷歌的答案
 // this.style.color = "white";这是标准答案，运用了this

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });

}



//📌 detecting keyboard press 📌
document.addEventListener("keydown", function(event) {
  // console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(key) {

  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
