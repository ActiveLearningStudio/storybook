import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import RegisterImg from './register.png';
import {Stylesheetused}  from '../stylesheetUsed.js';
import {StoreSnippet} from '../Store.js';
export const Register = () => {
   return (
     <>
    <Tabview
    componentName="RegisterPage"
    path="\src\containers\Auth\RegisterPage.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux','prop-types','react-fontawesome','react-router-dom','validator','swal','query-string']}
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
    images={RegisterImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/register"
    />
    
    </>
  );
};
