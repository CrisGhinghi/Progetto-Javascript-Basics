// Creo gli elementi
const container = document.querySelector('#container');

const title = document.createElement('h1');
title.textContent = `HI, I'M YOUR COUNTER`;
container.appendChild(title);

const counter = document.createElement('p');
counter.textContent = '0';
container.appendChild(counter);

const decrement = document.createElement('button');
decrement.textContent = '-';
container.appendChild(decrement);

const reset = document.createElement('button');
reset.textContent = 'RESET ME';
container.appendChild(reset);

const increment = document.createElement('button');
increment.textContent = '+';
container.appendChild(increment);


// Aggiungo gli event listener ai bottoni
decrement.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});

reset.addEventListener("click", () => {
    counter.textContent = 0;
})

increment.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});


// Aggiungo lo stile
container.setAttribute('class', 'container');
title.setAttribute('class', 'title');
counter.setAttribute('class', 'counter');
decrement.setAttribute('class', 'btn');
reset.setAttribute('class', 'btn');
increment.setAttribute('class', 'btn');