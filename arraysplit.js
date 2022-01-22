const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// const part = nums.slice(2, 5);
const remove = nums.splice(2, 5, 7, 7, 7, 7, 7, 7)
// console.log(remove);
// console.log(nums);
const together = nums.join(" ami ");
console.log(together);