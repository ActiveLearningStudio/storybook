import React from "react";
import "./index.css";
import { Tabview } from "../../../component/Tabview";
import { codeSnippet } from "./code.js";
import IndexPageimg from "./indexPage.png";
import { IndexStore } from "./indexStore.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\ActiveLearningStudio-react-client\src\containers\Admin\index.js"
        description="This is the component of the index page of the admin module.
        In this component, we have a tab for switching into the different modules. For example, you can switch into organization for showing organization and LMS for  Showing LMS setting.
         There is also a table that shows the details of every module.  If you go to the organization module in the above tab, you will see an image of the organization, Domain, project into this organization, and another lot of information related to the organization module."
        codeSnippet={codeSnippet}
        libraryUsed={["react-bootstrap", "react-redux", "react-fontawesome"]}
        customHooks={[
          { name: "./formik/createActivityItem", url: "?path=/story/admin-formik--create-activity-item" },
          { name: "./formik/createOrg", url: "?path=/story/admin-formik--create-org" },
          { name: "./formik/addRole", url: "?path=/story/admin-formik--add-role" },
          { name: "./formik/createuser", url: "?path=/story/admin-formik--create-user" },
        ]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[
          { path: "/src/store/actions/admin", pathCode: IndexStore },
        ]}
        apiUsed={[]}
        images={IndexPageimg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/admin"
      />
    </>
  );
};
