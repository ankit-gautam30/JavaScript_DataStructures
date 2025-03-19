function generateBirthMonths() {
    let birthData = {};

    // Initialize dictionary for months (1 to 12)
    for (let i = 1; i <= 12; i++) {
        birthData[i] = [];
    }

    // Generate 50 random birth months
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        birthData[month].push(`Person${i}`);
    }

    return birthData;
}

// Run the function
let birthMonthGroups = generateBirthMonths();

// Print the grouped birth months
console.log("Individuals grouped by birth month:");
for (let month in birthMonthGroups) {
    if (birthMonthGroups[month].length > 0) {
        console.log(`Month ${month}:`, birthMonthGroups[month]);
    }
}
