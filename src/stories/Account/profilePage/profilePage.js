import React from "react";
import { Tabview } from "../../../component/Tabview";
import { ProfileSnippet } from "./code.js";
import ProfilePageImg from "./profilePage.png";
import { PasswordStore } from "../PasswordStore.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ProfilePage = () => {
  return (
    <>
      <Tabview
        componentName="ProfilePage"
        path="\src\containers\Account\ProfilePage.js"
        description="In this component, you will see the details related to your profile. You will see your personal and organizational detail. On the other hand, you can also update your organization and personal detail. For updating your profile, You have to edit your profile page form, by entering your new name, phone number, organization name, select organization type, etc.
After form submission, your profile will be updated. In the end, you can also see your LMS publishing list which is associated with your account."
        codeSnippet={ProfileSnippet}
        libraryUsed={[
          "react-redux",
          "props-types",
          "react-fontawesome",
          "validator",
          "swal",
        ]}
        customHooks={[
          { name: "/src/utils/index", url: "www.google.com" },
          { name: "/src/components/Footer/index", url: "www.google.com" },
          { name: "/src/containers/Auth/Error", url: "www.google.com" },
        ]}
        reduxStore={[
          { path: "/src/store/actions/auth", pathCode: PasswordStore },
        ]}
        apiUsed={[]}
        images={ProfilePageImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/account"
      />
    </>
  );
};
