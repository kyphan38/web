# java

## Differentiate JRE and JDK

The JRE (Java Runtime Environment) and JDK (Java Development Kit) are two key components of the Java ecosystem, but they serve different purposes

JRE

- Definition
  - A software layer that provides the minimum requirements to run Java applications
  - It includes the Java Virtual Machine (JVM), core libraries, and other components needed to execute Java bytecode
- Components
  - ava Virtual Machine (JVM): Executes Java bytecode
  - Java class libraries: Pre-built classes and APIs for running Java programs (e.g., java.lang, java.util)
  - Supporting files and runtime tools (e.g., java command to launch applications)
- Purpose
  - For end-users who only need to run Java applications or applets (e.g., playing a Java-based game or using a Java app)
  - Think of it as the "player" for Java programs
- Size
  - Smaller in size because it only includes what’s necessary to run Java programs
- Use cases examples
  - You download the JRE if you want to run a Java-based application like Minecraft (without modifying its code)

JDK

- Definition
  - A broader software development kit used to develop Java applications
  - It includes the JRE (so it can run Java programs) plus additional tools for coding, compiling, and debugging
- Components
  - Everything in the JRE (JVM, libraries, etc.)
  - Compiler (javac): Converts Java source code (.java files) into bytecode (.class files)
  - Debugger (jdb): Helps identify and fix bugs in Java code
  - Other tools: jar (for packaging), javadoc (for generating documentation), and more
- Purpose
  - For developers who need to write, compile, and debug Java code
  - Think of it as the "creator" toolkit for building Java programs
- Size
  - Larger because it bundles the JRE with additional development tools and documentation
- Use case examples
  - You download the JDK if you’re a programmer writing a Java application in an IDE like IntelliJ or Eclipse

Relationship

- The JRE is a subset of the JDK. If you have the JDK installed, you don’t need a separate JRE installation because the JDK already includes it
