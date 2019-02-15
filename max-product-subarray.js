var log = console.log;
/**
 * @description https://leetcode.com/problems/maximum-product-subarray/ #152
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var numLen = nums.length;

    if (numLen == 1) return nums[0];
    if (numLen == 0) return 0;

    var lastNumber = 1;
    var begin = 0;
    var end = 0;
    var currProduct = -Infinity;
    var ans = currProduct;

    while (begin < numLen) {
        firstNumber = nums[begin];
        end = begin;

        while (end < numLen) {
            lastNumber = nums[end];

            if (end == begin) {
                currProduct = nums[begin];
            } else {
                currProduct *= lastNumber;
            }

            counter++;
            ans = Math.max(ans, currProduct);
            end++;
        }
        begin++;
    }

    return ans;
};

console.log(maxProduct([-2,3,-4]));