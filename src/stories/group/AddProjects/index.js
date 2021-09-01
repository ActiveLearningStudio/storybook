import React from "react";
import { Tabview } from "../../../component/Tabview";
import { IndexSnippet } from "./code.js";
import AddProject from "./AddProject.png";
import { GroupStore } from "../groupStore.js";
import { IndexStyle } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Groups\AddProjects\index.js"
        description="In this component, you will see the heading of the Add Project Section.
          After this, you will find a section where we have a search box and panel to display the project.
           You can search through the search
          box and select any project from the list to add to the group which you are creating."
        codeSnippet={IndexSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "react-fontawesome",
        ]}
        customHooks={[
          {
            name:
              "/src/containers/Groups/CreateGroup/components/AssignProject/index",
            url: "?path=/story/groups-creategroup-assignproject--index",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/group", pathCode: GroupStore },
        ]}
        apiUsed={[]}
        images={AddProject}
        stylesheetUsed={IndexStyle}
        examples="https://dev.currikistudio.org/org/currikistudio/groups"
      />
    </>
  );
};
