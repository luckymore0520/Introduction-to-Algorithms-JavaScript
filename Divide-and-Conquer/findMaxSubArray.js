
function findMaxArray(array) {
    return findMaxSubArray(array,0,array.length-1);
    function findMaxSubArray(array,low,high) {
        function findMaxCrossSubArray(array,low,middle,high) {
            var leftMaxSum = Number.NEGATIVE_INFINITY;
            var sum = 0;
            var leftStart = middle;
            for (var i = middle; i >= low ; i--) {
                sum = sum + array[i];
                if (sum > leftMaxSum) {
                    leftMaxSum = sum;
                    leftStart = i;
                }
            }

            var rightMaxSum = Number.NEGATIVE_INFINITY;
            sum = 0;
            var rightEnd = middle;
            for (var j = middle+1; j <=high; j++){
                sum = sum + array[j];
                if (sum > rightMaxSum) {
                    rightMaxSum = sum;
                    rightEnd = j;
                }
            }
            return [leftStart,rightEnd, rightMaxSum + leftMaxSum];
        }

        if (low == high) {
            return [low,high,array[0]];
        } 
        var middle = Math.floor((low + high) / 2.0)
        var firstHalfMaxArray = findMaxSubArray(array,0,middle)
        var secondHalfMaxArray = findMaxSubArray(array,middle+1,high)

        var crossMaxArray = findMaxCrossSubArray(array,low,middle,high)

        var max = Math.max(crossMaxArray[2],Math.max(firstHalfMaxArray[2],secondHalfMaxArray[2]))
        if (max == crossMaxArray[2]) {
            return crossMaxArray
        } 
        if (max == secondHalfMaxArray[2]) {
            return secondHalfMaxArray
        }
        if (max == firstHalfMaxArray[2]) {
            return firstHalfMaxArray
        }
    }

}


array = [1,-1,2,3,6];
console.log(findMaxArray(array));