import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {ChangeSnippet} from './code.js'
import ChangePasswordImg from './ChangePassword.png';
import {PasswordStore} from '../PasswordStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const ChangePassword = () => {
   return (
     <>
    <Tabview
    componentName="ChangePasswordPage"
    path="\src\containers\Account\ChangePasswordPage.js"
    description="This is the Description of Compoennt"
    codeSnippet={ChangeSnippet}
    libraryUsed={['react-redux','props-types','react-fontawesome','validator','swal']}
    customHooks={[ 
      {name:'/src/utils/index',url:'www.google.com'},
      {name:'/src/components/Footer/index',url:'www.google.com'},
      {name:'/src/containers/Auth/Error',url:'www.google.com'}
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/auth',pathCode:PasswordStore}

    ]}
    apiUsed= {[
      
    ]}
    images={ChangePasswordImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/change-password"
    />
    
    </>
  );
};
