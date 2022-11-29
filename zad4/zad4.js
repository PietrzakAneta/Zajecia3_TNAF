const array = [1,2,3,4,5];

function sum(tab){
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    return suma;
}

console.log(sum(array));
