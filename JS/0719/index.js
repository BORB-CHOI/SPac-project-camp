const h = document.querySelector("div > h1");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
// const decrementBtn = document.querySelector("button:nth-of-type(2)");

let count = h.innerText;

plusBtn.addEventListener("click", () => {
  if (count >= 0) h.innerText = ++count;
});

minusBtn.addEventListener("click", () => {
  if (count < 10) h.innerText = --count;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "=" && count > 0) {
    h.innerText = ++count;
  }
  if (e.key === "-" && count < 10) {
    h.innerText = --count;
  }
});
