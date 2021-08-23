import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { TypeSnippet } from "./code.js";
import TypeImg from "./activityType.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const ActivityType = () => {
  return (
    <>
      <Tabview
        componentName="ResourceActivityType"
        path="\src\components\ResourceCard\AddResource\ResourceActivityType.js"
        description="During the creation of new activity, this component will help us
         to pick activity type from the list. In this component, you will see the different
          types of activity from which you will select one of them. Many types of activity will
           be available in the list like audio,
         video, image, text, etc. So you have to select one of them. "
        codeSnippet={TypeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "redux-form",
        ]}
        customHooks={[
          {
            name: "/src/utils/index",
            url: "www.google.com",
          },
          {
            name: "/src/components/InputField/index",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={TypeImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
