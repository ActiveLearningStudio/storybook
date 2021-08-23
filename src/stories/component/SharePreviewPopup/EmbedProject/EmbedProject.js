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
        description="In this component, you will see a modal to embed your project anywhere else. 
        When you click on embed your project, then you will find an Html snippet to embed that
         project anywhere else.
         In the end, an ok button will be shown to close the modal. "
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
