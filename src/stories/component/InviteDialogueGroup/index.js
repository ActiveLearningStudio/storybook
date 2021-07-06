import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./InviteDialogouGroup.png";
import StoreSnippet from "./StoreSnippet";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="InviteDialogGroup"
        path="\src\components\InviteDialogueGroup\index.js"
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
          { path: "/src/store/actions/group", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/groups/41"
      />
    </>
  );
};
