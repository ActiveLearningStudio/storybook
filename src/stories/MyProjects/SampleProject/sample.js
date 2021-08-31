import React from "react";
import { Tabview } from "../../../component/Tabview";
import { SampleSnippet } from "./code.js";
import sampleProject from "./sampleProject.png";
import { ProjectStore } from "../projectStore.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const Sample = () => {
  return (
    <>
      <Tabview
        componentName="SampleProjects"
        path="\src\containers\Projects\SampleProjectCard.js"
        description="In this component, you will see a card to show a sample project. In the project sample, you will see a project thumbnail, project title, and project description. One dropdown is also made to remove, preview, and duplicate the sample project. All the sample projects passed through this modal and then will show in the sample project list."
        codeSnippet={SampleSnippet}
        libraryUsed={[
          "react-bootstrap",
          "react-redux",
          "react-fontawesome",
          "react-router-dom",
          "prop-types",
          "Swal",
        ]}
        customHooks={[
          { name: "components/models/activitySample", url: "" },
          {
            name: "containers/Preview/ProjectPreview/ProjectPreviewShared",
            url: "?path=/story/preview-projectpreview--project-preview-shared",
          },
        ]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[{ path: "store/actions/project", pathCode: ProjectStore }]}
        apiUsed={[]}
        images={sampleProject}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
