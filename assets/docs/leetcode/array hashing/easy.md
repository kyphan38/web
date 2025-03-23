# easy

## 217. Contains Duplicate

[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

```python
# My solution
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

# My improved solution
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen_nums = {}
    for num in nums:
      if num in seen_nums:
        return True
      seen_nums[num] = 1
    return False

# Another solution 1 - Sorting
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    nums.sort()
    for i in range(1, len(nums)):
      if nums[i] == nums[i-1]:
        return True
    return False

# Another solution 2 - Set
# Set only stores keys => less memory
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen_nums = set()
    for num in nums:
      if num in seen_nums:
        return True 
      seen_nums.add(num)
      return False
```
