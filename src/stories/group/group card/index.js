import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import GroupCard from './GroupCard.png';
import {GroupStore} from '../groupStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\GroupCard\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome']}
    customHooks={[
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/group',pathCode:GroupStore}
    ]}
    apiUsed= {[
      
    ]}
    images={GroupCard}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups"

    
    />
    
    </>
  );
};
