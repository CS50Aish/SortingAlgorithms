// Merge Sort Function
// It follows Divide and Conquer Algorithm Design

function mergeSort(array){
    // Base Case: If the array has 1 or 0 elements, it is already sorted
    if(array.length <= 1){
        return array;
    }

    // Find middle index of the array
    const middleIndex = Math.floor(array.length/2);

    // Divide the array into halves using slice function
    const leftHalf = array.slice(0, middleIndex);
    const rightHalf = array.slice(middleIndex);

    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted left and right halves using the merge function
    return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray){
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(leftArray[leftIndex] <= rightArray[rightIndex]){
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        }
        else{
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements from both arrays
    return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

// Example usage
const unsortedArray = [5,8,1,6,2,9,4,10,7,3];
console.log("Unsorted Array: ", unsortedArray);
console.time('mergeSort')
const sortedArray = mergeSort(unsortedArray);
console.time('mergeSort');
console.log("Sorted Array: ", sortedArray);
