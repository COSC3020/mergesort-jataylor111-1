function mergesort(array) {
    // Make sure the array isn't empty or of only 1 value
    if(array == [] || array.length == 1) {
        return array;
    }

    // Enter Mergesort
    for(var i = 1; i <= array.length - 1; i = 2*i) { 
        for(var j = 0; j < array.length - 1; j += 2*i) {
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
            while (left <= mid && mid2 <= right) {
                if (array[left] <= array[mid2]) {
                    left++;
                }
                else {
                    let tmp = array[mid2];
                    for (var k = mid2; k != left; k--) {
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
