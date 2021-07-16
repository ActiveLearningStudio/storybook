import React from "react";

import { Tabview } from "../../../component/Tabview";
import { codeSnippet } from "./userRoleSnippet.js";
import userRole from "./userRole.png";
import { UserRoleStore } from "./userRoleStore.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const UserRole = () => {
  return (
    <>
      <Tabview
        componentName="User Role"
        path="\ActiveLearningStudio-react-client\src\containers\Admin\userrole.js"
        description="In the user role component, you can create a role for every module of the project. You can set roles for projects, playlists, organization, activity, team, groups, etc. For creating roles you will find an accordion for project roles. an accordion for activity role and accordion for all other role permissions.
You have to select checkboxes in each accordion for providing roles to the respective module."
        codeSnippet={codeSnippet}
        libraryUsed={["react-bootstrap", "react-redux", "formik"]}
        customHooks={[]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[
          { path: "store/actions/organization", pathCode: UserRoleStore },
        ]}
        apiUsed={[]}
        images={userRole}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/admin"
      />
    </>
  );
};
