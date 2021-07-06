import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./shareProject.png";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ShareProject = () => {
  return (
    <>
      <Tabview
        componentName="ShareProject"
        path="\src\components\SharePreviewPopup\ShareProject.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-fontawesome", "swal", "react-share"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3733/preview"
      />
    </>
  );
};
