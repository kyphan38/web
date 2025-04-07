# array

To do list

- Easy
  - 303 Range Sum Query - Immutable
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

- Time Complexity: O(n log n)
- Space Complexity: O(1)

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

- Time Complexity: O(n)
- Space Complexity: O(1)

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

- Time Complexity: O(n^2)
- Space Complexity: O(n^2)

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

- Time Complexity: O(n^2)
- Space Complexity: O(n^2)

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

- Time Complexity: O(n)
- Space Complexity: O(1)

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

- Time Complexity: O(n)
- Space Complexity: O(n) - Hashmap

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

- Time Complexity: O(n)
- Space Complexity: O(n) - Hashmap

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

- Time Complexity: O(n log n)
- Space Complexity: O(1)

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
- Time Complexity: O(n)
- Space Complexity: O(n) - Set

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

## Medium

## Hard
