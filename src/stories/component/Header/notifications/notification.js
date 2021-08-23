import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {codeSnippet} from './code.js'
import Notificationimg from './notification.png';
import {NotiStore} from './NotiStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Notification = () => {
   return (
     <>
    <Tabview
    componentName="Notification"
    path="\src\components\Header\notification.js"
    description="This is the component for the notification area of the header section.
     If no notification will present then you will see a message for no notification available
      for now. If you have some notifications link to your profile then you will see all those 
      notifications. There are also divisions for notifications if notifications are older then
       they will be lies in the older section and if notifications are one day older then they
        will be lies in the yesterday section. while your new notifications will be lies in today's section."
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
    images={Notificationimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
