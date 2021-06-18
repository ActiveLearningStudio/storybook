import React from 'react';
import './controller.css';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import controllerimg from './controllerimg.png';
import {ControllerStore} from './controllerStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Controller = () => {
   return (
     <>
    <Tabview
    componentName="Controller"
    path="\ActiveLearningStudio-react-client\src\containers\Admin\controller.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap','react-redux','react-fontawesome']}
    customHooks={[
      {name:'containers/ManageOrganization/inviteAdmin',url:'http://localhost:6006/?path=/story/admin-formik--create-user'},{name:'containers/ManageOrganization/addUser',url:'www.pakistan.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/admin',pathCode:ControllerStore}

    ]}
    apiUsed = {[
      

    ]}
    stylesheetUsed= {Stylesheetused}

    images={controllerimg}

    
    examples="https://multitenancy.currikistudio.org/org/currikistudio/admin"

    
    />
    
    </>
  );
};
