let array = [];

function range(a, b) {
    for (let i = a; i <= b; i++) {
        array.push(i);
    }
    return array;
}

console.log(range(1, 4));

