import React from "react";
import { Tabview } from "../../../component/Tabview";
import { IndexSnippet } from "./code.js";
import GroupMemberView from "./GroupMemberView.png";
import { GroupStore } from "../groupStore.js";
import { IndexStyle } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Groups\GroupsMemberView\index.js"
        description="Members which are present in each group will be displayed by this component.
           At the top, you will see the name of the group. After this, an email address with the name
            of all the members of the group will be displayed, which you can also filter through 
            search and find the specific one. On the right side,
          you will see the description of the group and projects related to that group."
        codeSnippet={IndexSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "swal",
          "react-fontawesome",
          "react-router-dom",
        ]}
        customHooks={[
          {
            name: "/src/components/InviteDialogGroup/index",
            url: "?path=/story/component-invitedialoguegroup--component",
          },
          {
            name: " /src/containers/Groups/GroupMemberView/GroupMember",
            url: "",
          },
        ]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[
          { path: "/src/store/actions/group", pathCode: GroupStore },
        ]}
        apiUsed={[]}
        images={GroupMemberView}
        stylesheetUsed={IndexStyle}
        examples="https://dev.currikistudio.org/org/currikistudio/groups/"
      />
    </>
  );
};
