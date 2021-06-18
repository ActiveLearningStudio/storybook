import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {SubSnippet} from './code.js'
import {ApiSnippet} from './apiused';
import subscription from './subscription.png';
import {SubStore} from './subStore.js'
import {Stylesheet}  from './stylesheetUsed.js';
export const Subscription = () => {
   return (
     <>
    <Tabview
    componentName="Subscription"
    path="\src\components\Header\multitenancyDropdown.js"
    description="This is the Description of Compoennt"
    codeSnippet={SubSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-router-dom']}
    customHooks={[
      
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/store/actions/search',pathCode:SubStore}

    ]}
    apiUsed= {[

      {path:'/src/services/storage.service',apicode:ApiSnippet}
    ]}
    images={subscription}

    stylesheetUsed= {Stylesheet}
    examples="https://multitenancy.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
