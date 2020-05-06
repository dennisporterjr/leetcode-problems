 function mxsw(nums: number[], wdw: number): number {
    let curr = 0,
        len = nums.length,
        i = 0,
        max = 0;

    for(; i < wdw; i++ ) curr += nums[i];
    i = 1; max = curr;

    prnt(nums, wdw, 0, curr, max);


    for(; i <= len - wdw; i++) {
        curr += nums[i+wdw-1] - nums[i-1];
        max = Math.max(curr, max);
        prnt(nums, wdw, i, curr, max);
    }

    return max;
};

console.log(mxsw([1,3,2,2,4,3,7,-1,-3,5,3,6], 3));

function prnt(
    arr     : number[],
    wdw     : number,
    from    : number,
    sum     : number,
    max     : number,
) {
    let out = from + ":\t";

    arr.forEach((n, i) => {
        let begin = i == from;
        let end = i == (from+wdw-1);

        out += begin ? "[" : " ";
        out += n + (end ? "]" : " ") + "\t";
    });

    out += "\t=> sum: "  + sum + "\tmax: " + max;
    console.log(out);
}

// tsc max-win.ts && node max-win.js