// Demo amazon problem...

function generalizedGCD(num, arr)
{
    var nums = arr.sort((a, b) => { return a-b; });
    var gcd = 1;
    var ans = 1;

    for (var j = 0; j < num-1; j++) {
        gcd = j === 0 ? nums[j] : ans;
        ans = getGCD(gcd, nums[j+1]);
    }

    return ans;

    function getGCD(a, b) {
        var r = 1;
        var largest = a > b ? a : b;
        var smallest = a > b ? b : a;
        var gcd = 1;
        
        while (r !== 0) {
            r = largest % smallest;

            if (r === 0) {
                gcd = smallest;
            } else {
                largest = smallest;
                smallest = r;
            }
        }

        return gcd;
    }
}
console.log(generalizedGCD(5, [2,3,4,5,6]));
console.log(generalizedGCD(5, [2,4,6,8,10]));
console.log(generalizedGCD(3, [1,1,1]));
console.log(generalizedGCD(3, [10,10,5]));