import { useState } from "react";
import { NormalExamples } from "./NormalExamples";
import { UseDeferredHookExamples } from "./UseDeferredHookExamples";
import { UseTransitionHookExamples } from "./UseTransitionHookExamples";

export enum Buttons {
  Normal = "Normal",
  USE_TRANSITION = "useTransition",
  USE_DEFERRED = "useDeferred",
}

export function TransitionExamples() {
  const [button, setButton] = useState(Buttons.Normal);
  const renderInputs = () => {
    if (button === Buttons.Normal) {
      return <NormalExamples />;
    }
    if (button === Buttons.USE_TRANSITION) {
      return <UseTransitionHookExamples />;
    }
    if (button === Buttons.USE_DEFERRED) {
      return <UseDeferredHookExamples />;
    }
  };
  return (
    <div className="mt-5">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          onClick={() => setButton(Buttons.Normal)}
          type="button"
          className={`btn btn-outline-primary ${
            button === Buttons.Normal && "activebutton"
          }`}
        >
          {Buttons.Normal}
        </button>
        <button
          onClick={() => setButton(Buttons.USE_TRANSITION)}
          type="button"
          className={`btn btn-outline-primary ${
            button === Buttons.USE_TRANSITION && "activebutton"
          }`}
        >
          {Buttons.USE_TRANSITION}
        </button>
        <button
          onClick={() => setButton(Buttons.USE_DEFERRED)}
          type="button"
          className={`btn btn-outline-primary ${
            button === Buttons.USE_DEFERRED && "activebutton"
          }`}
        >
          {Buttons.USE_DEFERRED}
        </button>
      </div>
      <div className="mt-5">{renderInputs()}</div>
    </div>
  );
}
