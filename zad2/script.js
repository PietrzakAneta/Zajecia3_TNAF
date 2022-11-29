const button1 = document.getElementById('przycisk1');
const button2 = document.getElementById('przycisk2');
const pole = document.getElementById('tekstowe');

console.log(pole)

let licznik = 0;
pole.innerText = licznik;

button1.addEventListener("click", function () {
    pole.innerText = ++licznik;
});


button2.addEventListener("click", function () {
    if (pole.style.color == 'black')
        pole.style.color = 'red';
    else pole.style.color = 'black';
});

