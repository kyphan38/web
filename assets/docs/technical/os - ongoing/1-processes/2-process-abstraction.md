# process abstraction

## Process Abstraction

--

- When you run an executable file, the OS creates a process - a running program
- OS timeshares CPU across multiple processes, virtualizing the CPU
- OS has a CPU scheduler that picks one of the many active processes to execute on a CPU
- A CPU scheduler contains
  - Policy: Defines which process to run
  - Mechanism: Defines how to "context switch" between processes

## What Constitutes a Process?

![img](./img/2.png)

- A unique identifier (PID)
- Memory image
  - Code and data (static)
  - Stack and heap (dynamic)
    - Stack: Function calls, local variables, etc.
    - Heap: Dynamically allocated memory
- CPU context: Registers
  - Program counter
  - Current operands
  - Stack pointer
- File descriptors
  - Pointers to open files and devices

## How Does OS Create a Process?

![img](./img/3.png)

- Allocates memory and creates memory image
  - Loads code and data from disk executable
  - Creates runtime stack and heap
- Opens basic files - STDIN, STDOUT, STDERR
- Initializes CPU registers
  - PC points to first instruction

## States of a Process

States

- Running: Currently executing on CPU
- Ready: Waiting to be scheduled
- Blocked: Suspended, not ready to run
  - Why? Waiting for some event, e.g., process issues a read from disk
  - When is it unblocked? Disk issues an interrupt when data is ready
- New: Being created, yet to run
- Dead: Terminated

![img](./img/4.png)

- Ready &rarr; Running: The OS scheduler assigns the CPU to the process
- Running &rarr; Ready: The OS takes the CPU away (e.g., time limit reached)
- Running &rarr; Blocked: The process initiates a wait (e.g., starts I/O)
- Blocked &rarr; Ready: The awaited event finishes (e.g., I/O done), making the process runnable again (waiting for the CPU)

Example

![img](./img/5.png)

## OS Data Structures

--

- OS maintains a data structure (e.g., list) of all active processes
- Information about each process is stored in a process control block (PCB)
  - Process identifier
  - Process state
  - Pointers to other related processes (parent)
  - CPU context of the process (saved when the process is suspended)
  - Pointers to memory locations
  - Pointers to open files
