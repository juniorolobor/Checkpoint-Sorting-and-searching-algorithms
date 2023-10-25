// Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

function insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]  
        j = i - 1  

        // Move elements of the sorted sequence that are greater than key to the right
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        // Insert the current element into its correct position in the sorted sequence
        arr[j + 1] = key

arr = [12, 11, 13, 5, 6]
console.log(insertionSort(arr [12, 11, 13, 5, 6]))

