# memory allocation and free space management algo

## Variable Sized Allocation

--

- Given a block of memory, how do we allocate it to satisfy various memory allocation requests?
- This problem must be solved in the C library
  - Allocates one or more pages from the kernel via brk/sbrk or mmap system calls
  - Gives out smaller chunks to user programs via malloc
- This problem also occurs in the kernel
  - The kernel must allocate memory for its internal data structures

## Variable Sized Allocation: Headers

--

- Consider a simple implementation of malloc
- Every allocated chunk has a header with information like the size of the chunk
  - Why store size? We should know how much to free when free() is called

## Free List

Free space is managed as a list
- A pointer to the next free chunk is embedded within the free chunk

The library tracks the head of the list
- Allocations happen from the head

## External Fragmentation

Suppose 3 allocations of size 100 bytes each occur. Then, the middle chunk pointed to by sptr is freed

The free list now has two non-contiguous elements

Free space may be scattered around due to fragmentation
- Cannot satisfy a request for 3800 bytes, even though the space is available

## Splitting and Coalescing

Suppose all three chunks are freed

The list now has several free chunks that are adjacent

A smart algorithm would merge them into a bigger free chunk

Must split and coalesce free chunks to satisfy variable-sized requests

## Buddy Allocation for Easy Coalescing

Allocate memory in sizes that are powers of 2
- For example, for a request of 7000 bytes, allocate an 8 KB chunk

Why? Two adjacent power-of-2 chunks can be merged to form a bigger power-of-2 chunk
- For example, if an 8KB block and its "buddy" are free, they can form a 16KB chunk

## Variable Size Allocation Strategies

First fit: Allocate the first free chunk that is sufficient

Best fit: Allocate the free chunk that is closest in size

Worst fit: Allocate the free chunk that is farthest in size

Example: Consider a free list and malloc(15)

Best fit would allocate the 20-byte chunk

Worst fit would allocate the 30-byte chunk (remaining chunk is bigger and more usable)

## Fixed Size Allocations

Memory allocation algorithms are much simpler with fixed-size allocations

Page-sized fixed allocations in the kernel:
- Has a free list of pages
- A pointer to the next page is stored in the free page itself

For some smaller allocations (eg, PCB), the kernel uses a slab allocator
- Object caches for each type (size) of objects
- Within each cache, only fixed-size allocation
- Each cache is made up of one or more "slabs"

Fixed-size memory allocators can be used in user programs too (instead of generic malloc)
