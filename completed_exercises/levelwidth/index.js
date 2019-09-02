// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;

/*
function process(node, i, m) {
  if (node.children.length === 0) return
  m[i + 1] = m[i + 1] || 0
  m[i + 1] += node.children.length
  node.children.forEach(c => process(c, i + 1, m))
}

function levelWidth(root) {
  const m = [1]
  process(root, 0, m)
  console.log(m)
}

module.exports = levelWidth;
*/
