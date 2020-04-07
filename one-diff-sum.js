
// https://programmingpraxis.com/2020/04/03/homework-3/

function oneDiffSum(c, n) {
    // pick a number
    // iterate over it's combinations with the next largest number
    // check to see if any of those combinations add up to our number
    var arr = []; var i = 0, len = Math.floor(c/2);

    for(; i < len; i++) {
        var j = i + 1;

        if(j * n < c) continue;

        var l = i * n;
        var diff = c - l;

        for(var k = 0; k < n; k++) {
            arr.push(k < diff ? j : i);
        }

        break;
    }

    if(c === 0) {
        for(var k = 0; k < n; k++) {
            arr.push(0);
        }
    }

    return arr;
}

console.log(oneDiffSum(26,7)); // 4 4 4 4 4 3 3
console.log(oneDiffSum(18,3)); // 6 6 6
console.log(oneDiffSum(5,10)); // 1 1 1 1 1 0 0 0 0 0
console.log(oneDiffSum(0,2));  // 0 0 