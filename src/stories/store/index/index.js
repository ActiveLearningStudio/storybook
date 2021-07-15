import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "./storeSnippet";

export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\store\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["redux-thunk"]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/reducers/index", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
