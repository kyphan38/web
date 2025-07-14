# fundamentals

## Definitional and Conceptual Questions

Goal

- Test your foundational knowledge
- See if you have a solid grasp of key concepts, not just memorized definitions

Questions: What is ..., define ..., tell me about ..., what does ... mean, etc.

Framework: Define &rarr; Context &rarr; Example &rarr; Trade-offs or Alternatives

- Definition - What is it?
  - Start with a clear and concise one-sentence definition
  - Get straight to the point
- Context - Why it exists?
  - Explain the problem it solves
  - What was the pain point or limitation before this concept existed?
- Example - How it's used?
  - Provide a concrete, real-world example
  - Name a specific tool and briefly describe a common use case
- Trade-offs / Alternatives (Optional) - What are its limits
  - Briefly mention a key limitation or compare it to an alternative technology

## Procedural and Instructional Questions

Goal

- Assess your practical, hands-on skills
- Confirm you can actually perform a task, not just describe it theoretically

Questions: How to ..., how do you ..., what are the ways to ..., which commands can be used to ..., what is the process to ..., etc.

Framework: Options &rarr; Steps &rarr; Alternatives and Caveats

- Options - What are the ways?
  - If there are multiple ways to accomplish the task, briefly list them first
- Steps - Recommended approach - How to do it?
  - Select one method-ideally the best practice or the one you're most familiar with-and provide a clear, step-by-step walkthrough
- Alternatives and Caveats
  - What to watch out for: Conclude by mentioning important considerations
    - Prerequisites: What is needed to perform the task?
    - Pitfalls: Are there any common mistakes or things to be aware of?
    - Alternatives: Briefly mention why someone might choose one of the other options you listed in Step 1

## Explanatory and Description Questions

Goal

- Evaluate your ability to break down complex systems and articulate them clearly
- Test for both deep technical knowledge and strong communication skills

Questions: Explain ..., describe ..., etc.

Framework: What &rarr; How &rarr; Why

- What - The high-level summary
  - Start with a concise, high-level statement that defines the subject and its primary role
  - What is it, and what does it do in one sentence?
- How - The core mechanics - Its components and flow - The most detailed part
  - Identify components: Break the system down into its main parts (e.g., API server, scheduler, controller)
  - Describe the flow: Explain how these components interact in a logical, step-by-step sequence
  - Tell the "story" of a process from start to finish
- Why - The impact and value - Its importance
  - Problem solved: What specific technical or business problem does this solve?
  - Key benefits: What are the crucial benefits? Frame them in terms of core principles like availability, scalability, performance, velocity, security, etc.

## Comparative Questions

Goal

- Evaluate your analytical thinking and decision-making process
- Choose the right tool has major implications for cost, velocity, and reliability
- See if you understand the trade-offs and can justify your choices

Questions: What is the difference between ... and ..., differentiate between ... and ..., compare ... and ..., how does ... differ from ..., etc.

Framework: Similarities &rarr; Differences &rarr; Use cases

- Similarities - The common ground
  - Start by establishing the common ground. What shared problem do both technologies aim to solve?
- Differences - The structured analysis
  - Common comparison dimensions include
    - Architecture and approach: (e.g., Declarative vs. Imperative, Agent-based vs. Agentless)
    - Primary purpose: (e.g., Provisioning vs. Configuration Management)
    - State management: (e.g., Stateful vs. Stateless)
    - Ecosystem and learning curve
- Use cases - The decisive recommendation
  - Based on your analysis, give a clear recommendation
  - When and why would you choose one over the other?
  - Provide specific scenarios to make your conclusion practical and decisive

## Listing and Enumeration Questions

Goal

- Test not just your knowledge recall, but also your ability to structure and prioritize information
- A great answer shows you have an organized mental model of the subject, which is more valuable than just a list

Questions: Name some ..., enumerate the different ..., what are the different types of ...,

Framework: List &rarr; Categorize &rarr; Explain

- List
  - The direct answer: Begin by directly answering the question. Enumerate the items requested to immediately demonstrate that you know the answer
- Categorize
  - The structured grouping: This is the key step to add value. Group the items you just listed into logical categories (e.g., by function, scope, or use case)
  - This shows you understand the relationships between the items and have a structured way of thinking
- Explain
  - The key insight: Briefly explain the purpose of each category or highlight one or two of the most important items with a one-sentence explanation
  - This proves your understanding goes beyond simple memorization

## Scenario-Based and Troubleshooting Questions

Goal

- Evaluate your problem-solving method, not just your ability to guess the right answer
- Expect a logical, systematic approach and your ability to remain calm under pressure

Questions: If a website is down, what do you do, how do you troubleshoot a CrashLoopBackOff pod, how would you handle a scenario where ..., etc.

Framework

- Clarify  and solate - The "Don't Panic" step
  - What it is: This is the most critical first step. Never jump to conclusions. Start by asking questions to gather facts and narrow the scope ("blast radius") of the problem
  - Key questions: When did it start, was there a recent deployment or change, what are the active alerts, is it affecting all users or a subset, what do the logs show, etc.
- Form a hypothesis
  - What's your theory?: Based on the initial facts, state your most likely theory. Articulating a clear hypothesis guides your investigation and shows you're not just guessing randomly
- Test and diagnose
  - Prove your theory: Describe the specific commands and actions you would take to prove or disprove your hypothesis. Follow a logical path (e.g., top-down from the user to the database)
- Resolve - Mitigate and remediate
  - Fix it now, fix it for good: Propose a two-part solution
    - Immediate mitigation: What is the fastest way to restore service for users? (e.g., "To restore service immediately, I would initiate a rollback to the previous stable deployment.")
    - Long-term remediation: What is the proper fix for the root cause? (e.g., "The long-term fix requires analyzing the logs, fixing the bug in the code, and adding a more robust liveness/readiness probe to the deployment manifest.")
- Prevent and learn - The post-mortem
  - How do we not repeat this?: This final step demonstrates professional maturity and a commitment to improvement
    - Root cause analysis: Suggest conducting a blameless post-mortem to find the true root cause
    - Action items: Propose concrete, preventative action items. (e.g., "We should add more specific integration tests to the CI pipeline to catch this class of error, and we need to refine our alerting to be more specific.")

## Outcome and Impact Questions

Goal

- Test your ability to connect technical actions to business outcomes
- See if you understand the "so what?"-the real-world impact of a technology or process beyond its technical implementation

Questions: What happens when ..., what problem do we face without ..., what are the benefits of ..., what advantages does ... have, etc.

Framework: Context &rarr; Effect &rarr; Benefit

- Context - The "why" - The before picture
  - For "benefits" questions, describe the problem or limitation that existed before this technology ("the world without X"). What was the pain point?
  - For "what happens when" questions, describe the initial state and the specific trigger event
- Effect - The "how" - The chain reaction
  - Describe the technical process or the sequence of events that follows the trigger
  - Explain the core mechanics in a step-by-step manner
- Benefit - The "value" - The "so what?"
  - Conclude with the ultimate outcome and its value. Frame the benefits in terms of core business and engineering drivers, such as
    - Velocity (Faster delivery)
    - Stability (Higher reliability, less downtime)
    - Scalability (Ability to handle growth)
    - Security (Reduced risk)
    - Cost (Improved efficiency)

## Identification and Selection Questions

Goal

- Evaluate your precision and your ability to make a defensible decision
- See if you can identify the right tool or diagnose a specific issue based on evidence and clear criteria

Questions: Which ..., how do I identify when ..., what kind of error is ..., which ... is most secure, how do I find, etc.

Framework: Identify &rarr; Criteria &rarr; Justify

- Identify - What is it? - The direct answer
  - Start with a direct and confident answer
  - State your choice, name the method, or identify the issue clearly and without hesitation
- Criteria - What are the rules? - The "how you know"
  - Explain the criteria you used to make your decision. What are the rules, indicators, or factors you considered?
- Justify - Why this choice? - The "why it's right"
  - Connect your criteria to your conclusion
  - Justify why your chosen option is the best fit based on those criteria
  - If identifying an error, explain what that error means in a practical context and what its implications are

## Task-Oriented and Completion Questions

Goal

- Evaluate your hands-on skills
- Observe your workflow: how you approach a problem, write code or configuration, and explain your work

Questions: Write a sample ..., complete the following ..., how to turn ... into ..., what does the following ... mean, etc.

Framework

- Understand and clarify
  - Confirm the goal: First, repeat the problem in your own words to ensure you understand it correctly. Ask clarifying questions about requirements, inputs, outputs, or edge cases
- Plan the approach
  - Outline the logic: Before writing any code, verbally outline your plan. Describe the tools, commands, or logic you intend to use. This demonstrates a methodical mindset
- Write the code or onfiguration
  - Implement the solution: Write your solution. Focus on creating code that is clean, readable, and correct. Use meaningful variable names and add comments where necessary
- Explain and test
  - Walk Through Your Work: After writing, explain your code line by line or block by block
    - Explain: Describe what each part does and why you chose that specific approach, highlighting any best practices or optimizations
    - Test: Discuss how you would test it and what edge cases you've considered (e.g., "What if a required environment variable is missing? The application should fail gracefully.")
