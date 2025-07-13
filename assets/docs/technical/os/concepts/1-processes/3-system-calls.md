# system calls

## API for Process Management

--

- The OS provides an API of functions for user programs
  - This API consists of system calls, which execute in privileged kernel mode
  - Privileged operations (e.g., hardware access) require this higher privilege level
- System calls can be blocking (e.g., read()), causing a context switch, or non-blocking (e.g., getpid()), returning immediately

## Portability of Code Across OS

--

- The POSIX API standardizes system calls for code portability across compliant operating systems
  - Recompilation may still be needed for different hardware architectures
- Language libraries (e.g., C's printf) often wrap system calls (e.g., write)
- The Application Binary Interface (ABI) defines the interface between machine code and hardware

## Process Related System Calls (In Unix)

--

- fork(): Creates a new child process
  - All processes are forked from a parent
- exec(): Replaces the current process image with a new executable
- exit(): Terminates the current process
- wait(): Blocks a parent process until a child terminates
- Language libraries provide variants of these calls

## Process Creation: Fork()

--

- A parent's call to fork() creates a new child process with a new PID
- The child gets a copy of the parent's memory image

!img

- After fork():
  - Parent and child resume execution from the fork() call
  - fork() returns 0 to the child and the child's PID to the parent
  - Parent and child run independently with separate memory; changes in one do not affect the other
- Execution order is non-deterministic without synchronization
- Nested fork() calls create multiple processes (e.g., fork(); fork(); creates 4 total processes)

## Exit() System Call

--

- A process calls exit() to terminate
  - The OS never runs the process again
  - In C, exit() is called automatically at the end of main()
- An exiting process cannot free its own memory
- A terminated process becomes a "zombie"

## Wait() System Call

--

- A parent calls wait() to "reap" (clean up) a zombie child
- wait() cleans up one terminated child's resources
- If the child is running, wait() blocks the parent until the child exits
- If the child is a zombie, wait() reaps it and returns immediately
- If there are no children, wait() returns immediately
- waitpid() reaps a specific child by its PID
- A parent should eventually call wait() for each fork()
- An "orphan" process (parent exited first) is adopted and reaped by the init process
- Failing to call wait() creates zombie processes, which can exhaust system resources
- Using wait() can enforce deterministic execution order (parent waits for child)

## Exec() System Call

--

- exec() replaces the current process's code and memory with a new program
- It takes an executable file as an argument
- The process's memory image is completely replaced by the new executable's
- A successful exec() does not return; the new program starts executing
- An unsuccessful exec() returns an error, and the original program continues

## Shell and Terminal

--

- The init process is the first process on boot and spawns a shell (e.g., bash)
- All other processes are forked from existing ones
- The shell's primary loop: read command, fork() child, exec() command in child, wait() for child
- Commands like ls are executables that the shell exec()s
- Some commands (e.g., cd) are built-in and executed directly by the shell process
  - This is necessary to change the shell's own working directory, not a temporary child's

## Foreground and Background Execution

--

- Foreground commands block the shell until they finish
- For background commands (&), the shell forks but does not wait(), returning to the prompt immediately
- The shell reaps background processes later, sometimes using non-blocking wait() calls
- Multiple commands can be run serially or in parallel

## I/O Redirection

--

- Every process has default file descriptors: STDIN, STDOUT, and STDERR
- The shell can manipulate a child's file descriptors before exec() to redirect I/O
- Example (ls > foo.txt): The shell closes the child's STDOUT and opens foo.txt, which takes the same file descriptor number

## Shell Commands With Pipes

--

- The shell can pipe the output of one command to the input of another
- This connects one child's STDOUT to another's STDIN using a kernel pipe
