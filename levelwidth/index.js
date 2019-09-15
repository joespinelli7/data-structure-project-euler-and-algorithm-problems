// Given the root node of a tree, return an array where each element is the width of the tree at each level.
// Returns number of nodes in each level of tree.
// Example:
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // create array w/ starting element of root value inside it.
  const arr = [root, 's'];
  // counters array to hold # of nodes in each level of tree.
  const countersArr = [0];

  // check length > 1 b/c if its equal to 1 that means only s is in the array and we've reached final level of tree.
  while (arr.length > 1) {
    // pulls 1st element of array
    const node = arr.shift();

    // IF node = 's' (our stopper) then push new counter into counter array of 0 b/c we've reached
    // final element in a level of the tree. Then push 's' back to end of array.
    if (node === 's') {
      countersArr.push(0);
      arr.push('s');
    } else {
      // ELSE if we are working w/ an actual node, push all its children into end of array.
      // and increment the last element in countersArr to keep track of how many nodes are on that level.
      // remember, last element in countersArr represents current level of our tree we are working on.
      arr.push(...node.children);
      countersArr[countersArr.length - 1]++;
    }
  }

  return countersArr;
}
