import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Project = () => {
  return (
    <>
      <Tabview
        componentName="Project"
        path="\src\store\reducers\project.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          {
            name: "/src/logic/lmsCourse",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actionTypes", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
