# binary search

## Binary Search

- Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half
- The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N)
- Conditions for when to apply Binary Search
  - The data structure must be sorted
  - Access to any element of the data structure takes constant time (array, string, list,....)
    - It's complicated/impossible to apply on linked list, queue, stack

Algorithm

- Divide the search space into two halves by finding the middle index "mid"
- Compare value of the element in the middle with the key. There are 3 cases
  - `a[mid] = key` &rarr; the key is found
  - `a[mid] > key` &rarr; high = mid - 1
  - `a[mid] < key` &rarr; low = mid + 1
- Until low > high

Complexity

- Time
  - Best case: O(1) when the key is in the middle
  - Worst case: O(logn) key is not in the array, the algo terminates when high > low

```python
def binarySearch(arr, low, high, x):
  while low <= high:
    mid = low + (high - low) // 2
    if arr[mid] == x:
      return mid
    elif arr[mid] < x:
      low = mid + 1
    else:
      high = mid - 1
  return -1    
```

### Applications

- Find x in the array
- Find the smallest number which is larger than x in the array
- Find the largest number which is smaller than x in the array

Problem 1: Find the smallest number which is larger than x in the array. Return the index of that number

- Input : 2 3 3 5 5 5 6 6
- Example 1
  - Input: x= 4
  - Output: 3
- Example 2
  - Input: x = 7
  - Output: -1

```python
# It returns location of x in given array arr
def binarySearch(arr, low, high, x):
  res = -1
  while low <= high:
    # If x is greater, ignore left half
    if arr[mid] <= x:
      low = mid + 1
    # If x is smaller, ignore right half
    else:
      res = mid
      high = mid - 1
  return res
```
