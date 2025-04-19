# process abstraction

## Process Abstraction

OS provides process abstraction

- When you run a executable file, the OS creates a process - a running program
- OS timeshares CPU across multiple processes, OS virtualizes CPU
- OS has a CPU scheduler that picks one of the many active processes to execute on a CPU
- A CPU scheduler contains
  - Policy: Define which process to run
  - Mechanism: Define how to "context switch" between processes

What constitutes a process?
