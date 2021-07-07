import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
//import Screenshot from "./ActivityCard.png";
export const ImmersiveReaderPreview = () => {
  return (
    <>
      <Tabview
        componentName="ImmersiveReaderPreview"
        path="\src\components\Microsoft\ImmersiveReaderPreview.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-router-dom",
          "axios",
          "@microsoft/immersive-reader-sdk",
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
