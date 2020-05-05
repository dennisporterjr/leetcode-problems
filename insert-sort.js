
var insertSort = function (a) {
    var l = a.length, i = 1;

    while(l > i) {
        let k = i, num = a[k];

        while(k > 0 && a[k-1] > num) {
            a[k] = a[k-1];
            k--;
        }

        a[k] = num;
        i++;
    }

    return a;
};

console.log(insertSort([8,3,5,4,1,9,-2]));


































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