import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import ForgetPasswordImg from './ForgetPassword.png';
import {Stylesheetused}  from '../stylesheetUsed.js';
import {StoreSnippet} from '../Store.js';
export const ForgetPassword = () => {
   return (
     <>
    <Tabview
    componentName="ForgetPasswordPage"
    path="\src\containers\Auth\ForgetPasswordPage.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux','prop-types','react-fontawesome','react-router-dom','validator','swal']}
    customHooks={[ 
      {name:'/src/utils/index',url:'www.google.com'},
      {name:'/src/containers/Auth/Error',url:'www.google.com'},
      {name:'/src/containers/Auth/Logo',url:'www.google.com'}
      
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/auth',pathCode:StoreSnippet}
    ]}
    apiUsed= {[  
    ]}
    images={ForgetPasswordImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/forgot-password"
    />
    
    </>
  );
};
