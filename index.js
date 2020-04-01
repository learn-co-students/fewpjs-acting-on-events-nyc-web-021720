// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left;
let window = document.getElementById("game");

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if ((e.key = "ArrowRight")) {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let a = window.style.width.replace("px", "");
  let check = parseInt(a, 10);
  let rightNumbers = dodger.style.right.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  console.log(check);
  if (right < check) {
    window.style.right = `${right - 1}px`;
  }
}
