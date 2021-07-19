import React from "react";
import { Tabview } from "../../../component/Tabview";
import { PreviewSnippet } from "./previewSnippet.js";
import Preview from "./preview.png";
import { Stylesheet } from "./stylesheet.js";

export const PreviewModal = () => {
  return (
    <>
      <Tabview
        componentName="ProjectPreviewModal"
        path="\src\containers\Projects\ProjectPreviewModal\index.js"
        description="In this component, you can see a preview of your project. In the preview modal, you will see the project name, project description, and image of your project in the first section. In the second section, you will see the list of playlists that are used in the project. If no playlist is found then a message will be shown like, No playlists defined for this project.
Otherwise, you will see the list of playlists."
        codeSnippet={PreviewSnippet}
        libraryUsed={["react-router-dom", "prop-types"]}
        customHooks={[]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[]}
        apiUsed={[]}
        images={Preview}
        stylesheetUsed={Stylesheet}
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
