
# inter-process communication

## Inter-Process Communication (IPC)

- Processes do not share memory with each other
  - Each process has its own separate memory space
- Some processes need to collaborate on tasks, requiring them to communicate information
- IPC mechanisms enable information sharing between processes

## Shared Memory

- Processes can access the same region of memory using the `shmget()` system call
  - `int shmget (key_t key, int size, int shmflg)`
- By providing the same key, two processes can access the same memory segment
- Processes read from or write to this memory to communicate
- Synchronization is needed to prevent one process from overwriting another's data
  - It identify the part of the code that accesses the shared resource and ensure that only one process can execute this section at any given time

<!-- ![img](./img/24.png) -->

## Signals

- A certain set of signals is supported by the OS
  - Some signals have a fixed meaning (e.g., terminating a process)
  - Others are user-defined
- Signals can be sent to a process by the OS or another process
  - Sent by the OS: The kernel (the core of the OS) sends signals to processes when certain system-level events happen
    - An illegal instruction (like dividing by zero)
    - A memory access violation (SIGSEGV)
    - A child process terminating, which sends a SIGCHLD signal to its parent process
  - Sent by another process: Processes can send signals to each other (provided they have the necessary permissions)
    - Using the kill command in a Linux/Unix terminal is a common example: kill 12345 sends a SIGTERM signal to the process with ID 12345
  - Sent by the user: You can directly trigger signals from your keyboard
    - The most common example is pressing Ctrl+C, which causes the terminal to send a SIGINT signal to the currently running foreground process
- Signal handler
  - When a process receives a signal, it must have a way to handle it
  - For every signal, a process has a defined action
    - Every signal has a default behavior defined by the OS
      - For most signals that indicate an error or a termination request (like SIGINT, SIGTERM, SIGSEGV), the default action is to terminate the process
      - For other signals, the default might be to be ignored
    - Ignore the signal: The process can be configured to simply discard the signal and continue its work as if nothing happened
    - Catch the signal with a custom handler: A programmer can write a specific function - a custom signal handler that will be executed whenever a certain signal is received. This allows a process to override the default behavior
      - Example: Imagine a text editor. If you press Ctrl+C, you don't want it to just quit and lose all your unsaved work. A well-written editor will catch the SIGINT signal. Instead of terminating (the default action), its custom handler will execute code that prompts the user: "Do you want to save your changes before exiting?"

## Sockets

- Sockets enable communication between processes on the same or different machines
  - TCP/UDP sockets for communication across machines
    - To do this, a socket needs a unique address, which is a combination of an IP address (which computer to find) and a port number (which application on that computer to talk to)
  - Unix sockets for communication on the local machine
- Communication via sockets
  - Processes open sockets and connect them
    - Both the "server" process (the one waiting for a connection) and the "client" process (the one initiating the connection) must first ask the OS to create a socket endpoint for them
  - The client process uses its socket to "call" the server's address. The OS makes the connection, and once the server "accepts" the call, a two-way communication channel is established
  - Messages written into one socket can be read from another
  - The OS transfers data through the socket buffer
    - When a process writes data to a socket, it doesn't instantly appear in the other process. Instead, the data is placed in a socket buffer, which is a temporary storage area in the OS's memory
    - The OS reads the data from the sender's buffer, handles the complex task of transmitting it (e.g., breaking it into TCP packets), and places it in the receiver's socket buffer
    - When the receiving process decides to read from the socket, it is actually pulling data out of this buffer

## Pipes // Tomorrow

- The pipe system call returns two file descriptors
  - A read handle and a write handle
  - Pipes provide half-duplex (one-way) communication
  - Data written to one file descriptor can be read from the other
- Regular pipes
  - Both file descriptors are initially in the same process
  - After a `fork()`, the parent and child share the file descriptors
  - For example, the parent writes to one end, and the child reads from the other
- Named pipes
  - Allow two different processes to connect to the pipe's endpoints
- Pipe data is buffered in OS buffers between write and read operations

## Message Queues

- Provide a mailbox abstraction
  - A process can open a mailbox at a specified location
  - Processes can send and receive messages through the mailbox
- The OS buffers messages between send and receive operations

## Blocking vs. Non-Blocking Communication

- Some IPC actions can block
  - Reading from an empty socket, pipe, or message queue
  - Writing to a full socket, pipe, or message queue
- System calls for reading/writing offer
  - Blocking versions: Wait until the operation can complete
  - Non-blocking versions: Return an error code if the operation cannot proceed immediately (e.g., a socket read returns an error if no data is available)
