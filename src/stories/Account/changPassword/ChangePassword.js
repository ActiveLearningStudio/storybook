import React from "react";
import { Tabview } from "../../../component/Tabview";
import { ChangeSnippet } from "./code.js";
import ChangePasswordImg from "./ChangePassword.png";
import { PasswordStore } from "../PasswordStore.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ChangePassword = () => {
  return (
    <>
      <Tabview
        componentName="ChangePasswordPage"
        path="\src\containers\Account\ChangePasswordPage.js"
        description="This is the description of the change password component. In this component,
     you can change the password of your curriki studio account.
For changing the password, go to the profile and click on change password.
 Then you will redirect to the change password form, enter your previous password, 
 and set your new password. After this, submit your form then your password will be changed."
        codeSnippet={ChangeSnippet}
        libraryUsed={[
          "react-redux",
          "props-types",
          "react-fontawesome",
          "validator",
          "swal",
        ]}
        customHooks={[
          { name: "/src/utils/index", url: "?path=/story/utils-index--component" },
          { name: "/src/components/Footer/index", url: "?path=/story/component-footer-index--component" },
          { name: "/src/containers/Auth/Error", url: "" },
        ]}
        reduxStore={[
          { path: "/src/store/actions/auth", pathCode: PasswordStore },
        ]}
        apiUsed={[]}
        images={ChangePasswordImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/change-password"
      />
    </>
  );
};
