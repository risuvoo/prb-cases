/* 
Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

===================================================

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

===================================================

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

*/
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const seen = new Set();
let hasDuplicate = false;

for (const num of nums) {
  if (seen.has(num)) {
    hasDuplicate = true;
    break;
  }
  seen.add(num);
}

console.log("Has duplicate?", hasDuplicate); // true
console.log(seen);
