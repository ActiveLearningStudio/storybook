import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import LoginImg from './login.png';
import {Stylesheetused}  from '../stylesheetUsed.js';
import {StoreSnippet} from '../Store.js';
export const Login = () => {
   return (
     <>
    <Tabview
    componentName="LoginPage"
    path="\src\containers\Auth\LoginPage.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux','prop-types','react-fontawesome','react-router-dom','validator']}
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
    images={LoginImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/login"
    />
    
    </>
  );
};
