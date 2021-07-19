import React from "react";
import { Tabview } from "../../../component/Tabview";
import { codeSnippet } from "./code.js";
import Indeximg from "./projectIndex.png";
import { ProjectStore } from "../projectStore.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Projects\index.js"
        description="This is the main component of my project module.
         In this component, you will see a panel to show all projects
          with some necessary information. You will see a card of every
           project where the project title, project description, and project thumbnails are shown.
         In the other two tabs, you will see sample projects and favorite projects.
      As this is the main component of the project module, that's why a lot of others components 
      are imported into this component, which are used further to show project's information."
        codeSnippet={codeSnippet}
        libraryUsed={[
          "react-bootstrap",
          "react-redux",
          "react-fontawesome",
          "react-router-dom",
          "prop-types",
          "react-placeholder",
          "react-beautiful-dnd",
        ]}
        customHooks={[
          { name: "/src/components/Footer/index", url: "www.google.com" },
          { name: "/src/components/DeletePopup/index", url: "www.google.com" },
          { name: "components/Loading/ProjectsLoading", url: "www.google.com" },
          { name: "components/models/GoogleLoginModal", url: "" },
          { name: "./ProjectCard", url: "www.google.com" },
          { name: "./SampleProjectCard", url: "" },
          { name: "./NewProjectPage", url: "www.google.com" },
        ]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[{ path: "store/actions/project", pathCode: ProjectStore }]}
        apiUsed={[]}
        images={Indeximg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
