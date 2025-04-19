# processes

## Processes

What is an operating system?

- Middleware between programs and system hardware
- Manages hardware: CPU, main memory, IO devices (disk, network card, mouse, keyboard, etc.)

Key features when running a program

- A compiler translates high level programs into an executable (".c" - source code to "a.out" - on disk)
- The executable contains
  - Instructions that the CPU can understand
  - Data of the program (all numbered with addresses)
- Instructions run on CPU: Hardware implements an Instruction Set Architecture (ISA)
- CPU also consists of a few registers
  - Program Counter (PC): Points to the next instruction to be executed
  - Operands of instructions, memory addresses

What happens when you run a program? (background)

![img](./img/1.png)

- To run an executable, CPU will
  - Fetch instruction pointed at by PC from memory
  - Load data required by the instructions into registers
  - Decode and execute the instruction
  - Store result back to memory

Most recently used instructions and data are in CPU caches for faster access

What does the OS do?

- OS manages program memory
  - Loads program executable (code, data) from disk to memory
- OS manages CPU
  - Initializes program counter (PC) and other registers to begin execution
- OS manages external devices
  - Reads and writes files from disk

How OS manages CPU?

- OS provides the process abstraction
  - Process: a running program
  - OS creates and manages processes
- Each process has the illusion of having the complete CPU and OS virtualizes CPU
  - Ant any point of time, we have many processes such as listening to music, browsing the web
- Timeshares CPU between processes
- Enables coordination between processes

How OS manages memory?

- OS manages the memory of the process: code, data, stack, heap, etc.
- Each process thinks it has a dedicated memory space for itself, numbers code and data starting from 0 (virtual addresses)
- OS abstracts out the details of the actual placement in memory, translates from virtual addresses to actual physical addresses, and returns back to the process
  - Each process is not aware of how memory is implemented

How OS manages devices?

- Device drivers: OS has code to manage disk, network card, and other external devices
- Device driver talks the language of the hardware devices
  - Issues instructions to devices (fetch data from a file)
  - Responds to interrupt events from devices (user has pressed a key on keyboard)
- Persistent data organized as a filesystem on disk

Design goals of an operating system

- Convenience
- Abstraction of detailed hardware resources for user programs
- Efficiency of using CPU, memory, etc.
- Isolation between multiple processes

History of operating systems

- Started out as a library to provide common functionality across programs to
  - Abstract out the hardware that can be used across different programs
  - Access devices
- Later, evolved from procedure call to system call
- When a system call is made to run OS code, the CPU executes at a higher privilege level
- Evolved from running a single program to multiple processes concurrently
