import { useId } from "react";

export function UseIdHookExample() {
  const id = useId();
  const lastname = useId();
  //console.log("id", id, lastname);
  return (
    <div>
      <form>
        <label htmlFor={`${id}-firstname`}>First Name</label>
        <input id={`${id}-firstname`} type="text" />
        <label htmlFor={`${lastname}-lastname`}>Last Name</label>
        <input id={`${lastname}-lastname`} type="text" />
      </form>
    </div>
  );
}
