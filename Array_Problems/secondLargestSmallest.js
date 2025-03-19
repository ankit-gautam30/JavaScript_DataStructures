function generateRandomNumbers() {
    let numbers = [];
    
    // Generate 10 random 3-digit numbers
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Ensures 3-digit numbers (100-999)
    }

    console.log("Generated numbers:", numbers);

    findSecondLargestSmallest(numbers);
}

function findSecondLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding the largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding the smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    console.log("Second Largest:", secondLargest);
    console.log("Second Smallest:", secondSmallest);
}

// Run the program
generateRandomNumbers();
