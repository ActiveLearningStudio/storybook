import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Notification = () => {
  return (
    <>
      <Tabview
        componentName="Notification"
        path="\src\store\reducers\notification.js"
        description="In order to change the state of notification, 
        this reducer component will be used. If you want to get all notifications then 
        the action to get all notifications in this reducer component will be called.
         If you want to delete the notification then the reducer component will call
          the action for delete notification. In this way, this component is used to change 
          the state of the notification module."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actionTypes", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
