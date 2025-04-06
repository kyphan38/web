# easy

## 121. Best Time to Buy and Sell Stock

[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

My solution - Not optimal

```python
class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    minPrice = 100
    maxPrice = 0
    minIndex = maxIndex = 0

    for i in range(len(prices)):
      if prices[i] < minPrice:
        minPrice = prices[i]
        minIndex = i
      elif prices[i] > maxPrice:
        maxPrice = prices[i]
        maxIndex = i
    if minIndex < maxIndex:
      return prices[maxIndex] - prices[minIndex]
    return 0
```

Another solution

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

Another improved solution

```python
class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    minPrice = prices[0]
    maxProfit = 0
    
    for i in range(1, len(prices)):
      
      maxProfit = max(maxProfit, profit)
      return maxProfit
```

## 217. Contains Duplicate

[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

My solution

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

Another solution - Sorting

```python
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    nums.sort()
    for i in range(1, len(nums)):
      if nums[i] == nums[i-1]:
        return True
    return False
```

Another solution - Set

- Set only stores keys &rarr; Less memory

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
