function generateRandomNumbers() {
    let numbers = [];
    
    // Generate 10 random 3-digit numbers
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Ensures 3-digit numbers (100-999)
    }

    console.log("Generated numbers:", numbers);

    // Find second largest and second smallest without sorting
    findSecondLargestSmallest(numbers);

    // Sort the array and find again
    numbers.sort((a, b) => a - b); // Ascending order
    console.log("Sorted numbers:", numbers);
    console.log("Second Smallest (Sorted):", numbers[1]);
    console.log("Second Largest (Sorted):", numbers[numbers.length - 2]);
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

    console.log("Second Largest (Without Sorting):", secondLargest);
    console.log("Second Smallest (Without Sorting):", secondSmallest);
}

// Run the program
generateRandomNumbers();
