import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import notification from './notification.png';
import {Stylesheetused}  from '../stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Notification\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux']}
    customHooks={[ 
      {name:'/src/containers/Notification/NotificationArea',url:'www.google.com'}
    ]}
    
    reduxStore= {[
    ]}
    apiUsed= {[  
    ]}
    images={notification}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/notification"
    />
    
    </>
  );
};
