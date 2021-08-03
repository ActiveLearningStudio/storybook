import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
export const AppRouter = () => {
  return (
    <>
      <Tabview
        componentName="AppRouter"
        path="\src\routers\AppRouter.js"
        description="This is the component for the app route where all the routes of your project
         will be mentioned here. When you go to any page then this component will check the redirect
          link and process that route accordingly. The app route is the entry point of every project
           from where you can control the redirection of any page. On the top, 
        you will import all the components and use them in route to redirect properly."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "history",
          "loadable",
          "ReactGA",
        ]}
        customHooks={[
          {
            name: "components/Header",
            url: "www.google.com",
          },
          {
            name: "/src/components/Sidebar/index",
            url: "www.google.com",
          },
          {
            name: "/src/routers/PublicRoute",
            url: "www.google.com",
          },
          {
            name: "/src/routers/PrivateRoute",
            url: "www.google.com",
          },
          {
            name: "/src/containers/CreateActivity/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/ProjectShareTemplate",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Preview/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Auth/RegisterPage",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Auth/ForgotPasswordPage",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Groups/AddMembers/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Auth/ConfirmEmailPage",
            url: "www.google.com",
          },
          {
            name: "/src/containers/EditActivity/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/LMS/LTI/Activity/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Auth/VevinsityRegistration",
            url: "www.google.com",
          },
          {
            name: "/src/containers/ManageOrganization/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Account/ProfilePage",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Admin/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/LMS/Canvas/DeepLinking/SearchPage/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Groups/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Teams/AddProjects/index",
            url: "www.google.com",
          },
          {
            name: "/src/containers/SecureProjectPreview",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Projects/index",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
