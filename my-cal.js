var MyCalendar = function() {
    this.starts = [];
    this.ends = [];
    this.numEvents = 0;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if (this.check(start, end) || this.numEvents === 0) {
        this.starts.push(start);
        this.ends.push(end);
        this.numEvents++;
        return true;
    }    
    return false;
};

MyCalendar.prototype.check = function (start, end) {
    var valid = true;
    
    for (var j = 0; j < this.numEvents; j++) {
        if (!this.noConflict(start, end, this.starts[j], this.ends[j])) {
            valid = false;
            break;
        }
    }
    
    return valid;
}
    
MyCalendar.prototype.noConflict = function(start, end, startB, endB) {
    var startBad = start >= startB && start < endB;
    var endBad = end > startB && end <= endB;
    console.log({start, end, startB, endB});
    
    if (startBad || endBad) {
        return false;
    }
    
    return true;
}

var obj = new MyCalendar();

["MyCalendar","book","book","book","book","book","book","book","book","book","book"]
//[[],[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]
// console.log(obj.book(47, 50));
// console.log(obj.book(33, 41));
// console.log(obj.book(39, 45));
// console.log(obj.book(33, 42));
// console.log(obj.book(10, 20));
// console.log(obj.book(10, 15));
// console.log(obj.book(20, 30));

console.log(obj.noConflict(2,15,13,32));