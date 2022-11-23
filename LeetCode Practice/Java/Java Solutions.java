/* Java solutions
Problems from LeetCode
*/

/*
Running Sum of 1d Array
date: 11/16/22
*/

class Solution {
    public int[] runningSum(int[] nums) {
        int simpleReturn[] = nums;
        if (nums.length == 1)    
            return nums;
        
        for (int i = 0; i < nums.length; ++i){
            if (i == 0){
                simpleReturn[i] = nums[i]; 
            }
            else {
                simpleReturn[i] = nums[i-1] + simpleReturn[i];
            }
        }
        return simpleReturn;
        }
    }
	
/*
Richest Customer Wealth
date: 11/17/22
*/

class Solution {
    public int maximumWealth(int[][] accounts) {
        int[] returnWealth = new int[accounts.length + 1];
        int insertSum = 0;
        int inter = 0;
        for (int[] i : accounts){
            for (int j : i){
                insertSum += j;
            }
            returnWealth[inter] = insertSum;
            insertSum = 0;
            inter++;
        }
        Arrays.sort(returnWealth);
        return returnWealth[returnWealth.length - 1];
    }
}

/*
Number of Steps to Reduce a Number to Zero
date 11/18/22
*/
class Solution {
    public int numberOfSteps(int num) {
        int stepCount = 0;
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
    }
}

/*
FizzBuzz
date: 11/18/22
*/
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> retStr = new ArrayList<String>();
        if (n == 1){
            retStr.add(Integer.toString(n));
            return retStr;
        }
        int iter = 1;
        while (iter <= n){
            if ((iter % 3) == 0 && (iter % 5) == 0)
                retStr.add("FizzBuzz");
            else if ((iter % 5) == 0)
                 retStr.add("Buzz");
            else if ((iter % 3) == 0)
                retStr.add("Fizz");
            else
                retStr.add(Integer.toString(iter));
            ++iter;
        }
        return retStr;
    }
}

/*
Middle of the Linked List
11/21/22
*/
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode cursor = head;
        ArrayList<ListNode> cursorStore = new ArrayList<ListNode>();
        int iter = 0;
        for(cursor = head; cursor != null; cursor = cursor.next){
            cursorStore.add(cursor);
            ++iter;
        }
        iter /= 2;        
        return cursor = cursorStore.get(iter);
    }
}

/*
Max Consecutive Ones
11/21/22
*/
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        List<Integer> retStr = new ArrayList<Integer>();
        int counter = 0;
        for (int j : nums){
            if (j == 0)
                counter = 0;
            else if (j == 1){
                retStr.add(counter);
                ++counter;
            }
            retStr.add(counter);
        }
        return Collections.max(retStr);
    }
}