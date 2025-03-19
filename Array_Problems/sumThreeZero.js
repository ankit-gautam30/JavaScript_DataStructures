function findTriplets(arr) {
    let n = arr.length;
    let triplets = [];

    // Iterate through each element
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triplets;
}

// Example usage
let arr = [-1, 0, 1, 2, -1, -4];
let result = findTriplets(arr);
console.log("Triplets that sum to zero:", result);
