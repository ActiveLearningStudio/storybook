import React from 'react';

import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './userRoleSnippet.js'
import userRole from './userRole.png';
import {UserRoleStore} from './userRoleStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const UserRole = () => {
   return (
     <>
    <Tabview
    componentName="User Role"
    path="\ActiveLearningStudio-react-client\src\containers\Admin\userrole.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','formik']}
    customHooks={[
      
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'store/actions/organization',pathCode:UserRoleStore}

    ]}
    apiUsed={
      []
    }
    images={userRole}

    stylesheetUsed= {Stylesheetused}
    examples="https://multitenancy.currikistudio.org/org/currikistudio/admin"

    
    />
    
    </>
  );
};
