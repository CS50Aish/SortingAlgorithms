// Selection Sort Algorithm
// Start from the beginning of the array
// Finding the minimum element 
// Swap minimum found element with the first element in the unsorted array section
// Move the boundary of array to the next element by not considering the first minimum element 
// Repeat the above steps until the array is sorted

// Function to perform selection sort
// Time complexity - O(n^2)
// Space Complexity - O(1)

function selectionSort(array){
    for(let i=0; i<array.length; i++){
        // Assume the current index is the minimum value index
        let minValueIndex = i;

        // Find the index of minimum value in the remaining unsorted part of array
        for(j=i+1; j<array.length; j++){
            if(array[j]<array[minValueIndex]){
                minValueIndex = j;
            }
        }

        // Swap the current value element with the minimum value element 
        [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
    }

    return array;
}

const unsortedArray = [5,8,1,6,2,9,4,10,7,3];

console.log("Unsorted Array: ", unsortedArray);

const sortedArray = selectionSort(unsortedArray);

console.log("Sorted Array: ", sortedArray);