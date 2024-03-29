import React from "react";
import "./TestInfo.css";

export interface ITestInfo {
  label: string;
}
const TestInfo = (props: ITestInfo) => {
  return <button>{props.label}</button>;
};
export default TestInfo;
