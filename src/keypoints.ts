/*
React 18 concept
What is Concurrency in React js
What is useTransition Hook
What is useDeferredValue Hook
How is useDefferedValue different from debouncing?
What is the difference between useDefferedValue and useTransition hook?
Practical example

Concurrency Means:

React 18 added a new concept: Concurrency. It helps to update multiple tasks
simultaneously by prioritizing the tasks. We can prioritize state updates 
like low priority or high priority state updates.
Explained By Dan Abramov - https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786

https://react-beta-seven.vercel.app/

useTransition hook:

Transitions are a new concurrent feature introduced in React 18 to distinguish 
between urgent and non-urgent updates.
Urgent updates like typing, clicking, pressing, etc.
Non-urgent updates like UI updates on some state updates.
Example: You filter the product list on search. Typing in the input box to search
product is an urgent state update and shows the filtered product in a non-urgent state.
React added this feature to improve the User experience.

React added hook for this:
const [isPending, startTransition] = useTransition();
isPending - state for pending transition.
startTransition - function to start the transition.

startTransition(() = {
  setCount(count + 1);
})



https://reactjs.org/docs/react-api.html#transitions
https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786
https://reactjs.org/blog/2022/03/29/react-v18.html?#new-feature-transitions
https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue
https://dmitripavlutin.com/react-usetransition/

useDeferredValue() hook

useTransition() hook gives us the control to make the state a low priority.
useDeferredValue lets you defer (postpone) re-rendering a non-urgent part
of the tree.
It is the same as debouncing. There is no fixed time delay. React will render the
deferred value as soon as other work is finished (the first render is reflected on the
screen). It does not block user input.

How is useDefferedValue different from debouncing?

Debouncing has a fixed artificial delay, no matter other system is fast
or slow. useDeferredValue add lags as per system. On a fast machine, the lag
is less and on a slow device is a high lag and noticeable.

What is the difference between useDefferedValue and useTransition hook?

useTransition hook wrap the updating state and useDefferedValue wrap a value
that is affected by state updates.
We should not use both hooks at the same time because both provide the solution
for the same problem.
Don't overuse this feature for all state updates. We should only use
where we need like complex user interface.
We should keep other performance improvements like lazy loading,
pagination or other performance optimization techniques.


https://reactjs.org/blog/2022/03/29/react-v18.html?#usedeferredvalue
https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786


useId() Hook

const id = useId();

It is a hook for generating unique IDs for both the client and server.
useId generates a string that includes ": colon token".
useId is the improved version of useOpaqueIdentifier hook. There was many
bugs and limitations.

Note: It is not used for generating id for "keys in a list". we should use
data for keys in the array of list.

Reference:
https://reactjs.org/docs/hooks-reference.html#useid
https://github.com/facebook/react/issues/20127



Strict Mode:
<React.StrictMode>{child component} </React.StrictMode>

It is a helper component that allow developers to code efficiently
and show error or warning in the console if react guidline and recommendation
not followed in the app.
It does not render anything in the UI.
It is a React developer tool used for highlighting possible problems 
in the application.
We can apply strict mode to any section of the app but recommendation to
apply in the root.
Create react app by default add this component in the root.

<React.StrictMode>
    <App />
</React.StrictMode>

Note: It checks in the development mode only. It does not impact the
production build.

Strict Mode called some method twice to detect any problem
in the app and show warning and error message in the console.
It is run only in development mode.
constructor method
render
setState
getDerivedStateFromProps
useState
useMemo

Advantage:

Identifying unsafe lifecycles
Warning about legacy string ref API usage
Warning about deprecated findDOMNode usage
Detecting unexpected side effects
Detecting legacy context API
Ensuring reusable state

Example

Reference:
https://reactjs.org/docs/strict-mode.html
https://kentcdodds.com/blog/react-strict-mode

*/

export {};
