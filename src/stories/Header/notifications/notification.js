import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import IndexPageimg from './indexPage.png';
import {NotiStore} from './NotiStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Notification = () => {
   return (
     <>
    <Tabview
    componentName="Notification"
    path="\src\components\Header\notification.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-router-dom']}
    customHooks={[
      {name:'containers/Notification/NotificationArea',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/notification',pathCode:NotiStore}

    ]}
    apiUsed= {[
      
    ]}
    images={IndexPageimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://multitenancy.currikistudio.org/org/currikistudio/admin"

    
    />
    
    </>
  );
};
