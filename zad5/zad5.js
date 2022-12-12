function fibonacci(n) {
    let array = [];

    if (n <= 0)
        console.log("Podaj liczbe dodatnia");
    else if (n == 1)
        array.push(0);
    else if (n == 2) {
        array.push(0);
        array.push(1);
    }
    else {
        array.push(0);
        array.push(1);
        for (let i = 2; i < n; i++) {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
}

console.log(fibonacci(9));