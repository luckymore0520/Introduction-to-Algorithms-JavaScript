function myQuickSort(array) {
    function quickSort(array,start,end) {
        if (start < end) {
            var middle = partition(array,start,end);
            quickSort(array,start,middle - 1);
            quickSort(array,middle,end);
        }
        function partition(array,start,end) {
            var middleValue = array[end];
            var i = start - 1;
            for (var j = start; j < end; j++) {
                if (array[j] <= middleValue) {
                    i++;
                    exchange(array,i,j);
                }
            }
            i++;
            exchange(array,i,end)
            return i;
            function exchange(array,i,j) {
                var tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }

    }
    quickSort(array,0,array.length-1)
}

var array = [2,8,7,1,3,5,6,4];
myQuickSort(array)
console.log(array)
