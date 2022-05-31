import React, { useEffect, useMemo, useState } from "react";

export function StrictModeExample() {
  useState(() => {
    console.log("useState called twice");
  });

  useMemo(() => {
    console.log("useMemo called twice");
  }, []);

  useEffect(() => {
    console.log("useEffect called twice");
  }, []);

  console.log("StrictModeExample render twice");
  return <div></div>;
}

export class WillMountComponent extends React.Component {
  componentWillMount() {}
  render() {
    return <div ref="mydiv"></div>;
  }
}
