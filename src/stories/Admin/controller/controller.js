import React from "react";
import "./controller.css";
import { Tabview } from "../../../component/Tabview";
import { codeSnippet } from "./code.js";
import controllerimg from "./controllerimg.png";
import { ControllerStore } from "./controllerStore.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Controller = () => {
  return (
    <>
      <Tabview
        componentName="Controller"
        path="\ActiveLearningStudio-react-client\src\containers\Admin\controller.js"
        description="This is the controller component, which is used to control stats, projects, organization, users, etc. 
         In the controller panel, you will see a tab for managing projects, activities, users, etc.
If you click on organization, then organization data will be shown below in the table. 
If you click on the project then all the data related to your project will be shown in the table.
 In this from your o, you can see all other tabs data.
In the data panel, there is a dropdown where you can set your entries how much you want to show in 
the table. you can also set a filter on the data where you can filter through members, users,
 organizations, etc.
In the user's controller page, on the top right corner, you can also add a new user from your 
organization, from your team, or add an external user."
        codeSnippet={codeSnippet}
        libraryUsed={["react-bootstrap", "react-redux", "react-fontawesome"]}
        customHooks={[
          {
            name: "containers/ManageOrganization/inviteAdmin",
            url: "",
          },
          {
            name: "containers/ManageOrganization/addUser",
            url: "",
          },
        ]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[
          { path: "/src/store/actions/admin", pathCode: ControllerStore },
        ]}
        apiUsed={[]}
        stylesheetUsed={Stylesheetused}
        images={controllerimg}
        examples="https://dev.currikistudio.org/org/currikistudio/admin"
      />
    </>
  );
};
