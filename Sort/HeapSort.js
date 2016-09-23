function heapSort(array) {
    var heapSize = array.length;
    array.unshift(Math.max())
    buildMaxHeap(array)
    for (var i = array.length - 1; i >=2 ; i--) {
        exchange(array,i,1);
        heapSize = heapSize - 1;
        maxHeapfy(array,1);
    }
    array.splice(0,1);
    function buildMaxHeap(array) {
        for (var i = Math.floor(array.length); i >=1 ; i--) {
            maxHeapfy(array,i);
        }
    }
    function exchange(array,i,j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    function maxHeapfy(array,i) {
        var leftIndex = left(i)
        var rightIndex = right(i)
        var largest = i
        if (leftIndex <= heapSize && array[leftIndex] > array[largest]) {
            largest = leftIndex;
        }
        if (rightIndex <= heapSize && array[rightIndex] > array[largest]) {
            largest = rightIndex;
        }
        if (i != largest) {
            exchange(array, i , largest);
            maxHeapfy(array,largest)
        }
        function parent(i){
            return Math.floor(i/2)
            }
        function left(i) {
            return i * 2
        }
        function right(i) {
            return i * 2 + 1
        }  
    }
}


var array = [16,4,10,14,7,9,3,2,8,1];
heapSort(array);
console.log(array);