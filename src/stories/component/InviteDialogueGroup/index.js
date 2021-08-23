import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./InviteDialogouGroup.png";
import { StoreSnippet } from "./StoreSnippet.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="InviteDialogGroup"
        path="\src\components\InviteDialogueGroup\index.js"
        description="This is the component for inviting any member to any group.
         In group module, when you will click on the invite button then you will see a modal
          where you can search members for joining your group. You can select multiple members 
          from there and then click on the invite button. 
        In this way, you can invite any member to join your group."
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
