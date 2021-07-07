import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./InviteTeam.png";
import { StoreSnippet } from "./StoreSnippet.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="InviteDialog"
        path="\src\components\InviteDialog\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "validator",
          "react-fontawesome",
          "_sortBy",
          "_debounce",
        ]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/team", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/teams/create-team"
      />
    </>
  );
};
