import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";

export const Notification = () => {
  return (
    <>
      <Tabview
        componentName="Notification"
        path="\src\store\actions\notification.js"
        description="The action components related to get all notifications, 
        delete notifications and clear notifications are present in this file.
         To perform actions for the notification module all these components will be used. 
         Each component will dispatch action 
        type and response data to the reducer component of the notification module."
        codeSnippet={CodeSnippet}
        libraryUsed={["swal", "laravel-echo"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
        ]}
        reduxStore={[]}
        apiUsed={[
          { path: "/src/services/notification.service", apicode: ApiCode },
        ]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
