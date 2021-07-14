import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Admin = () => {
  return (
    <>
      <Tabview
        componentName="Admin"
        path="\src\store\Reducers\admin.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
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
