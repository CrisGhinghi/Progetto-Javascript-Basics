const counter = document.querySelector("#counter");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const increment = document.querySelector("#increment");

increment.addEventListener("click", () => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
});

reset.addEventListener("click", () => {
    counter.innerHTML = 0;
})

decrement.addEventListener("click", () => {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
});