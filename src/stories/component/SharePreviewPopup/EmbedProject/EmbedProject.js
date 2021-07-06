import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./EmbedProject.png";
import { Stylesheetused } from "../stylesheetUsed.js";
export const EmbedProject = () => {
  return (
    <>
      <Tabview
        componentName="EmbedProject"
        path="\src\components\SharePreviewPopup\EmbedProject.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-fontawesome", "swal"]}
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
