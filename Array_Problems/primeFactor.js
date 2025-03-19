function primeFactorization(n) {
    let factors = [];
    
    // Divide n by 2 until it is odd
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is still greater than 2, it must be prime
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Example usage
let number = 84; // Change this number as needed
let primeFactors = primeFactorization(number);
console.log(`Prime Factors of ${number}:`, primeFactors);
