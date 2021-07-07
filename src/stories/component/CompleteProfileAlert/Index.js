import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
import Screenshot from "./ActivityCard.png";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="CompleteProfileAlert"
        path="\src\components\CompleteProfileAlert\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-fontawesome",
          "react-router-dom",
          "react-bootstrap",
        ]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images=""
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/"
      />
    </>
  );
};
