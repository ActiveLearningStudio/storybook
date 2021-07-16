import React from "react";
import "./formik.css";
import { CreateActivitySnippet } from "./createActivityCode.js";
import { CreateActivityStoreCode } from "./createActivityStoreCode.js";
import { AddRoleSnippet } from "./addRole.js";
import { CreateLmsApi } from "./createLmsApi.js";
import { CreateLmsStore } from "./createLmsStore";
import { CreateLmsSnippet } from "./createLms.js";
import { ActivityItemSnippet } from "./activityItemSnippet.js";
import { AddRoleStoreCode } from "./AddRoleStoreCode.js";
import Addroleimg from "./addRoleimg.png";
import createLms from "./createLms.png";
import ActivityItemimg from "./addActivityItem.PNG";
import createActivityimg from "./addActivity.PNG";
import { CreateOrgSnippet } from "./orgSnippet.js";
import { CreateUserSnippet } from "./createUserSnippet.js";
import CreateUserimg from "./createUser.png";
import createorg from "./createOrg.png";
import { Stylesheetused } from "./stylesheetUsed.js";
import { Story, Meta } from "@storybook/react";

import { Formik } from "./formik.js";

export default {
  title: "Admin/Formik",
  component: Formik,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Formik {...args} />;

export const AddRole = Template.bind({});

AddRole.args = {
  componentName: "Add Role ",
  path: "/src/containers/Admin/formik/addRole.js",
  description:
    "In add role component, you can add a new role. The member account which has permission can set add, edit and delete roles related to the project, activities, playlist, etc. In this component, you can set your organization role like add organization, edit organization, view, invite, update thumb, remove user, and other lots of functionalities which you can set.  In this way, you can add roles related to every module like roles related to project, roles related to activities, and roles related to users.",
  codeSnippet: AddRoleSnippet,
  libraryUsed: ["react-bootstrap", "react-redux", "formik", "swal"],
  customHooks: [],
  reduxStore: [
    { path: "/src/store/actions/organization", pathCode: AddRoleStoreCode },
  ],
  apiUsed: [],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images: Addroleimg,
  stylesheetUsed: Stylesheetused,
  examples: "https://dev.currikistudio.org/org/currikistudio/admin",
};
export const CreateActivity = Template.bind({});
CreateActivity.args = {
  componentName: "Create Activity ",
  path: "/src/containers/Admin/formik/createActivity.js",
  description:
    "This is the component of creating a new activity. In this component, you can create a new activity by submitting a form where you will enter the title of the activity, upload the image, and order the activity.  After submitting the form, click on the create new activity button. In this way, your new activity will be created.",
  codeSnippet: CreateActivitySnippet,
  libraryUsed: ["react-bootstrap", "react-redux", "formik", "swal"],
  customHooks: [],
  reduxStore: [
    { path: "/src/store/actions/resource", pathCode: CreateActivityStoreCode },
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images: createActivityimg,
  stylesheetUsed: Stylesheetused,
  examples: "https://dev.currikistudio.org/org/currikistudio/admin",
};
export const CreateActivityItem = Template.bind({});
CreateActivityItem.args = {
  componentName: "Create Activity Item ",
  path: "/src/containers/Admin/formik/createActivityItem.js",
  description:
    "In create an activity item, you have a form to add a new activity item where you will enter your title, description, upload image, and select activity type from the dropdown list. when you will enter all these details then you have to click on submit button. Then your activity type will be created.",
  codeSnippet: ActivityItemSnippet,
  libraryUsed: ["react-bootstrap", "react-redux", "formik", "prop-types"],
  customHooks: [],
  reduxStore: [
    { path: "/src/store/actions/resource", pathCode: CreateActivityStoreCode },
  ],
  apiUsed: [],
  images: ActivityItemimg,
  stylesheetUsed: Stylesheetused,
  examples: "https://dev.currikistudio.org/org/currikistudio/admin",
};

export const CreateLms = Template.bind({});
CreateLms.args = {
  componentName: "Create Lms",
  path: "/src/containers/Admin/formik/createLms.js",
  description:
    "This is the component of creating the LMS setting. In this component, you will see the form for creating the LMS setting. when you click on the LMS setting button, you will get a form, where you will put information related to the site name, LMS Access token, access key, secret key, description, etc" +
    "After filling the form you have to submit the create Lms setting form and then your LMS will be created.",
  codeSnippet: CreateLmsSnippet,
  libraryUsed: [
    "react-bootstrap",
    "react-redux",
    "formik",
    "prop-types",
    "swal",
  ],
  customHooks: [{ name: "organizationapi", url: "" }],
  reduxStore: [{ path: "store/actions/admin", pathCode: CreateLmsStore }],
  apiUsed: [
    { path: "../../../services/organizations.services", apicode: CreateLmsApi },
  ],
  images: createLms,
  stylesheetUsed: Stylesheetused,
  examples: "https://dev.currikistudio.org/org/currikistudio/admin",
};
export const CreateOrg = Template.bind({});
CreateOrg.args = {
  componentName: "Createorg",
  path: "/src/containers/Admin/formik/createOrg.js",
  description:
    "In create Org component, you can create a new organization by filling a form with some data." +
    " In create Org form, you have to enter the organization name, upload an image of the organization as" +
    "a thumbnail, enter the description and domain. After putting this information you can click on Create organization." +
    "After all of this, your created organization will reflect on the dashboard.",
  codeSnippet: CreateOrgSnippet,
  libraryUsed: ["react-bootstrap", "react-redux", "formik", "swal"],
  customHooks: [],
  reduxStore: [{ path: "store/actions/admin", pathCode: CreateLmsStore }],
  apiUsed: [],
  images: createorg,
  stylesheetUsed: Stylesheetused,
  examples: "https://dev.currikistudio.org/org/currikistudio/admin",
};
export const CreateUser = Template.bind({});
CreateUser.args = {
  componentName: "CreateUser",
  path: "/src/containers/Admin/formik/createuser.js",
  description:
    "This is the component for creating a new user. In this form, you will find some necessary" +
    "information to fill for creating a new user, when you will fill the form with necessary details" +
    "like user name, email, password organization name, etc. then you have to submit this form. In this way," +
    " you will create a new user for using the curriki studio account.",
  codeSnippet: CreateUserSnippet,
  libraryUsed: ["react-bootstrap", "react-redux", "formik", "swal"],
  customHooks: [],
  reduxStore: [{ path: "store/actions/admin", pathCode: CreateLmsStore }],
  apiUsed: [],
  images: CreateUserimg,
  stylesheetUsed: Stylesheetused,
  examples: "https://dev.currikistudio.org/org/currikistudio/admin",
};
