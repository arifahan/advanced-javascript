const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element > 6){
        break;
    }
    console.log(element);
}