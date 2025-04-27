# Is main memory always enough?

Are all pages of all active processes always in main memory?
- Not necessary, especially with large address spaces

OS uses a part of disk (swap space) to store pages that are not in active use

# Page fault

Present bit in the page table entry indicates if a page of a process resides in memory or not

When translating VA to PA, the MMU reads the present bit

If the page is present in memory, it is directly accessed

If the page is not in memory, the MMU raises a trap to the OS—this is a page fault

# Page fault handling

A page fault traps the OS and moves the CPU to kernel mode

OS fetches the disk address of the page and issues a read to the disk

OS keeps track of the disk address (eg, in the page table)

OS context switches to another process while the current process is blocked

When the disk read completes, the OS updates the page table and marks the process as ready

When the process is scheduled again, the OS restarts the instruction that caused the page fault

# Summary: What happens on memory access

CPU issues a load to a VA for code or data:
- Checks the CPU cache first
- Goes to main memory in case of a cache miss

The MMU looks up the TLB for the VA:
- If TLB hit, the PA is obtained, and the memory location is fetched and returned to the CPU (via CPU caches)
- If TLB miss, the MMU accesses memory, walks the page table, and obtains the page table entry
  - If the present bit is set in the PTE, the memory is accessed
  - If the present bit is not set but valid, a page fault is raised, and the OS handles the fault, restarting the CPU load instruction
  - If the access is invalid, a trap is raised to the OS for illegal access

# More complications in a page fault

When servicing page fault, what if OS finds that there is no free page to swap in the faulting page?

OS must swap out an existing page (if it has been modified, ie, dirty) and then swap in the faulting page - too much work!

OS may proactively swap out pages to keep a list of free pages handy

The decision of which pages to swap out is made by the page replacement policy

# Page replacement policies

Optimal: Replace the page not needed for the longest time in the future (not practical!)

FIFO: Replace the page that was brought into memory earliest (may replace a popular page)

LRU/LFU: Replace the page that was least recently (or frequently) used in the past

# Example: Optimal policy

Example: 3 frames for 4 pages (0, 1, 2, 3)

The first few accesses are cold (compulsory) misses

# Example: FIFO

Usually worse than optimal

Belady’s anomaly: Performance may get worse when memory size increases!

# Example: LRU

Equivalent to optimal in this simple example

Works well due to locality of references

# How is LRU implemented?

OS is not involved in every memory access, so how does it know which page is LRU?
Hardware help and approximations are used:

MMU sets an "accessed" bit in the PTE when a page is accessed

OS periodically checks this bit to estimate which pages are active and inactive

To replace, the OS tries to find a page without the access bit set
- It may also look for a page without the dirty bit set to avoid swapping out to disk