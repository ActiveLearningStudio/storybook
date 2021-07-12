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
        description="This is the Description of Compoennt"
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
