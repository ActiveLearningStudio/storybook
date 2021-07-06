import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./ShareLink.PNG";
import { ResourceStore } from "./ResourceStore";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ShareLink = () => {
  return (
    <>
      <Tabview
        componentName="ShareLink"
        path="\src\components\ResourceCard\ShareLink.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-redux", "react-fontawesome", "swal"]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/project", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3733/preview"
      />
    </>
  );
};
