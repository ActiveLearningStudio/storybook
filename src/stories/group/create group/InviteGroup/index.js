import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { IndexSnippet } from "./code.js";
import { GroupStore } from "../../groupStore";
import InviteGroup from "./inviteGroup.png";
import { IndexStyle } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Groups\components\InviteGroup\index.js"
        description="In this component, you can add any member to your group.
          There is a button to invite any member to your group. When you click on it,
           then you will see the email list of members from where you can select any
            to send the invite to your group.
          In the end, you will see a continue button to submit your group-related data."
        codeSnippet={IndexSnippet}
        libraryUsed={["prop-types", "react-redux"]}
        customHooks={[
          {
            name: "/src/components/InviteDialogGroup/index",
            url: "www.google.com",
          },
          { name: "/src/utils/index", url: "www.google.com" },
          {
            name:
              "/src/containers/Groups/CreateGroup/components/InviteGroup/MemberItem",
            url: "www.google.com",
          },
        ]}
        reduxStore={[{ path: "/src/store/actions/team", pathCode: GroupStore }]}
        apiUsed={[]}
        images={InviteGroup}
        stylesheetUsed={IndexStyle}
        examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"
      />
    </>
  );
};
