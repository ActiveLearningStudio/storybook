import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
import { StoreSnippet } from "./storeSnippet";
export const Search = () => {
  return (
    <>
      <Tabview
        componentName="Search"
        path="\src\store\actions\search.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["swal"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
        ]}
        reduxStore={[{ path: "/src/store/index", pathCode: StoreSnippet }]}
        apiUsed={[{ path: "/src/services/search.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
