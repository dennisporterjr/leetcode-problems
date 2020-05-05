var mxsw = function (nums, wdw) {
    var curr = 0, prev = 0, len = nums.length, i = 0, max = -Infinity;
    for (; i < wdw; i++)
        curr += nums[i];
    printmx(nums, wdw, 0, curr);
    i = 1;
    max = curr;
    for (; i <= len - wdw; i++) {
        var plus = nums[i + wdw - 1], minus = nums[i - 1];
        curr += plus - minus;
        max = Math.max(curr, max);
        printmx(nums, wdw, i, curr + ",\tmax: " + max);
    }
};
var printmx = function (arr, wdw, from, sum) {
    var out = from + ":\t";
    arr.forEach(function (n, i) {
        var begin = i == from;
        var end = i == (from + wdw - 1);
        out += begin ? "[" : " ";
        out += n + (end ? "]" : " ") + "\t";
    });
    out += "\t=> " + sum;
    console.log(out);
};
console.log(mxsw([1, 3, 2, 2, 4, 3, 7, -1, -3, 5, 3, 6], 3));
// [4  3  -1  -3] 5  3  6  7       4 (3)
//  4 [3  -1  -3  5] 3  6  7       3 (-1)
//  4  3 [-1  -3  5  3] 6  7       5 (5)
//  4  3  -1 [-3  5  3  6] 7       5
//  4  3  -1  -3 [5  3  6  7]      6
