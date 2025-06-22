# access

## Parammeter

`params.PARAMETER_NAME`

- Return type: Original (string, boolean, etc.)
- Context: Groovy script blocks (if, echo, etc.)
  - `params.PARAMETER_NAME`
    - For Groovy logic with build parameters
    - Access the parameter's actual value in an if statement, a when block, a loop, or for passing to a function
  - `${params.PARAMETER_NAME}`
    - For building strings in Groovy
    - Embed a parameter's value inside a double-quoted string

```groovy
if (params.SHOULD_ECHO) {
  echo params.GREETING
}
```

`env.PARAMETER_NAME`

- Return type: String
- Context: Groovy script blocks (if, echo, etc.)
  - `env.PARAMETER_NAME`
    - For Groovy logic with environment variables
    - Access any environment variable
  - `${env.PARAMETER_NAME}`
    - For building strings in Groovy with environment variables
    - Embed an environment variable's value inside a double-quoted string

```groovy
steps {
  echo "The version from env is: ${env.VERSION}"
}
```

`$PARAMETER_NAME`

- Return type: String
- Context: Inside sh or bat command strings
- `$PARAMETER_NAME` and `${PARAMETER_NAME}`
  - Inside a sh/bat command string
  - This is not Groovy syntax
  - This is the shell on the agent node expanding the variable
  - Use this when writing shell-native commands

```bash
# Linux/macOS
sh 'echo The value is: $PARAMETER_NAME'
sh 'echo The value is: ${PARAMETER_NAME}'
```

```bash
# Windows
bat 'echo The value is: %VARIABLE_NAME%'
```

## Environment

`env.VARIABLE_NAME` and `env['VARIABLE_NAME']`

- Accessible anywhere in your Groovy script (steps, when blocks, etc.)
- Values returned from env are always of the String data type
- If you declare a build parameter and also define an environment variable with the exact same name in an environment block, the value from the environment block will be used when you access it via `env.PARAMETER_NAME`



```groovy
echo "The Git branch is: ${env['GIT_BRANCH']}"
```

`VARIABLE_NAME`

- Inside a sh (for Linux/macOS) or bat (for Windows) step
- Not Groovy syntax
- The shell interpreter handling the variable expansion

```bash
# Linux/macOS
sh 'echo The value is: $VARIABLE_NAME'
sh 'echo The value is: ${VARIABLE_NAME}'
```

```bash
# Windows
bat 'echo The value is: %VARIABLE_NAME%'
```

`System.getenv()`

- Accesses the environment variables of the Java process running the Jenkins agent
- 

```groovy
script {
  def systemPath = System.getenv('PATH')
  echo "System PATH is: ${systemPath}"
}
```
