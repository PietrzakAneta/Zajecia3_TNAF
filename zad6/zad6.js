function palindrom(word) {
    let mainWord = word.split("");                      // .split(separator) - dzieli string na części używając separatora i zwraca tablicę
    let reverseWord = mainWord.reverse().join("");      // .join(separator) - "skleja elementy tablicy w String"

    if (word === reverseWord)           
        return true;
    else return false;
}

    console.log(palindrom("kajak"));
