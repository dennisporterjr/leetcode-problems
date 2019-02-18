var sortColors = function(nums) {
    var len = nums.length;
    var arr = [];
    var table = { "0": 0, "1": 0, "2": 0 };
    
    for (var j = 0; j < len; j++) {
        table[nums[j]]++;
        
        if (nums[j] === 0) {
            arr.unshift(0);
        }
        
        if (nums[j] === 2) {
            arr.push(2);
        }
        
        if (nums[j] === 1) {
            arr.splice(table["0"], 0, 1);
        }
    }
    
    return arr;
};

console.log(sortColors([2,0,2,1,1,0]));