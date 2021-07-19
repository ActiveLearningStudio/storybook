import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { IndexSnippet } from "./code.js";
import AssignProject from "./AssignProjects.png";
import { IndexStyle } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Groups\components\AssignProjects\index.js"
        description="In this component, you will see the heading of the assign project section.
        After this, you will find a section where we have a search box and panel to display the project.
          You can search through the search
        box and select any project from the list to add to the group which you are creating."
        codeSnippet={IndexSnippet}
        libraryUsed={["prop-types", "react-fontawesome"]}
        customHooks={[{ name: "/src/utils/index", url: "www.google.com" }]}
        reduxStore={[]}
        apiUsed={[]}
        images={AssignProject}
        stylesheetUsed={IndexStyle}
        examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"
      />
    </>
  );
};
