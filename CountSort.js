// Non-Comparison based Count Sort Algorithm
function countSort(array){

    // Find maximum in the given array
    let max = Math.max(...array);

    // Lets create an auxillary array to store the count of each element
    let countArray = new Array(max + 1).fill(0);

    // Count the occurences of each element in input array
    for(let element of array){
        countArray[element]++;
    }

    // Calculate prefix sums of the count array
    let prefixSums = [];
    prefixSums[0] = countArray[0];

    for(let i = 1; i <= max; i++){
        prefixSums[i] = prefixSums[i - 1] + countArray[i];
    }

    // Create an empty output array to store the elements
    let outputArray = new Array(array.length);

    // Place each element in the correct position in the output array
    for(let i = array.length - 1; i >= 0; i--){
        let element = array[i];
        let index = prefixSums[element] - 1;
        outputArray[index] = element;
        prefixSums[element]--;
    }

    return outputArray;
}

let inputArray = [5, 8, 1, 6, 2, 9, 4, 10, 7, 3];
console.log("InputArray: ", inputArray);

let outputSortedArray = countSort(inputArray);
console.log("OutputArray: ", outputSortedArray);