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
        description="This component is more helpful to share any project through email 
        or google classroom. When you click on share project then you will see a modal 
        where a tab will open. After clicking on the share project link, you will get a 
        link to share your project through email or google classroom.
        You can send that link to anyone for accessing your project."
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
