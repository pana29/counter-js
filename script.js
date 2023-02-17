let count = 0;
const text = document.querySelector(".text");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click",(e) => {
    const conter = e.currentTarget.classList;
    if (conter.contains("decrease")) {
      count--;
    } else if (conter.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      text.style.color = "green";
    }
    if (count < 0) {
      text.style.color = "red";
    }
    if (count === 0) {
      text.style.color = "#222";
    }
    text.textContent = count;
  });
});