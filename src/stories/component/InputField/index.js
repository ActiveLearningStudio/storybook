import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./InputField.png";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="InputField"
        path="\src\components\InputField\index.js"
        description="This is the component for the input field.
         In most cases, when you need any input box then you can call this component. 
         You will send your props to this component and then this component will show the input box accordingly."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed=""
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
