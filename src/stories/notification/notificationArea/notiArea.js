import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import notifyArea from './notifyArea.png';
import {NotificationStore} from '../NotificationStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const NotiArea = () => {
   return (
     <>
    <Tabview
    componentName="NotificationArea"
    path="\src\containers\Notification\NotificationArea.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux','react-bootstrap','react-fontawesome','prop-types']}
    customHooks={[ 
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/notification',pathCode:NotificationStore}
    ]}
    apiUsed= {[  
    ]}
    images={notifyArea}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/notification"
    />
    
    </>
  );
};
