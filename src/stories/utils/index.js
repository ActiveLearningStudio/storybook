import React from "react";
import { Tabview } from "../../component/Tabview";
import { CodeSnippet } from "./code.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="getErrors"
        path="\src\utils\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["react-animations", "styled-components"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
