/**
 * @param {number[]} nums
 * @return {boolean}
 */
var loops = 0;
var canJump = function(nums) {

    var memo = [];
    var nLen = nums.length;

    for (var j = 0; j < nLen; j++) {
        memo[j] = j === nLen-1 ? "GOOD" : "UNKWN";
    }
    
    return canJumpFromPosition(0, nums);
    
    function canJumpFromPosition(pos, _nums) {
        loops++;
        if (memo[pos] !== "UNKWN") {
            return memo[pos] === "GOOD" ? true : false;
        }
        
        var furthestJump = Math.min(pos + _nums[pos], _nums.length-1);
        console.log({pos, furthestJump});
        
        for (var n = pos+1; n <= furthestJump; n++) {
            if (canJumpFromPosition(n, _nums)) {
                memo[pos] = "GOOD";
                return true;
            }
        }
        
        memo[pos] = "BAD";
        return false;
    }
};
var canJumpB = function(nums) {
    
    return canJumpFromPosition(0, nums);
    
    function canJumpFromPosition(pos, _nums) {
        loops++;
        if (pos === _nums.length-1) {
            return true;
        }
        
        var furthestJump = Math.min(pos + _nums[pos], _nums.length-1);
        console.log({pos, furthestJump});
        
        for (var n = pos+1; n <= furthestJump; n++) {
            if (canJumpFromPosition(n, _nums)) {
                console.log({pos});
                return true;
            }
        }
        
        return false;
    }
};

var canJumpC = function(nums) {
    var nLen = nums.length;
    var memo = Array(nLen);
    nums.forEach((x, i) => { memo[i] = i == nLen-1 ? "GOOD":"TBD"; });

    for (var pos = nLen-2; pos >= 0; pos--) {
        var jumpScore = nums[pos];
        var furthestJump = Math.min(pos + jumpScore, nLen-1);

        for (var next = pos + 1; next <= furthestJump; next++) {
            loops++;
            if (memo[next] === "GOOD") {
                memo[pos] = "GOOD";
                break;
            }
        }
    }

    return memo[0] === "GOOD";
};

var canJumpD = function (nums) {
    var last = nums.length;

    for (var j = nums.length-1; j >= 0; j--) {
        if (j + nums[j] >= last) {
            last = j;
        }
    }

    return last === 0;
};

// loops = 0;
// console.log("canJump");
// console.log(canJump([2,3,1,1,4]));
// console.log(canJump([3,2,1,0,4]));
// console.log(canJump([1]));
// console.log({loops});
// 
// loops = 0;
// console.log("canJumpB");
// console.log(canJumpB([2,3,1,1,4]));
// console.log(canJumpB([3,2,1,0,4]));
// console.log(canJumpB([1]));
// console.log({loops});

loops = 0;
console.log("canJumpC");
console.log(canJumpC([2,3,1,1,4]));
console.log(canJumpC([3,2,1,0,4]));
// console.log(canJumpC([1]));
console.log({loops});

loops = 0;
console.log("canJumpD");
console.log(canJumpD([2,3,1,1,4]));
console.log(canJumpD([3,2,1,0,4]));
// console.log(canJumpC([1]));
console.log({loops});