function mergesort(array) {
    // Make sure the array isn't empty or of only 1 value
    if(array == [] || array.length == 1) {
        return array;
    }

    // Enter Mergesort
    for(var i = 1; i <= array.length - 1; i = 2*i) { // Doesn't reach every element of the array, but instead increases by a factor of 2 each time.  This
                                                    // is what makes a complexity of "log(n)" since it isn't a direct iteration.  Not the while loop.
        for(var j = 0; j < array.length - 1; j += 2*i) { // Since this is going to compare every value in the array it will still be a complexity of "n"
            
            // Set right side, left side, end of the first split and the beginning of the second split
            let right = (2*i + j) - 1;
            let left = j;
            // Make sure right isn't larger than the array
            if (right > array.length - 1) {
                right = array.length - 1;
            }

            let mid = (j + i) - 1;
            //  Like above making sure that mid is within our array bounds
            if (mid > array.length) {
                mid = array.length;
            }
            if (mid < left) {
                mid = left;
            }

            let mid2 = mid + 1;

            // Splitting and Sorting
            while (left <= mid && mid2 <= right) { // At it's worse this loop will interact with the every single element of the array to
                                                  // compare in order to combine, which is a complexity of "n" similar to the second for loop above.
                if (array[left] <= array[mid2]) {
                    left++;
                }
                else {
                    let tmp = array[mid2];
                    for (var k = mid2; k != left; k--) { // Since left is constant this gives a constant complexity and is consumed by the log(n)
                        array[k] = array[k-1];
                    }
                    array[left] = tmp;
                    left++;
                    mid++;
                    mid2++;
                }
            }

        }
    }

    return array;
}
