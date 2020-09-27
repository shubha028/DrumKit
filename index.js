var length = document.querySelectorAll(".drum").length;

for (var i = 0; i < length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var letter = this.innerHTML;
    playSound(letter);
    animate(letter);
  });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  animate(event.key);
});

function playSound(letter) {

  switch (letter) {
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();
    break;

    case "a":
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
    break;

    case "s":
      var s = new Audio("sounds/tom-3.mp3");
      s.play();
    break;

    case "d":
      var d = new Audio("sounds/tom-4.mp3");
      d.play();
    break;

    case "j":
      var j = new Audio("sounds/snare.mp3");
      j.play();
    break;

    case "k":
      var k = new Audio("sounds/crash.mp3");
      k.play();
    break;

    case "l":
      var l = new Audio("sounds/kick-bass.mp3");
      l.play();
    break;

    default:
      console.log(this.innerHTML);
    break;
  }
}

function animate(key) {
  var active = document.querySelector("." + key);
  active.classList.add("pressed");

  setTimeout(function() {
    active.classList.remove("pressed");
  }, 100);

}
