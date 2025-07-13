# array

## Easy

| Number | Note |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [1. Two Sum](https://leetcode.com/problems/two-sum/description/) | optimize if else (in or not in?), subtraction |
| [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/) | check case related to 0 and smaller 10, find reverted_number - multiply 10 and 10 and 10 ... but need to compare only half (for odd or even, handle the return) |
| [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/) | range n-1 and find the last one manually, check the curr and next by comparing but manipulate the curr only |
| [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) | starting from k=1 and check curr nums[i] with previous nums[k] |
| [27. Remove Element](https://leetcode.com/problems/remove-element/description/) | nums[count] and nums[i] |
| [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/) | 2 loops, 2nd for's index starts from 1 |
| [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) | minPrice and maxProfit, find the profit for each |
| [169. Majority Element](https://leetcode.com/problems/majority-element/description/) | count and balance the appearance to at least 0, change to new number once they're back |
| [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/) | sorting, check i-1 vs i or using set |
| [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/) | hasmap with get, how to check character in s has the same frequency to t (different order) |
| [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/) | prefix |
| [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/) | negate value for existing number, positive value is the missing one |
| [605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/) | top solution, count consecutive empty (you know, we need 3 5 7) and check the empty is larger than 0, check the edge case (probably first and last element) |
| [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/description/) | find sum_left and sum_right |

## Medium

| Number | Note |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [2. (linked - list) Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/) | |
| [11. (two pointer) Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/) | two pointer, left right, check min height, find max space, increase or decrease when which one is smaller |
| [15. 3Sum](https://leetcode.com/problems/3sum/description/) | sort, fix each + 2 pointer, check two consecutive in fix and check two consecutive in pointer (yes, increase left) |
| [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/) | |
| [39. Combination Sum](https://leetcode.com/problems/combination-sum/description/) | |
| [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/) | |
| [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/) | |
| [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/) | |
| [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/) | |
| [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/) | |
| [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/) | |
| [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/) | |
| [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/) | |
| [271. Encode and Decode Strings](https://neetcode.io/problems/string-encode-and-decode) | |
| [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/) | |
