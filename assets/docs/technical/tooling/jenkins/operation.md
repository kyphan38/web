# operation

## Order

### Phase 1: Pre-Execution and Initialization

These steps occur on the Jenkins controller before the main pipeline logic begins

- Trigger evaluation: Jenkins evaluates the triggers directive (cron, pollSCM, etc.) to determine if the pipeline should be scheduled to run
- Initial syntax validation: The Jenkinsfile undergoes a basic structural validation to ensure it conforms to declarative syntax rules. This catches fundamental errors early

### Phase 2: Build Start and Environment Setup

Once a build is initiated, Jenkins prepares the initial environment

- Parameter processing: The parameters directive is evaluated. For manual builds, Jenkins presents the parameter input UI. The provided values are populated into the params object and are also injected as the foundational set of environment variables for the build
- Source code checkout: Jenkins checks out the specific commit associated with the build from the configured Source Code Management (SCM) provider. This action populates built-in SCM-related environment variables such as BRANCH_NAME, GIT_URL, and GIT_COMMIT

### Phase 3: Global Directive Evaluation

Jenkins then processes the top-level directives defined for the entire pipeline. This configuration occurs on the agent allocated for the pipeline

- Global agent allocation: The top-level agent directive is evaluated to acquire a workspace and executor
- Global tool installation: If a top-level tools directive is specified, the required tools (e.g., JDK, Maven, Node.js) are installed and added to the PATH
- Global environment application: The top-level environment block is evaluated. Any variables defined here are set and will override variables of the same name that were previously set by parameters or built-in values
- Global options application: Top-level options (e.g., timeout, retry, timestamps) are applied to the entire pipeline

### Phase 4: Sequential Stage Execution

Jenkins iterates through the stages block, executing each stage in the order it is defined. For each stage, the following sequence occurs:

- Stage-specific agent allocation: If a stage defines its own agent, it takes precedence over the global agent for the duration of this stage
- Stage-specific configuration: Any tools, options, or input directives specific to the stage are evaluated
- when directive evaluation: The when directive is evaluated to determine if the stage should be executed or skipped. If the condition is false, Jenkins skips to the next stage
- Stage-specific environment application: The stage-level environment block is evaluated. Variables defined here have a higher precedence than global environment variables but are scoped only to the current stage
- steps block execution: The steps within the stage are executed sequentially. This constitutes the primary work of the stage
- Stage post block execution: Upon completion of the steps block, the stage-level post block is evaluated. The appropriate condition (always, success, failure, etc.) determines which actions are executed

### Phase 5: Post-Execution and Finalization

After all stages have been processed, the pipeline performs its final actions

- Global post block execution: The top-level post block is evaluated based on the final status of the pipeline (SUCCESS, FAILURE, UNSTABLE, etc.)
- Workspace cleanup: Jenkins performs post-build cleanup tasks according to its configuration

## Precedence

When multiple sources define a variable with the same name, Jenkins uses a strict precedence hierarchy to resolve the conflict. The value from the source with the highest precedence is used

The order, from highest precedence to lowest, is as follows:

- withEnv step: Variables defined inside a withEnv block have the highest priority and are scoped to that block
- Stage-level environment Block: Overrides global and parameter values for the duration of the specific stage
- Global-level environment Block: Overrides parameter and built-in values for the entire pipeline
- Build parameters: Values supplied at the start of the build, either manually or by a trigger
- Jenkins global variables: Variables configured globally in Manage Jenkins &rarr; System &rarr; Global properties
- Built-in environment variables: Default variables provided by Jenkins and its plugins (e.g., BUILD_NUMBER, WORKSPACE, BRANCH_NAME)

A critical distinction: params vs. env

- It is essential to distinguish between accessing a variable through the params object versus the env object
- params.VARIABLE_NAME: This always returns the original, unmodified value of a build parameter as it was supplied at the start of the build. It is not affected by the variable precedence chain
- env.VARIABLE_NAME: This returns the final, effective value of an environment variable after all overrides from the precedence chain have been applied
