import React from "react";

import { Tabview } from "../../../component/Tabview";
import { ApiCode } from "./apiCode";
import { codeSnippet } from "./tableSnippet.js";
import TablePageimg from "./table.png";
import { TableStore } from "./tablestore.js";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Tables = () => {
  return (
    <>
      <Tabview
        componentName="Admin Tables"
        path="\src\containers\Admin\tables.js"
        description="This is the component of the table which are used throughout the project.
In the admin module, when you click on the tab which is showing at the top of the page. 
Then you will get a table where you will find one header of the table and other lots of rows which are showing details of the module.
In the header of the table, you will find the name, domain, admin, project, sub org, and other information related to every module.
"
        codeSnippet={codeSnippet}
        libraryUsed={[
          "react-bootstrap",
          "react-redux",
          "prop-types",
          "react-js-pagination",
          "swal",
        ]}
        customHooks={[]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[{ path: "store/actions/resource", pathCode: TableStore }]}
        apiUsed={[{ path: "services/admin.service", apicode: ApiCode }]}
        images={TablePageimg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/admin"
      />
    </>
  );
};
