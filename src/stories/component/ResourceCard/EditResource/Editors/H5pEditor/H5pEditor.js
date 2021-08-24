import React from "react";
import { Tabview } from "../../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./H5PEditor.png";
import { ResourceStore } from "../../../ResourceStore.js";
import { Stylesheetused } from "../../../stylesheetUsed.js";
export const H5PEditor = () => {
  return (
    <>
      <Tabview
        componentName="H5PEditorEdit"
        path="\src\components\ResourceCard\EditResource\Editors\H5PEditor.js"
        description="This component is used to edit resource activity data which will show
         in the H5P editor. This component will load the H5P editor in an iframe and give us the
          H5P editor form to edit data related to any resource activity."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-redux", "react-router-dom", "swal"]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
