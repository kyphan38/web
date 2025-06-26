
# inter-process communication

## Inter-Process Communication (IPC)

--

- Processes do not share memory with each other
  - Each process has its own separate memory space
- Some processes need to collaborate on tasks, requiring them to communicate information
- IPC mechanisms enable information sharing between processes

## Shared Memory

--

- Processes can access the same region of memory using the `shmget()` system call
  - `int shmget (key_t key, int size, int shmflg)`
- By providing the same key, two processes can access the same memory segment
- Processes read from or write to this memory to communicate
- Synchronization is needed to prevent one process from overwriting another's data

## Signals

--

- A certain set of signals is supported by the OS
  - Some signals have a fixed meaning (e.g., terminating a process)
  - Others are user-defined
- Signals can be sent to a process by the OS or another process (e.g., pressing Ctrl+C sends a `SIGINT` signal to the running process)
- Signal handler
  - Each process has default code to execute for each signal
  - For example, exiting on a terminate signal
- Some signal handlers can be overridden to do other things

## Sockets

--

- Sockets enable communication between processes on the same or different machines
  - TCP/UDP sockets for communication across machines
  - Unix sockets for communication on the local machine
- Communication via sockets
  - Processes open sockets and connect them
  - Messages written into one socket can be read from another
  - The OS transfers data through the socket buffer

## Pipes

--

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

--

- Provide a mailbox abstraction
  - A process can open a mailbox at a specified location
  - Processes can send and receive messages through the mailbox
- The OS buffers messages between send and receive operations

## Blocking vs. Non-Blocking Communication

--

- Some IPC actions can block
  - Reading from an empty socket, pipe, or message queue
  - Writing to a full socket, pipe, or message queue
- System calls for reading/writing offer
  - Blocking versions: Wait until the operation can complete
  - Non-blocking versions: Return an error code if the operation cannot proceed immediately (e.g., a socket read returns an error if no data is available)
