/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let tmp;
    i = nums.length;
    for (p = 0; p < k; p++) {
        tmp = nums[i - 1];
        for (j = nums.length; j > 0; j--) {
            nums[j - 1] = nums[j - 2]
        }
        nums[0] = tmp;
    }
    return nums;
};