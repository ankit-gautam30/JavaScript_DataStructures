function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

function rollUntilLimit(limit) {
    let rollCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    
    let maxReached = false;

    while (!maxReached) {
        let result = rollDie();
        rollCount[result]++;

        if (rollCount[result] === limit) {
            maxReached = true;
        }
    }

    console.log("Final Roll Counts:", rollCount);

    // Find the number with max and min occurrences
    let maxNumber = Object.keys(rollCount).reduce((a, b) => rollCount[a] > rollCount[b] ? a : b);
    let minNumber = Object.keys(rollCount).reduce((a, b) => rollCount[a] < rollCount[b] ? a : b);

    console.log(`Number that reached max times (${limit} times): ${maxNumber}`);
    console.log(`Number that appeared the least times: ${minNumber}`);
}

// Run the simulation with limit 10
rollUntilLimit(10);
