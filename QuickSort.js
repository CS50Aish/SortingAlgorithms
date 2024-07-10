// Quick Sort Function
// It is also based on divide and conquer design technique
// It is more performant than merge sort in sorting large datasets

// Time complexity - O(n log n) - Average Case, and O(n^2) - Worst case

function quickSort(array, low, high){
    if (low < high) {
        const partitionIndex = partition(array, low, high);

        // Recursively sort elements before and after partition
        quickSort(array, low, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, high);
    }

    return array;
}

function partition(array, low, high){
    // Select the pivot element (last element in this case)
    const pivot = array[high];
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (array[j] <= pivot) {
            i++; // Increment index of smaller element
            // Swap array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Swap array[i + 1] and array[high] (pivot)
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1; // Return the partition index
}

// Example usage
const unsortedArray = [5, 8, 1, 6, 2, 9, 4, 10, 7, 3];
console.log("Unsorted Array: ", unsortedArray);

quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log("Sorted Array: ", unsortedArray);
