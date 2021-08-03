import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
export const Ga = () => {
  return (
    <>
      <Tabview
        componentName="Event"
        path="\src\trackers\ga.js"
        description="This component is used for handling events. 
        You will get three props in this component and then perform an action according to event."
        codeSnippet={CodeSnippet}
        libraryUsed={["ReactGA"]}
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
