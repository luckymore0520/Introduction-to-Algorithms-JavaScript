//计数排序 O(n)，但是需要保证每个输入元素都在0-k区间，且 k = O(n)
function countSort(array) {
    var countArray = []
    var maxValue = findMaxInArray(array)
    for (var i = 0 ; i <=maxValue ; i++) {
        countArray[i] = 0;
    }
    for (var i = 0 ; i < array.length; i++) {
        var value = array[i];
        countArray[value]++;
    }
    for (var i = 1 ; i <=maxValue; i++) {
        countArray[i] = countArray[i] + countArray[i-1];
    }
    var resultArray = [];
    for (var i = array.length - 1; i >= 0 ; i--) {
        resultArray[countArray[array[i]]-1] = array[i];
        countArray[array[i]]--;
    }
    return resultArray;
    function findMaxInArray(array) {
        if (array.length > 0) {
            var maxValue = array[0]
            for (var i = 1 ; i < array.length; i++) {
                var value = array[i];
                if (maxValue < value) {
                    maxValue = value;
                }
            }
            return maxValue;
        }
    }
}

var array = [2,5,3,0,2,3,0,3];
console.log(countSort(array));
