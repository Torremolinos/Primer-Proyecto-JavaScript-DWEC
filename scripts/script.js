const btn = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['blue', 'yellow', 'green', 'black', 'white'];

btn.addEventListener('click', background);

function background() {
    var background = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = background(indice)
}
