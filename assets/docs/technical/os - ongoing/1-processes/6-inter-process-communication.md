# inter-process communication

## Inter-Process Communication (IPC)

--

- Processes do not share any memory with each other
  - Each has its own separate memory
- Some processes might want to work together for a task, so need to communicate information
- IPC mechanisms to share information between processes

## Shared Memory

--

- Processes can both access the same region of memory via shmget()system call
  - int shmget (key_t key, int size, int shmflg)
- By providing the same key, two processes can get same segment of memory
- Can read/write to memory to communicate
- Need to take care that one is not overwriting the other's data. How?

## Signals

--

- A certain set of signals is supported by OS
  - Some signals have fixed meaning (e.g., signal to terminate a process)
  - Some signals can be user-defined
- Signals can be sent to a process by the OS or another process (e.g., if you type Ctrl+C, the OS sends a SIGINT signal to the running process)
- Signal handler: Every process has a default code to execute for each signal
  - Exit on terminate signal
- Some signal handlers can be overridden to do other things

## Sockets

--

- Sockets can be used for two processes on the same machine or different machines to communicate
  - TCP/UDP sockets across machines
  - Unix sockets on the local machine
- Communicating with sockets
  - Processes open sockets and connect them to each other
  - Messages written into one socket can be read from another
  - The OS transfers data across the socket buffer

## Pipes

--

- The pipe system call returns two file descriptors
  - Read handle and write handle
  - A pipe is a half-duplex (one-way) communication
  - Data written in one file descriptor can be read through another
- Regular pipes: Both fds are in same process (how it is useful?)
  - Parent and child share fds after fork
  - Parent uses one end to write and child uses the other end to read
- Named pipes: Two endpoints of a pipe can be in different processes
- Pipe data is buffered in OS buffers between write and read

## Message Queues

--

- Mailbox abstraction
- A process can open a mailbox at a specified location
- Processes can send/receive messages from the mailbox
- The OS buffers messages between send and receive

## Blocking vs Non-Blocking Communication

--

- Some IPC actions can block
  - Reading from socket/pipe that has no data, or reading from empty message queue
  - Writing to a full socket/pipe/message queue
- The system calls to read/write have versions that block or can return with an error code in case of failure
  - A socket read can return an error indicating no data to be read, instead of blocking
