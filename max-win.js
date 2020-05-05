var mxsw = function (nums, k) {
    var curr = 0, prev = 0, len = nums.length, i = 0, max = -Infinity;
    for (; i < k; i++)
        curr += nums[i];
    for (; i < len; i++) {
        prev = curr;
        curr += nums[i] - nums[i - 3];
        printmx(nums, k, i);
    }
    return 'hey';
};
var printmx = function (arr, wdw, from) {
    var out = "";
    arr.forEach(function (elem, i) {
        out += from >= i && i < (from + wdw) ? "." : "";
        out += elem + "  ";
    });
    console.log(out);
};
console.log(mxsw([4, 3, 7, -1, -3, 5, 3, 6], 3));
// [4  3  -1  -3] 5  3  6  7       4 (3)
//  4 [3  -1  -3  5] 3  6  7       3 (-1)
//  4  3 [-1  -3  5  3] 6  7       5 (5)
//  4  3  -1 [-3  5  3  6] 7       5
//  4  3  -1  -3 [5  3  6  7]      6
