var l = console.log;
var c = function(item) {
    return JSON.parse(JSON.stringify(item));
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // Do I have NO children?
        // Is my value plus the running talley equal to SUM?
            // If so, return true...
            // If not, return false
    // Pass the talley, and check if either of my children are valid leaves.

    function goodPath(node, talley, target, path) {
        path = path || [];

        if(node === null) return false;
        
        talley += node.val;
        path.push(node.val);

        if(node.left === null && node.right === null) {
            var ans = talley === target;
            console.log(path);
            if(ans) {
                return true;
            }

            return false;
        }

        return goodPath(node.left, talley, target, c(path)) || goodPath(node.right, talley, target, c(path));
    }

    let p = [root.val];

    // let's go...
    return goodPath(root.left, root.val, sum, c(p)) || goodPath(root.right, root.val, sum, c(p));
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var input = new TreeNode(
    5,
    new TreeNode(
        4,
        new TreeNode(
            11,
            new TreeNode(7),
            new TreeNode(2)
        ),
        null
    ),
    new TreeNode(
        8,
        new TreeNode(13),
        new TreeNode(
            4, null, new TreeNode(1)
        )
    )

);

//            5
//           / \
//          4   8
//         /   / \
//        11  13  4
//       /  \      \
//      7    2      1

l(hasPathSum(input, 22));