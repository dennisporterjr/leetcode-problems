var permute = function(nums) {
    var  len = nums.length;
    var out = [];
    
    backtrack(0);
    
    return out;
    
    function backtrack(first) {
        var temp;
        
        if (first === len) {
            out.push(nums.slice());
        }
        
        for (var i = first; i < len; i++) {
            temp = nums[first];
            nums[first] = nums[i];
            nums[i] = temp;
            
            backtrack(first + 1);
            
            temp = nums[first];
            nums[first] = nums[i];
            nums[i] = temp;
        }
    }
};

console.log(permute([1,2,3]));