
function myMergeSort(array) {
    return mergeSort(array, 0, array.length - 1)
    function mergeSort(array, start, end) {
        function merge(array, start, middle, end) {
            var firstArray = [];
            var secondArray = [];
            for (var i = start; i <= middle; i ++) {
                firstArray.push(array[i])
            }
            for (var i = middle+1; i <= end; i++) {
                secondArray.push(array[i])
            }
            var i = 0;
            var j = 0;
            for (var k = start; k <= end; k++) {
                if (i == firstArray.length) {
                    array[k] = secondArray[j]
                    j++;
                } else if (j == secondArray.length) {
                    array[k] = firstArray[i];
                    i++;
                } else if (firstArray[i] <= secondArray[j]){
                    array[k] = firstArray[i];  
                    i++;
                } else {
                    array[k] = secondArray[j];
                    j++;
                }
            }
        }
        if (start < end) {
            var middle = Math.floor((start + end) / 2);
            mergeSort(array, start, middle);
            mergeSort(array, middle+1, end);
            merge(array,start,middle,end);
        }
    }
}

var array = [22,33,1,5,66,2,1232,98,151];
myMergeSort(array);
console.log(array);