# array

To do list

- Easy
  - 448 Find All Numbers Disappeared in an Array
  - 605 Can Place Flowers
  - 724 Find Pivot Index
- Medium
- 36 Valid Sudoku
- 238 Product of Array Except Self
- 122 Best Time to Buy and Sell Stock II

## Easy

### 27. Remove Element

[27. Remove Element](https://leetcode.com/problems/remove-element/description/)

Solution - Sorting

- Time complexity: O(n log n)
- Space complexity: O(1)

```python
class Solution:
  def removeElement(self, nums: List[int], val: int) -> int:
    INF = 100
    count = 0
    for i in range(len(nums)):
      if nums[i] == val:
        nums[i] = INF
      else:
        count +=1
    nums.sort()
    return count
```

Solution - Without sorting

- Time complexity: O(n)
- Space complexity: O(1)

```python
class Solution:
  def removeElement(self, nums: List[int], val: int) -> int:
    count = 0
    for i in range(len(nums)):
      if nums[i] != val:
        nums[count] = nums[i]
        count += 1
    return count
```

### 118. Pascal's Triangle

[118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)

My solution

- Time complexity: O(n^2)
- Space complexity: O(n^2)

```python
class Solution:
  def generate(self, numRows: int) -> List[List[int]]:
    triangle = []
    for row in range(1, numRows + 1):
      row_list = []
      for i in range(row):
        if i == 0 or i == row - 1:
          row_list.append(1)
        else:
          total = triangle[row - 2][i] + triangle[row - 2][i - 1]
          row_list.append(total)
        triangle.append(row_list)
    return triangle
```

My improved solution

- Time complexity: O(n^2)
- Space complexity: O(n^2)

```python
class Solution:
  def generate(self, numRows: int) -> List[List[int]]:
    triangle = []
    for row in range(numRows):
      row_list = [1] * (row + 1)
      for i in range(1, row):
        row_list[i] = triangle[row - 1][i] + triangle[row - 1][i - 1]
      triangle.append(row_list)
    return triangle
```

### 121. Best Time to Buy and Sell Stock

[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

Solution

- Time complexity: O(n)
- Space complexity: O(1)

```python
class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    minPrice = prices[0]
    maxProfit = 0
    for i in range(1, len(prices)):
      profit = prices[i] - minPrice
      maxProfit = max(maxProfit, profit)
      minPrice = min(minPrice, prices[i])
      return maxProfit
```

### 217. Contains Duplicate

[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

My solution

- Time complexity: O(n)
- Space complexity: O(n) - Hashmap

```python
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen_nums = {}
    flag = False
    for num in nums:
      if num not in seen_nums:
        seen_nums[num] = 1
      else:
        flag = True
    return flag
```

My improved solution

- Time complexity: O(n)
- Space complexity: O(n) - Hashmap

```python
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen_nums = {}
    for num in nums:
      if num in seen_nums:
        return True
      seen_nums[num] = 1
    return False
```

Solution - Sorting

- Time complexity: O(n log n)
- Space complexity: O(1)

```python
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    nums.sort()
    for i in range(1, len(nums)):
      if nums[i] == nums[i-1]:
        return True
    return False
```

Solution - Set

- Set only stores keys &rarr; Less memory
- Time complexity: O(n)
- Space complexity: O(n) - Set

```python
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen_nums = set()
    for num in nums:
      if num in seen_nums:
        return True
      seen_nums.add(num)
      return False
```

### 303. Range Sum Query - Immutable

[303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/)

My solution

- Correct but not efficient
- `sumRange` function is called multiple times
- For a large array (e.g., 10^4 elements) and many queries (e.g., 10^4 calls), it could take O(10^8) operations
- Time complexity: O(1) for `__init__`, O(n) for `sumRange`, O(k * n) total for k queries
- Space complexity: O(n)

```python
class NumArray:
  def __init__(self, nums: List[int]):
    self.nums = nums
  def sumRange(self, left: int, right: int) -> int:
    sum_value = 0
    for i in range(left, right + 1):
      sum_value += self.nums[i]
    return sum_value
```

Solution - Prefix

- Time complexity: O(n) for `__init__`, O(1) for `sumRange`, O(n + k) total for k queries
- Space complexity: O(n)

```python
class NumArray:
  def __init__(self, nums: List[int]):
    self.prefix_sum = [0] * (len(nums) + 1)
    for i in range(len(nums)):
      self.prefix_sum[i + 1] = self.prefix_sum[i] + nums[i]
  def sumRange(self, left: int, right: int) -> int:
    return self.prefix_sum[right + 1] - self.prefix_sum[left]
```

### 448. Find All Numbers Disappeared in an Array

[448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/)

Idea

- Negate the value for each existing number at its corresponding index
- A positive value at an index indicates that the number index is missing
- Time complexity: O(n)
- Space complexity: O(1)

```python
class Solution:
  def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
    for i in range(len(nums)):
      idx = abs(nums[i]) - 1 # Value is negative and needs to be positive to find the index
      nums[idx] = -abs(nums[idx]) # Value that needs to update is already negative - More than 2 repeated numbers
    res = []
    for i in range(len(nums)):
      if nums[i] > 0:
        res.append(i + 1)
    return res
```

## Medium

## Hard
