import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import DelPopup from "./deletepopup.png";
import { Stylesheetused } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="DeletePopup"
        path="\src\components\DeletePopup\index.js"
        description="This component will help you to delete the playlist,
         through a popup modal. When you click on the delete playlist button 
         then you will see a popup modal where a message will appear to confirm your action.
          If you are sure to delete the playlist then click on the delete button then your 
          playlist will be deleted."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types"]}
        customHooks={[{ name: "/src/utils/index", url: "www.google.com" }]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[]}
        apiUsed={[]}
        images={DelPopup}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
