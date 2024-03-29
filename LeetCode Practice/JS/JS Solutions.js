/*
* JS, won't often provide a JS solution 
* as its not a priority to learn.
*/

/*
Number of Steps to Reduce a Number to Zero
date 11/18/22
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
        var stepCount = 0;
        while (num != 0){
            if ((num % 2 ) == 0){
                num /= 2;
                ++stepCount;
            }
            else{
                --num;
                ++stepCount;
            }
        }
        return stepCount;
};

/*
* alerternative, version, 
* uses the recommended comparison tools, in the while loop.
*/
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
        var stepCount = 0;
        while (num !== 0){
            if ((num % 2 ) === 0){
                num /= 2;
                ++stepCount;
            }
            else{
                --num;
                ++stepCount;
            }
        }
        return stepCount;
};

/*
12/1/2022
Remove Element
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    var i = 0;
    var j = i;
    for(;j < nums.length; ++j){
        if (nums[j] != val)
        {
            nums[i] = nums[j];
            ++i;
        }
    }
    return i;
};

/*
 * 12/02/2022
 * remove duplicates
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.size == 0)
            return 0;
    if (nums[nums.length - 1]  == nums[0])
        return 1;
    var i = 0;
        for(var j = 1; j < nums.length; ++j){
            if(nums[j] == nums[j-1])
                ++i;
            else
                nums[j-i] = nums[j];
         }
        return nums.length - i;
};

/*
12/06/2022
Check If N and Its Double Exist
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    var i = 0;
    var j = i;
    for(; i < arr.length; ++i){
        for(; j < arr.length; ++j){
            if (i != j & arr[i] * 2 == arr[j])
                return true;
        }
        j = 0;
    }                    
    return false;
};

/*
12/28/22
Valid Mountain Array
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    var size = arr.length, i = 0, j = size - 1;
    while(i + 1 < size && arr[i] < arr[i+1]) ++i;
    while(j > 0 && arr[j-1] > arr[j]) --j;
    return i > 0 && i == j && j < size - 1;
};

/*
Replace elements with greatest element on right side
12/29/22
*/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length <= 1){
        arr[0] = -1;
        return arr;
        }
    var actual, max = -1;
    for(var i =  arr.length - 1; i >= 0; --i){
        actual = arr[i];
        arr[i] = max;
        max = Math.max(actual, max)
    }
    return arr;
};


/*
Move Zeros
01/06/23
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var foot = 0;
    var temp = 0;
    for(var head = 0; head <= nums.length-1; ++head){
        if(nums[head] != 0){
            temp = nums[head];
            nums[head] = nums[foot];
            nums[foot] = temp;
            ++foot;
        }
    }
};


/**
 * @param {number} number
 * @return {boolean}
 */
var isEvenOdd = function(numbers){
    if((numbers % 2) == 0){
        return true;
    }
    else{
        return false;
    }
};

/**
 * @param {number} number
 * @return {boolean}
 */
var isPositive = function(number){
    return number >= 0;
};


 /**
 * @param {number} numsber
 * @return {bool}
 */
 var isPositive = function(number){
    return (number % 2) == 0;
}

/*
1/10/2023
Sort By Parity
*/
/**
* @param {number[]} nums
* @return {number[]}
*/
var sortArrayByParity = function(nums) {
   var fast = 0;
   for(var slow = 0; slow <= nums.length - 1; ++slow){
       if (isPositive(nums[slow])){
           nums[slow] = (nums[slow] + nums[fast]) - (nums[fast] = nums[slow]);
           ++fast;
       }
   }
   return nums;
};

/*
 * Dr. Adams' class
 * 
*/
for(var l = 0; l < longArray.length - 1; ++l)
{
    console.log(longArray[l]);
}