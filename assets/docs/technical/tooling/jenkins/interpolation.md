# interpolation

String interpolation is the process of embedding expressions or variables inside a string literal. Instead of manually concatenating strings together (e.g., 'Hello, ' + name + '!'), interpolation allows you to place the variable directly inside the string for a cleaner and more readable result

In Jenkins, there are two primary contexts where you will encounter interpolation, and it is critical to understand which one you are in

- Groovy context: Processed by the Groovy language on the Jenkins controller
- Shell context: Processed by the command-line shell (like bash or cmd) on the agent node

## Groovy String Interpolation (G-String)

`"..."`

- Works only inside double-quoted strings ("...")
- Uses the `${expression}` syntax

```groovy
def myVar = 'World'
echo "Hello, ${myVar}!"
echo "1. Param value: ${params.MY_PARAM}"
echo "2. Env variable: ${env.BUILD_NUMBER}"
echo "3. Simple math: 2 + 3 is ${2 + 3}"
echo "4. A method call: Your username is ${env.BUILD_USER_ID.toLowerCase()}"
```

Double quotes vs. single quotes

- Double quotes `"..."`: Creates a GString (Groovy String). It supports interpolation. Jenkins will scan this string for `${...}` expressions, evaluate them, and substitute the results.
- Single quotes `'...'`: Creates a standard java.lang.String. It does NOT support interpolation. It treats every character literally

```bash
def version = '1.7.0'

echo "Building version: ${version}"
// OUTPUT: Building version: 1.7.0

echo 'Building version: ${version}'
// OUTPUT: Building version: ${version}
```

## Shell and Batch Expansion (On the Agent)

This type of interpolation is not processed by Groovy. It is handled entirely by the command-line shell on the agent node after Jenkins has sent it the command

Linux/macOS

- `$VARIABLE` and `${VARIABLE}`
- When writing a sh step, you should almost always enclose your command in single quotes. This prevents Groovy from trying to interpret the $ characters and safely passes the literal string to the shell for it to process.

```bash
// CORRECT: Let the shell handle the interpolation.
// Groovy passes the literal string 'echo "Workspace is $WORKSPACE"' to the shell.
// The shell then correctly expands $WORKSPACE.
sh 'echo "Workspace is $WORKSPACE"'

// INCORRECT: Groovy will try and fail to find a variable named WORKSPACE.
// This will throw an error because there is no Groovy variable with that name.
sh "echo 'Workspace is $WORKSPACE'" // This will cause a Groovy error
```

Windows

- `%VARIABLE%`

## Mixing Groovy and Shell Interpolation

What if you need to use a Groovy variable inside a shell command?

In this advanced scenario, you must use double quotes for your sh step and carefully structure your command.

How it works:

Groovy first performs its interpolation on the double-quoted string.
The resulting string (with the Groovy variable now embedded as a literal) is sent to the shell.
The shell then performs its own expansion on any remaining $ characters.

```groovy
sh "echo 'Report for branch $BRANCH_NAME will be saved to ${params.FILENAME}'"
```

Execution Analysis:

Groovy processing: Jenkins evaluates the double-quoted string.
It sees $BRANCH_NAME but finds no Groovy variable with that name, so it leaves it as is.
It sees ${params.FILENAME} and substitutes its value, "report.txt".
String sent to shell: The final string sent to the agent's shell is: echo 'Report for branch $BRANCH_NAME will be saved to report.txt'
Shell processing: The shell executes this command.
It sees $BRANCH_NAME and expands it to its value (e.g., "main").
The rest of the string is printed literally.

## Cases

### Case 1: Double Quotes inside Single Quotes

`sh 'echo "User is $USER, Greeting is ${params.GREETING}"'`

- Groovy: 