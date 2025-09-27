1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML.
code easy to understand like HTML.
Use JavaScript expressions inside { }.


2. What is the difference between State and Props?
State:
Data that a component manages itself.Can be changed using setState / useState.To handle dynamic data that changes over time.

Props:
Data passed into a component from its parent.Read-only, can’t be modified by the child.To pass data and behavior (functions) from parent to child.



3. What is the useState hook, and how does it work?
useState is a React Hook that i can add state to functional components.It returns two values: the state variable and a function to update it.



4. How can you share state between components in React?
Lift State Up → Move the state to the nearest common parent and pass it down via props.
Context API → Share state across many components without prop drilling.
State Management Libraries.



5. How is event handling done in React?
React handles look like HTML but uses as camelCase naming and passes a function instead of a string.
Event names → onClick, onChange, onSubmit, etc.


