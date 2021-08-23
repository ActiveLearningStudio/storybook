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
        description="In the Invite dialogue box, you can invite any team member through
         this component. There is a search box where a user can search for any team member 
         and then click on the invite button to invite that selected team member. 
        After this, you can also add a special note with your invite to personalize your invitation."
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
