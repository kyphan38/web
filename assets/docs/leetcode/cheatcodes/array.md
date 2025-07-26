# array

## Easy

| Number | Note | Times |
|--------|------|-------|
| [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/) | check case related to 0 and smaller 10, find reverted_number - multiply 10 and 10 and 10 ... but need to compare only half (for odd or even, handle the return) | |
| [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) | starting from k=1 and check curr nums[i] with previous nums[k] | |
| [27. Remove Element](https://leetcode.com/problems/remove-element/description/) | nums[count] and nums[i] | |
| [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/) | 2 loops, 2nd for's index starts from 1 | |
| [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) | minPrice and maxProfit, find the profit for each | |
| [169. Majority Element](https://leetcode.com/problems/majority-element/description/) | count and balance the appearance to at least 0, change to new number once they're back | |
| [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/) | sorting, check i-1 vs i or using set | 1 |
| [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/) | hasmap with get, how to check character in s has the same frequency to t (different order) | |
| [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/) | prefix | |
| [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/) | 2 loops, 1 mark the index of existing ones to be negative, 2 check negative or positive, consider using abs carefully | 1 |
| [605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/) | top solution, count consecutive empty (you know, we need 3 5 7) and check the empty is larger than 0, check the edge case (probably first and last element) | |
| [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/description/) | find sum_left and sum_right | |

## Medium

| Number | Note |
|--------|------|
| [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/) | two pointer, left right, check min height, find max space, increase or decrease when which one is smaller |
| [15. 3Sum](https://leetcode.com/problems/3sum/description/) | sort, fix each + 2 pointer, check two consecutive in fix and check two consecutive in pointer (yes, increase left) |
| [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/) | |
| [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/) | |
| [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/) | |
| [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/) | |
| [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/) | |
| [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/) | |
| [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/) | |
| [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/) | |
| [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/) | |
