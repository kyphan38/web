# address translation mechanism

## A Simple Example

--

- Consider a simple C function
- It is compiled as follows
- Virtual address space is set up by OS during process creation

![img](./img/8.png)

## Address Translation

--

- Simplified OS: Places the entire memory image in one chunk
- The following translation from VA to PA is needed
  - 128 to 32896 (32KB + 128)
  - 1KB to 33 KB
  - 20KB? Error!

![img](./img/9.png)

## Who Performs Address Translation?

--

- In this simple example, OS tells the hardware the base (starting address) and bound (total size of process) values
- Memory hardware, the Memory Management Unit (MMU), calculates PA from VA
- MMU also checks if the address is beyond the bound
- OS is not involved in every translation

## Role of Hardware in Translation

--

- CPU provides a privileged mode of execution
- Instruction set has privileged instructions to set translation information (e.g., base, bound)
- Hardware (MMU) uses this information to perform translation on every memory access
- MMU generates faults and traps to the OS when access is illegal (e.g., VA is out of bounds)

## Role of OS in Translation

--

- OS maintains a free list of memory
- Allocates space to a process during creation (and when requested) and cleans up when done
- Maintains information on where space is allocated to each process (in PCB)
- Sets address translation information (e.g., base & bound) in hardware
- Updates this information upon context switch
- Handles traps due to illegal memory access

## Segmentation

--

- Generalized base and bounds
- Each segment of the memory image is placed separately
- Multiple (base, bound) values are stored in the MMU
- Good for sparse address spaces
- But variable-sized allocation leads to external fragmentation
  - Small holes in memory are left between segments

![img](./img/10.png)
