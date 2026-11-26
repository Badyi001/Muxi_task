/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answer = [];
    for (i = 0; i < nums.length; i++) {
        answer[i] = 1;
        for (j = 0; j < nums.length; j++) {
            if (i != j) {
                answer[i] *= nums[j];
            }
        }

    }
    return answer;

}