var log = console.log;
/**
 * @description https://leetcode.com/problems/maximum-product-of-three-numbers/ #628
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var numLen = nums.length;
    var maxThree = nums[0] * nums[1] * nums[2];
    var maxTwo = nums[0] * nums[1];
    var minTwo = nums[0] * nums[1];
    var max = Math.max(nums[0], nums[1]);
    var min = Math.min(nums[0], nums[1]);

    for (var n = 2; n < numLen; n++) {
        maxThree = Math.max(maxThree, nums[n]*maxTwo, nums[n]*minTwo);

        maxTwo = Math.max(maxTwo, nums[n]*max, nums[n]*min);
        minTwo = Math.min(minTwo, nums[n]*max, nums[n]*min);

        max = Math.max(max, nums[n]);
        min = Math.min(min, nums[n]);
    }

    return maxThree;
};

// actually slower because it uses a sorting algorithm (quicksort/introsort)
// var maximumProduct = function (nums) {
    // var sorted = nums.sort((a, b) => { return a-b; }).reverse();
    // var a = sorted[0] * sorted[1] * sorted[2];
    // var b = sorted[0] * sorted[sorted.length-1] * sorted[sorted.length-2];

    // return Math.max(a, b);
// };

// log("\n");
// log(maximumProduct([1000,1000,2,1,2,5,3,1]));
// log("should be 5000000.");
// log("\n");
// log(maximumProduct([-4,-3,-2,-1,60]));
// log("should be 720.");
log("\n");
log(maximumProduct([1,2,3,4]));

// log("\n");
// log(maximumProduct([722,634,-504,-379,163,-613,-842,-578,750,951,-158,30,-238,-392,-487,-797,-157,-374,999,-5,-521,-879,-858,382,626,803,-347,903,-205,57,-342,186,-736,17,83,726,-960,343,-984,937,-758,-122,577,-595,-544,-559,903,-183,192,825,368,-674,57,-959,884,29,-681,-339,582,969,-95,-455,-275,205,-548,79,258,35,233,203,20,-936,878,-868,-458,-882,867,-664,-892,-687,322,844,-745,447,-909,-586,69,-88,88,445,-553,-666,130,-640,-918,-7,-420,-368,250,-786]));