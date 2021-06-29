import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {ProfileSnippet} from './code.js'
import ProfilePageImg from './profilePage.png';
import {PasswordStore} from '../PasswordStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const ProfilePage = () => {
   return (
     <>
    <Tabview
    componentName="ProfilePage"
    path="\src\containers\Account\ProfilePage.js"
    description="This is the Description of Compoennt"
    codeSnippet={ProfileSnippet}
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
    images={ProfilePageImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/account"
    />
    
    </>
  );
};
