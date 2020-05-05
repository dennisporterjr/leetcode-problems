var mxsw = function(nums: number[], k: number) {
    let curr = 0,
        prev = 0,
        len = nums.length,
        i = 0,
        max = -Infinity;

    for(;i<k;i++) curr += nums[i];

    for(; i < len; i++) {
        prev = curr;
        curr += nums[i] - nums[i-k];
        printmx(nums,k,i);
    }

};

var printmx = function(arr: number[], wdw: number, from: number) {
    let out = "";

    arr.forEach((elem, i) => {
        out += from >= i && i < (from+wdw) ? "." : "";
        out += elem + "  ";
    });

    console.log(out);
}

console.log(mxsw([4,3,7,-1,-3,5,3,6], 3));


// [4  3  -1  -3] 5  3  6  7       4 (3)
//  4 [3  -1  -3  5] 3  6  7       3 (-1)
//  4  3 [-1  -3  5  3] 6  7       5 (5)
//  4  3  -1 [-3  5  3  6] 7       5
//  4  3  -1  -3 [5  3  6  7]      6