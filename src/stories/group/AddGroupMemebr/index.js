import React from "react";
import { Tabview } from "../../../component/Tabview";
import { IndexSnippet } from "./code.js";
import AddGroupMember from "./AddGroupMember.png";
import { GroupStore } from "../groupStore.js";
import { IndexStyle } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Groups\AddMember\index.js"
        description="In Add Group Member, you will see a search box and one button to 
        add any member to your group.
         You can search an  email of any  members and then add to your group."
        codeSnippet={IndexSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "swal",
          "react-fontawesome",
          "lodash",
        ]}
        customHooks={[
          {
            name: "/src/containers/Groups/AddMembers/GroupMember",
            url: "",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/group", pathCode: GroupStore },
        ]}
        apiUsed={[]}
        images={AddGroupMember}
        stylesheetUsed={IndexStyle}
        examples="https://dev.currikistudio.org/org/currikistudio/groups"
      />
    </>
  );
};
