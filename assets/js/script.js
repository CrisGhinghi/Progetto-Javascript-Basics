// seleziono gli elementi HTML
const counter = document.querySelector("#counter");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const increment = document.querySelector("#increment");


// aggiungo gli event listener ai bottoni
decrement.addEventListener("click", () => {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
});

reset.addEventListener("click", () => {
    counter.innerHTML = 0;
})

increment.addEventListener("click", () => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
});