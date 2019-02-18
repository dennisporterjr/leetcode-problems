var maxSlidingWindow = function(nums, k) {
    var len = nums.length;
    var currMax = -Infinity;
    var tailMax = -Infinity;
    var lastMaxIndex = 0;
    var max = [];
    
    for (var j = 0; j < k; j++) {
        currMax = Math.max(currMax, nums[j]);
        if (j >= 1) {
            tailMin = Math.min(tailMax, nums[j]);
        }
    }

    max.push(currMax);

    
    console.log({currMax, tailMax});
    // for (var i = 1; i < len-k; i++) {
    //     var newNum = nums[i+k-1];
    //     max.push(Math.max(tailMax, newNum));
    //     tailMax = Math.max();
    // }

    return max;
};

console.log(maxSlidingWindow([4,3,-1,-3,5,3,6,7], 3));


// [4  3  -1  -3] 5  3  6  7       4 (3)
//  4 [3  -1  -3  5] 3  6  7       3 (-1)
//  4  3 [-1  -3  5  3] 6  7       5 (5)
//  4  3  -1 [-3  5  3  6] 7       5
//  4  3  -1  -3 [5  3  6  7]      6