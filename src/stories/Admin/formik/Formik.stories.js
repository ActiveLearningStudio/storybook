import React from 'react';
import './formik.css';
import {CreateActivitySnippet} from './createActivityCode.js'
import {CreateActivityStoreCode} from './createActivityStoreCode.js'
import {AddRoleSnippet} from './addRole.js'
import {CreateLmsStore} from  './createLmsStore'
import {CreateLmsSnippet} from './createLms.js'
import {ActivityItemSnippet} from './activityItemSnippet.js'
import {AddRoleStoreCode} from './AddRoleStoreCode.js'
import Addroleimg from './addRoleimg.png';
import createLms from './createLms.png';
import ActivityItemimg  from './addActivityItem.PNG'
import createActivityimg from './addActivity.PNG'
import {CreateOrgSnippet} from './orgSnippet.js'
import {CreateUserSnippet} from './createUserSnippet.js'
import CreateUserimg from './createUser.png'
import createorg from './createOrg.png'
import {Stylesheetused}  from './stylesheetUsed.js';
import { Story, Meta } from '@storybook/react';

import { Formik } from './formik.js';

export default {
  title: 'Admin/Formik',
  component: Formik,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} 

const Template = (args) => <Formik { ... args} />;


export const AddRole = Template.bind({});

AddRole.args = {
  componentName:"Add Role ",
  path:"/src/containers/Admin/formik/addRole.js",
  description:" Description of Component",
  codeSnippet:AddRoleSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','formik','swal'],
  customHooks:[
    
    
  ],
  reduxStore: [
    {path:'/src/store/actions/organization',pathCode:AddRoleStoreCode},
    
    
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:Addroleimg,
  stylesheetUsed: Stylesheetused,
  examples:"https://multitenancy.currikistudio.org/org/currikistudio/admin"
};
 export const CreateActivity = Template.bind({});
 CreateActivity.args = {
  componentName:"Create Activity ",
  path:"/src/containers/Admin/formik/createActivity.js",
  description:" Description of Component",
  codeSnippet:CreateActivitySnippet,
  libraryUsed:['react-bootstrap', 'react-redux','formik','swal'],
  customHooks:[
    
    
  ],
  reduxStore: [
    {path:'/src/store/actions/resource',pathCode:CreateActivityStoreCode},
    
    
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:createActivityimg,
  stylesheetUsed: Stylesheetused,
  examples:"https://multitenancy.currikistudio.org/org/currikistudio/admin"
};
 export const CreateActivityItem = Template.bind({});
 CreateActivityItem.args = {
  componentName:"Create Activity Item ",
  path:"/src/containers/Admin/formik/createActivityItem.js",
  description:" Description of Component",
  codeSnippet:ActivityItemSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','formik','prop-types'],
  customHooks:[
    
    
  ],
  reduxStore: [
    {path:'/src/store/actions/resource',pathCode:CreateActivityStoreCode},
    
    
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:ActivityItemimg,
  stylesheetUsed: Stylesheetused,
  examples:"https://multitenancy.currikistudio.org/org/currikistudio/admin"
};

 export const CreateLms = Template.bind({});
 CreateLms.args = {
  componentName:"Create Lms",
  path:"/src/containers/Admin/formik/createLms.js",
  description:" Description of Component",
  codeSnippet:CreateLmsSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','formik','prop-types','swal'],
  customHooks:[
    
    {name:'organizationapi',url:''}
    
  ],
  reduxStore: [
    {path:'store/actions/admin',pathCode:CreateLmsStore},
    
    
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:createLms,
  stylesheetUsed: Stylesheetused,
  examples:"https://multitenancy.currikistudio.org/org/currikistudio/admin"
};
 export const CreateOrg = Template.bind({});
 CreateOrg.args = {
  componentName:"Createorg",
  path:"/src/containers/Admin/formik/createOrg.js",
  description:" Description of Component",
  codeSnippet:CreateOrgSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','formik','swal'],
  customHooks:[
    
    
    
  ],
  reduxStore: [
    {path:'store/actions/admin',pathCode:CreateLmsStore},
    
    
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:createorg,
  stylesheetUsed: Stylesheetused,
  examples:"https://multitenancy.currikistudio.org/org/currikistudio/admin"
};
 export const CreateUser = Template.bind({});
 CreateUser.args = {
  componentName:"CreateUser",
  path:"/src/containers/Admin/formik/createuser.js",
  description:" Description of Component",
  codeSnippet:CreateUserSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','formik','swal'],
  customHooks:[
    
    
    
  ],
  reduxStore: [
    {path:'store/actions/admin',pathCode:CreateLmsStore},
    
    
  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:CreateUserimg,
  stylesheetUsed: Stylesheetused,
  examples:"https://multitenancy.currikistudio.org/org/currikistudio/admin"
};
