import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const SearchServices = () => {
  return (
    <>
      <Tabview
        componentName="SearchServices"
        path="\src\services\search.services.js"
        description="This service module is used for search purposes. 
        You can get your advanced search data through this service module.
         Whenever you will search through the front end then APIs used
          in this module will be called and then provide you the search result."
        codeSnippet={CodeSnippet}
        libraryUsed={["config", "swal"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/http.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
