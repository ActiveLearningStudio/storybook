import React from "react";
import { Tabview } from "../../../component/Tabview";
import { HeadlineSnippet } from "./head.js";
import Headlineimg from "./headline.png";
import { ProjectStore } from "../projectStore.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const Headline = () => {
  return (
    <>
      <Tabview
        componentName="Headline"
        path="\src\containers\Projects\headline.js"
        description="In the headline section, you will see a button to show a popup modal to create a new project.  On the top right corner, you will see some informational text which will tell us what you can do with projects. This text will describe the importance of the project. So this component will be used only to show the headline for the project module."
        codeSnippet={HeadlineSnippet}
        libraryUsed={["react-redux", "react-fontawesome", "react-router-dom"]}
        customHooks={[]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[
          { path: "/src/store/actions/project", pathCode: ProjectStore },
        ]}
        apiUsed={[]}
        images={Headlineimg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
