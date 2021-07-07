import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
//import { Stylesheetused } from "./stylesheetUsed";
//import Screenshot from "./ActivityCard.png";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="ComingSoon"
        path="\src\components\ComingSoon\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples="https://dev.currikistudio.org/"
      />
    </>
  );
};
