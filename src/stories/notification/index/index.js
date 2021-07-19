import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import notification from "./notification.png";
import { Stylesheetused } from "../stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Notification\index.js"
        description="This component will divide the notification area into three sections.
          First for today notification, the second for yesterday, and the third one is for 
          older notification. You will see the notification's list according to the given section. 
          If notification is too older then it will be shown in the older section. If it is one day
          older then it will be shown in yesterday section.
          In this way, a new notification will be shown in today's section."
        codeSnippet={CodeSnippet}
        libraryUsed={["react-redux"]}
        customHooks={[
          {
            name: "/src/containers/Notification/NotificationArea",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[]}
        images={notification}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/notification"
      />
    </>
  );
};
