# processes

## Introduction

### What Is an Operating System?

What is an operating system?

- Middleware between programs and system hardware
- Manages hardware, including the CPU, memory, and I/O devices

When a program runs

- A compiler translates high-level programs into an executable (e.g., ".c" source code to "a.out" on disk)
- The executable contains
  - Instructions that the CPU can understand
  - Program data (all numbered with addresses)
- Instructions run on the CPU, which implements an Instruction Set Architecture (ISA)
- The CPU includes several registers
  - Program Counter (PC): Points to the next instruction to be executed
  - Registers for operands, memory addresses, and temporary data

### What Happens When You Run a Program?

![img](./img/1.png)

- To run an executable, the CPU
  - Fetches the instruction pointed by the PC from memory
  - Increments the PC to point to the next instruction
  - Loads data required into registers
  - Decodes and executes the instruction
  - Stores results back to memory, if needed
- Most recently used instructions and data are stored in CPU caches for faster access

### What Does the OS Do?

--

- Manages program memory
  - Loads the program executable (code, data) from disk to memory
- Manages the CPU
  - Initializes the Program Counter (PC) and other registers to begin execution
- Manages external devices
  - Handles reading from and writing files to the disk

### How Does the OS Manage the CPU?

--

- Provides the process abstraction
  - A process is a running program
  - The OS creates and manages processes
- Gives each process the illusion of having exclusive access to the CPU by virtualizing the CPU
  - Multiple processes (e.g., listening to music, browsing the web) run concurrently
- Timeshares the CPU between processes
- Enables coordination between processes

### How Does the OS Manage Memory?

--

- Manages the memory of a process, including code, data, stack, heap, etc.
  - Each process believes it has a dedicated memory space, with code and data numbered starting from 0 (virtual addresses)
- Abstracts the details of actual memory placement, translating virtual addresses to physical addresses
  - Processes are unaware of how memory is implemented

### How Does the OS Manage Devices?

--

- Uses device drivers to manage hardware such as disks, network cards, and other external devices
- Device drivers communicate in the language of the hardware
  - Issue instructions to devices (e.g., fetch data from a file)
  - Respond to interrupt events from devices (e.g., a keypress on the keyboard)
- Organizes persistent data as a filesystem on disk

### Goals of the OS

--

- Abstracts detailed hardware resources for user programs
- Optimizes the use of the CPU, memory, and other resources
- Ensures separation between multiple processes

### History of the OS

--

- Began as a library to provide common functionality across programs to
  - Abstract the hardware that can be used across different programs
  - Access the devices
- Evolved from procedure calls to system calls
- When a system call is made, the CPU executes OS code at a higher privilege level
- Progressed from running a single program to managing multiple processes concurrently

<!-- ## Process Abstraction

### What Is Process Abstraction?

--

- When you run an executable file, the OS creates a process which is a running program
- The OS timeshares the CPU across multiple processes, virtualizing the CPU
- The OS has a CPU scheduler that picks one of the many active processes to execute on a CPU
- A CPU scheduler contains
  - Policy: Defines which process to run
  - Mechanism: Defines how to "context switch" between processes

### What Constitutes a Process?

![img](./img/2.png)

- A unique identifier (`PID`)
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

### How Does the OS Create a Process?

![img](./img/3.png)

- Allocates memory and creates a memory image
  - Loads code and data from the disk executable
  - Creates a runtime stack and heap
- Opens basic files - `STDIN`, `STDOUT`, `STDERR`
- Initializes CPU registers
  - PC points to the first instruction

### States of a Process

States

- Running: Currently executing on the CPU
- Ready: Waiting to be scheduled
- Blocked: Suspended, not ready to run
  - Why? Waiting for some event, e.g., the process issues a read from disk
  - When is it unblocked? The disk issues an interrupt when data is ready
- New: Being created, yet to run
- Dead: Terminated

![img](./img/4.png)

- Ready &rarr; Running: The OS scheduler assigns the CPU to the process
- Running &rarr; Ready: The OS takes the CPU away (e.g., time limit reached)
- Running &rarr; Blocked: The process initiates a wait (e.g., starts I/O)
- Blocked &rarr; Ready: The awaited event finishes (e.g., I/O done), making the process runnable again (waiting for the CPU)

Example

![img](./img/5.png)

### OS Data Structures

--

- The OS maintains a data structure (e.g., a list) of all active processes
- Information about each process is stored in a process control block (`PCB`)
  - Process identifier
  - Process state
  - Pointers to other related processes (parent)
  - CPU context of the process (saved when the process is suspended)
  - Pointers to memory locations
  - Pointers to open files

## System Calls for Process Management

### What API Does the OS Provide to User Programs?

--

- `API` = Application Programming Interface
  - Functions available to write user programs
- The `API` provided by the OS is a set of "system calls."
  - A system call is a function call into OS code that runs at a higher privilege level of the CPU
  - Access to sensitive operations (e.g., access to hardware) is allowed only at a higher privilege level
  - Some "blocking" system calls cause the process to be blocked and descheduled (e.g., read from disk)

### Should We Rewrite Programs for Each OS?

--

- `POSIX` (Portable Operating System Interface) `API`: A standard set of system calls that an OS must implement
  - Programs written to the `POSIX API` can run on any `POSIX`-compliant OS
  - Most modern OSes are `POSIX`-compliant
  - Ensures program portability
- Programming language libraries hide the details of invoking/canceling system calls
  - The `printf` function in the C library calls the `write` system call to write to the screen
  - User programs usually do not need to worry about invoking system calls

### System Call Processes in Unix

System calls

- `fork()` creates a new child process
  - All processes are created by forking from a parent
  - The `init` process is the ancestor of all processes
- `exec()` makes a process execute a given executable
- `exit()` terminates a process
- `wait()` causes a parent to block until the child terminates or waits for a process to finish

Many variants exist of the above system calls with different arguments

### What Happens During a `Fork()`?

![img](./img/6.png)

- A new process is created by making a copy of the parent's memory image
- The new process is added to the OS process list and scheduled
- The parent and child start execution just after `fork()` (with different return values)
- The parent and child execute and modify memory data independently

![img](./img/7.png)

- In the child process, `fork()` returns 0
- In the parent process, `fork()` returns the `PID` of the newly created child process

### Waiting for a Child Process to Terminate

--

- Process termination scenarios
  - Normal: By calling `exit()` (`exit` is called automatically when the end of the `main` function is reached)
  - Abnormal: The OS terminates a misbehaving process
- A terminated process exists as a zombie - it still consumes memory
- When a parent calls `wait()`, the zombie child is cleaned up or reaped
- What if the parent terminates before the child?
  - The `init` process adopts orphans and reaps them

![img](./img/8.png)

### What Happens During `Exec()`?

--

- After `fork()`, the parent and child are running the same code
  - Not too useful
- A process can run `exec()` to load another executable into its memory image
- A child can run a different program from the parent
  - Replaces the memory image of the current process (code, data, heap, and stack) with the new program
- Variants of `exec()`, e.g., to pass command-line arguments to the new executable

![img](./img/9.png)

### How Does a Shell Work?

--

- In a basic OS, the `init` process is created after the initialization of hardware (on modern systems, `systemd` or `init` with `PID` 1)
- The `init` process spawns a shell (like `bash`, `zsh`, or `sh`)
- The shell reads a user command, forks a child, `execs` the command executable, waits for it to finish, and then reads the next command
- Common commands like `ls` are all executables that are simply `exec`'ed by the shell

Example with general steps

- The shell reads the command `ls`
- The shell parses the command and locates the `ls`
- executable in `$PATH` (e.g., `/bin/ls`)
- The shell forks a child process
- The child process calls `execve("/bin/ls", ["ls"], [env])`
- The parent shell calls `waitpid()` and pauses
- The child process writes the result to its standard output
- The child process finishes execution and terminates
- The parent shell resumes after `waitpid()` returns and updates the `$?` status variable
- The parent shell displays the prompt (`$`), ready for the next command

### More Funky Things About the Shell

--

- The shell can manipulate the child in strange ways
- Suppose you want to redirect output from a command to a file
- `prompt>ls > foo.txt`
- The shell spawns a child, redirects its standard output to a file using `open()`, then calls `exec` on the child

![img](./img/10.png)

## Process Execution Mechanism

### Process Execution

--

- The OS allocates memory and creates a memory image
  - Code and data (from the executable)
  - Stack and heap
- Points the CPU program counter to the next instruction
  - Other registers may store operands, return values, etc.
- After setup, the OS is out of the way - completed, and the process executes directly on the CPU
- The OS is not involved in every single instruction execution

### How Does a Simple Function Call Work?

Things to recall

- The Program Counter (PC) holds the memory address of the next instruction to be executed by the CPU
- The Stack Pointer (`SP`) points to the current top of the stack in memory
- The Base Pointer (`BP`) / Frame Pointer (`FP`) points to a fixed location within the current stack frame, making access to function arguments, local variables, and other stack frame data easier
- The stack manages function calls and stores temporary data like local variables and return addresses

How a simple function call works in a sequential flow

- When calling
  - A function call (e.g., `myFunction()`) translates to a specific CPU instruction - `CALL`
  - The `CALL` instruction performs two primary, sequential actions
    - It pushes the return address onto the stack - the address in the calling function where execution resumes after the called function finishes
    - The PC points to the next instruction (memory address) where the function's code begins
- Inside the called function
  - Once execution begins inside the called function, a new stack frame is created on the stack
  - The `SP` points to the top of the stack

![img](./img/11.png)

### How Is a System Call Different?

--

- CPU hardware has multiple privilege levels
  - One to run user code: User mode
  - One to run OS code like system calls: Kernel mode
  - Some instructions execute only in kernel mode
- The kernel does not trust or use the user stack
  - Uses a separate kernel stack when in kernel mode
  - User stack: Each user process has its own stack in user space
  - Kernel stack: When a system call is made, the CPU switches to a separate kernel stack that belongs to the calling process but exists in kernel space
- The kernel does not trust user-provided addresses to jump to
  - The kernel sets up the Interrupt Descriptor Table (`IDT`) at boot time
  - The `IDT` has addresses of kernel functions to run for system calls and other events

### Trap Instruction

Trap instruction execution steps

- When a system call must be made, a special `trap` instruction is run (usually hidden from the user by `libc`)
- `Trap` instruction execution
  - Moves the CPU to a higher privilege level
  - Switches to the kernel stack
  - Saves context (old PC, registers) on the kernel stack
  - Looks up the address in the `IDT` and jumps to the trap handler function in OS code

![img](./img/12.png)

Triggers for `trap` instructions and `IDT` lookup

- The `trap` instruction is executed on hardware in the following cases
  - System call (program needs OS service)
  - Program fault (program does something illegal, e.g., accesses memory it doesn't have access to)
  - Interrupt (external device needs the attention of the OS, e.g., a network packet has arrived on the network card)
- Across all cases, the mechanism is: Save context on the kernel stack and switch to the OS address in the `IDT`
- The `IDT` has many entries/functions; which to use?
  - System calls/interrupts store a number in a CPU register before calling `trap`, to identify which `IDT` entry to use

Return from `trap` and exit kernel mode

- When the OS is done handling a syscall or interrupt, it calls a special instruction - `return-from-trap`
  - Restores the context of CPU registers from the kernel stack
  - Changes CPU privilege from kernel mode to user mode
  - Restores the PC and jumps to user code after the `trap`
- The user process is unaware that it was suspended and resumes execution as normal
- Will you always return to the same user process from kernel mode? No
- Before returning to user mode, the OS checks whether it should continue running the same process or switch to another process

### Why Switch Between Processes?

--

- Sometimes when the OS is in kernel mode, it cannot return to the same process it left
  - The process has exited or must be terminated (e.g., segfault)
  - The process has made a blocking system call (e.g., reading data from disk, waiting for network input, waiting for a timer)
    - The process transfers control to the kernel to handle the request
    - The kernel starts the operation
    - The kernel blocks the process while operating &rarr; the process is in a waiting or blocked state &rarr; the process cannot use the CPU
    - A context switch is performed by the OS to select another process from the "ready" queue to run on the CPU
    - After finishing the operation, the kernel updates the process state from "blocked" to "ready."
- Sometimes, the OS does not want to return to the same process
  - The process has run for too long
  - It must timeshare the CPU with other processes
- In such cases, the OS performs a context switch to switch from one process to another

### The OS Scheduler

--

- The OS scheduler has two parts
  - A policy to pick which process to run
  - A mechanism to switch to that process
- Non-preemptive (cooperative) schedulers are polite
  - Switch only if the process cannot run - blocked or terminated
- Preemptive (non-cooperative) schedulers can switch even when the process is ready to continue
  - The CPU generates a periodic timer interrupt
  - After servicing the interrupt, the OS checks if the current process has run for too long

### Mechanism of Context Switch

Example: Process A has moved from user to kernel mode; the OS decides it must switch from A to B

- Save the context (PC, registers, kernel stack pointer) of A on its kernel stack
- Switch the `SP` to the kernel stack of B
- Restore context from B's kernel stack
  - Who has saved registers on B's kernel stack?
    - The OS did, when it switched out B in the past
- Now, the CPU is running B in kernel mode; `return-from-trap` to switch to user mode of B

### A Subtlety on Saving Context

--

- Context (PC and other CPU registers) is saved on the kernel stack in two different scenarios
- When going from user mode to kernel mode, user context (e.g., which instruction of user code you stopped at) is saved on the kernel stack by the `trap` instruction
  - Restored by `return-from-trap`
- During a context switch, the kernel context (e.g., where you stopped in the OS code) of process A is saved on the kernel stack of A by the context switching code
  - Restores the kernel context of process B

## Scheduling Policies

### What Is a Scheduling Policy?

--

- On a context switch, which process to run next, from the set of ready processes?
- The OS scheduler schedules the CPU requests (bursts) of processes
  - CPU burst = the CPU time used by a process in a continuous stretch
  - If a process comes back after an I/O wait, it counts as a fresh CPU burst

### What Are We Trying to Optimize?

--

- Maximize utilization (= fraction of time the CPU is used)
- Minimize average turnaround time (= time from a process's arrival to completion)
- Minimize average response time (= time from a process's arrival to first scheduling)
- Fairness: All processes must be treated equally
- Minimize overhead: Run a process long enough to amortize (reduce) the cost of a context switch (~1 microsecond)

### First-in-First-Out (`FIFO`)

`FIFO` runs processes in arrival order (e.g., A, B, C at t=0) without preemption until completion

- Pros
  - Simple to implement
  - Fair by arrival order
- Cons
  - The convoy effect delays short jobs
  - High turnaround times (especially for processes arriving later or shorter jobs stuck behind longer ones)

![img](./img/13.png)

### Shortest Job First (`SJF`)

`SJF` runs the shortest job first, non-preemptively; it is optimal when jobs arrive together

- Pros
  - Minimizes wait time for simultaneous arrivals
  - Efficient for varied job lengths
- Cons
  - Short jobs wait if a long job starts
  - Needs accurate job length estimates

![img](./img/14.png)

### Shortest Time-to-Completion First (`STCF`)

`STCF` (or `SRTF`) preempts for the job with the shortest remaining time on new arrivals

- Pros
  - Lowers wait time dynamically
  - Prioritizes near-complete jobs
- Cons
  - High context switch overhead
  - Needs remaining time estimates

![img](./img/15.png)

### Round Robin (`RR`)

`RR` gives each process a fixed time slice, preempting and cycling through a queue

- Pros
  - Fair CPU sharing
  - Good response time for interactive systems
- Cons
  - Poor turnaround for long jobs (frequently interrupted, etc.)
  - Quantum size impacts efficiency (too small increases context switch overhead; too large mimics `FIFO` behavior)

![img](./img/16.png)

### Schedulers in Real Systems

--

- Real schedulers are more complex
- For example, Linux uses a Multi-Level Feedback Queue (`MLFQ`)
  - Many queues, in order of priority
  - A process from the highest priority queue is scheduled first
  - Within the same priority, any algorithm like `RR` can be used
  - The priority of a process decays with its age

## Inter-Process Communication

### Inter-Process Communication (`IPC`)

--

- Processes do not share any memory with each other
  - Each has its own separate memory
- Some processes might want to work together for a task, so they need to communicate information
- `IPC` mechanisms to share information between processes

### Shared Memory

--

- Processes can both access the same region of memory via the `shmget()` system call
  - `int shmget (key_t key, int size, int shmflg)`
- By providing the same key, two processes can get the same segment of memory
- They can read/write to memory to communicate
- They need to take care that one is not overwriting the other's data. How?

### Signals

--

- A certain set of signals is supported by the OS
  - Some signals have a fixed meaning (e.g., a signal to terminate a process)
  - Some signals can be user-defined
- Signals can be sent to a process by the OS or another process (e.g., if you type Ctrl+C, the OS sends a `SIGINT` signal to the running process)
- Signal handler: Every process has default code to execute for each signal
  - Exit on a terminate signal
- Some signal handlers can be overridden to do other things

### Sockets

--

- Sockets can be used for two processes on the same machine or different machines to communicate
  - `TCP`/`UDP` sockets across machines
  - Unix sockets on the local machine
- Communicating with sockets
  - Processes open sockets and connect them to each other
  - Messages written into one socket can be read from another
  - The OS transfers data across the socket buffer

### Pipes

--

- The `pipe` system call returns two file descriptors
  - Read handle and write handle
  - A pipe is half-duplex (one-way) communication
  - Data written in one file descriptor can be read through another
- Regular pipes: Both `fds` are in the same process (how is this useful?)
  - The parent and child share `fds` after `fork()`
  - The parent uses one end to write, and the child uses the other end to read
- Named pipes: Two endpoints of a pipe can be in different processes
- Pipe data is buffered in OS buffers between write and read

### Message Queues

--

- Mailbox abstraction
- A process can open a mailbox at a specified location
- Processes can send/receive messages from the mailbox
- The OS buffers messages between send and receive

### Blocking vs Non-Blocking Communication

--

- Some `IPC` actions can block
  - Reading from a socket/pipe that has no data, or reading from an empty message queue
  - Writing to a full socket/pipe/message queue
- The system calls to read/write have versions that block or can return with an error code in case of failure
  - A socket read can return an error indicating no data to be read, instead of blocking -->
