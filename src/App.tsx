import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { StrictModeExample, WillMountComponent } from "./StrictModeExample";
// import { TransitionExamples } from "./Transition/TransitionExamples";
import { UseIdHookExample } from "./UseIdHookExample";

function App() {
  return (
    <div className="App">
      {/* <TransitionExamples /> */}
      <UseIdHookExample />
      <StrictModeExample />
      <WillMountComponent />
    </div>
  );
}

export default App;
