# system calls for process management

## What API Does OS Provide to User Programs?

--

- API = Application Programming Interface
  - Functions available to write user programs
- API provided by OS is a set of "system calls"
  - System call is a function call into OS code that runs at a higher privilege level of the CPU
  - Access to sensitive operations (e.g., access to hardware) is allowed only at a higher privilege level
  - Some "blocking" system calls cause the process to be blocked and descheduled (e.g., read from disk)

## Should We Rewrite Programs for Each OS?

--

- POSIX (Portable Operating System Interface) API: a standard set of system calls that an OS must implement
  - Programs written to the POSIX API can run on any POSIX-compliant OS
  - Most modern OSes are POSIX-compliant
  - Ensures program portability
- Programming language libraries hide the details of invoking/canceling system calls
  - The printf function in the C library calls the write system call to write to the screen
  - User programs usually do not need to worry about invoking system calls

## System Call Processes in Unix

System calls

- fork() creates a new child process
  - All processes are created by forking from a parent
  - The init process is the ancestor of all processes
- exec() makes a process execute a given executable
- exit() terminates a process
- wait() causes a parent to block until the child terminates or waits for a process to finish

Many variants exist of the above system calls with different arguments

## What Happens During a Fork?

![img](./img/6.png)

- A new process is created by making a copy of the parent's memory image
- The new process is added to the OS process list and scheduled
- Parent and child start execution just after fork (with different return values)
- Parent and child execute and modify the memory data independently

![img](./img/7.png)

- In the child process, fork() returns 0
- In the parent process, fork() returns the PID of the newly created child process

## Waiting for Child Process to Terminate

--

- Process termination scenarios
  - Normal: by calling exit() (exit is called automatically when the end of the main function is reached)
  - Abnormal: OS terminates a misbehaving process
- Terminated process exists as a zombie - still consumes memory
- When a parent calls wait(), the zombie child is cleaned up or reaped
- What if the parent terminates before the child?
  - init process adopts orphans and reaps them

![img](./img/8.png)

## What Happens During Exec?

--

- After fork, parent and child are running the same code
  - Not too useful
- A process can run exec() to load another executable into its memory image
- A child can run a different program from the parent
  - Replaces the memory image of the current process (code, data, heap, and stack) with the new program
- Variants of exec(), e.g., to pass command-line arguments to the new executable

![img](./img/9.png)

## How Does a Shell Work?

--

- In a basic OS, the init process is created after initialization of hardware (on modern systems, systemd or init with PID 1)
- The init process spawns a shell (like bash, zsh, or sh)
- Shell reads user command, forks a child, execs the command executable, waits for it to finish, reads the next command
- Common commands like ls are all executables that are simply exec'ed by the shell

Example with general steps

```bash
ls
---
a.txt b.txt c.txt
```

- Shell reads the command ls
- Shell parses the command and locates the ls
- executable in $PATH (e.g., /bin/ls)
- Shell forks a child process
- Child process calls execve("/bin/ls", ["ls"], [env])
- Parent shell calls waitpid() and pauses
- Child process writes the result to its standard output
- Child process finishes execution and terminates
- Parent shell resumes after waitpid() returns and updates the $? status variable
- Parent shell displays the prompt ($), ready for the next command

## More Funky Things About the Shell

--

- Shell can manipulate the child in strange ways
- Suppose you want to redirect output from a command to a file
- `prompt>ls > foo.txt`
- Shell spawns a child, redirects its standard output to a file using open(), then calls exec on the child

![img](./img/10.png)
