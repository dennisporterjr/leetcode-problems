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

    if(root === null) return false;

    if(root.left === null && root.right === null && root.val === sum) return true;
        
    if(root.left === null && root.right === null) {
        return root.val === sum;
    }

    // let's go...
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
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