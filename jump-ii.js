

var jump = function (nums) {
    var nLen = nums.length;
    var stuck = false;
    var goal = false;
    var pos = 0;
    var jumps = 0;
    var maxMoves = 0;
    var bestMove = 0;

    while (!stuck && !goal) {
        if (pos >= nLen-1) {
            goal = true;
        } else if (nums[pos] === 0) {
            stuck = true;
        } else {
            var furthestJump = Math.min(pos+nums[pos], nLen-1);
            var score = 0;
            maxMoves = 0;
            bestMove = pos+1;

            for (var k = pos+1; k <= furthestJump; k++) {
                if (k >= nLen-1) {
                    bestMove = k;
                    break;
                }

                // score = number of moves afforded by the new position 
                // plus a bonus based on distance to the goal
                score = nums[k] + (nLen-(nLen-1-k));
                if (score > maxMoves) {
                    maxMoves = score;
                    bestMove = k;
                }
            }

            pos = bestMove;
            jumps++;
        }
    }

    return stuck ? false : jumps;
};

loops = 0;
console.log("jump");
console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0]));
console.log(jump([1,2,1,1,1]));
// console.log(jump([2,3,1,1,4]));
console.log(jump([3,2,1,0,4]));
// console.log({loops});