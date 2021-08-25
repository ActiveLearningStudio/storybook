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
        description="These actions are used to update the state of the search module. 
        In the search module, mostly two searches are used which are simple search and 
        advanced search. In order to update the state of these two searches data, simple
         search action will be used. 
        Other actions used in this file are clone search, clone playlist, and clone activity."
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
