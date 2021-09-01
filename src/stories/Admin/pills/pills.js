import React from "react";
import { ApiCode } from "./apiCode.js";
import { Tabview } from "../../../component/Tabview";
import { codeSnippet } from "./pillsSnippet.js";
import IndexPageimg from "./indexPage.png";
import { PillStore } from "./pillStore.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Pills = () => {
  return (
    <>
      <Tabview
        componentName="Pills"
        path="\ActiveLearningStudio-react-client\src\containers\Admin\pills.js"
        description="This is the component of pill functionality. In this component, you will see all the inner tabs which you are using in the table of the administrate module. 
You can switch to different functions which are used in each table.
You can go to all users, manage roles, and perform other functionalities which are related to every module."
        codeSnippet={codeSnippet}
        libraryUsed={["react-bootstrap", "react-redux", "prop-types"]}
        customHooks={[
          { name: "./starter", url: "" },
          { name: "./column", url: "" },
        ]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[{ path: "store/actions/resource", pathCode: PillStore }]}
        apiUsed={[{ path: "services/admin.service", apicode: ApiCode }]}
        images={""}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/admin"
      />
    </>
  );
};
