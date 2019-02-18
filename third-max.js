/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var len = nums.length;
    var first = -Infinity;
    var second = -Infinity;
    var third = -Infinity;
    var table = {};
    
    for (var j = 0; j < len; j++) {
        table[nums[j]] = true;
        // replace first
        if (nums[j] > first) {
            third = second;
            // third = second === first ? third : second;
            second = first;
            // second = nums[j] === first ? second : first;
            first = nums[j];

        // replace second
        } else if (nums[j] > second && nums[j] !== first) {
            third = second;
            // third = second === first ? third : second;
            second = nums[j];
            // second = nums[j] === first ? second : first;

        // replace third
        } else if (nums[j] > third && nums[j] !== second && nums[j] < second) {
            third = nums[j];
            // third = second === first ? third : second;
        }
    }
    
    return Object.keys(table).length >= 3 ? third : first;
};

console.log(thirdMax([2,2,3,1]));
console.log(thirdMax([1,2,2,5,3,5]));
//console.log(thirdMax([1,2,2]));