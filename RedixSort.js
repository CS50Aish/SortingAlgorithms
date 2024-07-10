// Redix Sort Algorithm - Non-comparison based algorithm

function redixSort(array){

    // Function to get the maximum value in the array
    const getMax = (array) => {
        let max = 0;
        for(const num of array){
            if(num > max){
                max = num;
            }
        }
        return max;
    }

    // Function to perform counting sort on the given array based on the specific digit
    const numberCountSort = (array, exp) => {
        const output = new Array(array.length);
        const count = new Array(10).fill(0);

        // Count occurences of digits
        for(let i = 0; i < array.length; i++){
            count[Math.floor(array[i]/exp) % 10]++;
        }

        // Change count[i] so that it contains the actual position of the digit in the output[] array
        for(let i = 1; i < 10; i++){
            count[i] += count[i - 1]; 
        }

        // Build the output array
        for(let i = array.length - 1; i >= 0; i--){
            output[count[Math.floor(array[i]/exp) % 10] - 1] = array[i];
            count[Math.floor(array[i]/exp) % 10]--;
        }

        // Copy the output to the input array, so that the input array now contains the sorted numbers
        for(let i = 0; i < array.length; i++){
            array[i] = output[i];
        }
    }

    // Get the maximum value in the array
    const max = getMax(array);

    // Lets do counting sort for every digit
    for(let exp = 1; Math.floor(max/exp) > 0; exp*=10){
        numberCountSort(array, exp);
    }
}

const array = [170,45,75,90,802,24,2,66];
console.log("Unsorted Array: ", array);

redixSort(array);
console.log("Sorted Array: ", array);