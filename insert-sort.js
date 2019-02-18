
var insertSort = function (arr) {
    var n = arr.length;

    for (var i = 1; i < n; i++) {
        var curr = arr[i];
        var start = i;

        while (start > 0 && arr[start-1] > curr) {
            arr[start] = arr[start-1];
            start--;
        }

        arr[start] = value;
    }

    return arr;
};

console.log(insertSort([8,3,5,4,1,9,-2]));