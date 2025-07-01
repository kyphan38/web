# array

## Static vs. dynamic arrays

--

- Static: fixed size
  - Examples: C++ (`int[]`), Java (`double[]`)
- Dynamic: resizable (can add/remove elements)
  - Examples: C++ (`std::vector`), Java (`ArrayList`), Python (`list`)

### How dynamic arrays work

--

- Initial allocation
  - Created on the heap (unlike static arrays on the stack)
  - Memory block size is based on an initial capacity (user-defined or default)
- Capacity vs. size
  - Size: number of elements currently stored
  - Capacity: total memory reserved (typically exceeds size for growth)
- Growth mechanism
  - When size exceeds capacity
    - Allocate a larger memory block (often 2x the previous capacity)
    - Copy existing elements to the new block
    - Deallocate the old block
    - Update pointers to the new block
  - Resizing is O(n) but amortized to O(1) over many insertions
- Memory management
  - Handled by the language/library (e.g., `std::vector` in C++)
  - Manual in low-level languages like C (using `malloc`/`realloc`)
- Access
  - Elements are contiguous in memory, enabling O(1) index-based access

## Complexity

--

- Random access: O(1)
- Add/remove at end (dynamic only): O(1) amortized
- Add/remove at arbitrary positions: O(n) - shifting
