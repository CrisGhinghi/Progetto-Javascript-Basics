// Creo gli elementi
const container = document.querySelector('#container');

const title = document.createElement('h1');
title.textContent = `HI, I'M YOUR COUNTER`;
container.appendChild(title);

const counter = document.createElement('p');
counter.textContent = '0';
container.appendChild(counter);


const btn = document.querySelector('#btn');
container.appendChild(btn);

const decrement = document.createElement('button');
decrement.textContent = '-';
btn.appendChild(decrement);

const reset = document.createElement('button');
reset.textContent = 'RESET ME';
btn.appendChild(reset);

const increment = document.createElement('button');
increment.textContent = '+';
btn.appendChild(increment);


// Aggiungo gli event listener ai bottoni
decrement.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});

reset.addEventListener("click", () => {
    counter.textContent = 0;
});

increment.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});


// Aggiungo lo stile
container.setAttribute('class', 'container');
title.setAttribute('class', 'title');
counter.setAttribute('class', 'counter');
decrement.setAttribute('class', 'button');
reset.setAttribute('class', 'button');
increment.setAttribute('class', 'button');

