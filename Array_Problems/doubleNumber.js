function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];

    for (let i = 10; i <= 99; i++) { // Only two-digit numbers
        let tens = Math.floor(i / 10); // Extract the tens place
        let ones = i % 10; // Extract the ones place

        if (tens === ones) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Run the function and display results
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);
