var insertSort = function (arr) {
    var len = arr.length;

    for (var j = 1; j < len; j++) {
        var value = arr[j];
        var k = j;

        while (k > 0 && value < arr[k-1]) {
            arr[k] = arr[k-1];
            k--;
        }

        arr[k] = value;
    }

    return arr;
};

console.log(insertSort([7,6,-1,-3,0,14,27]));