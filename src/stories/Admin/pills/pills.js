import React from 'react';
import {ApiCode} from './apiCode.js'
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './pillsSnippet.js'
import IndexPageimg from './indexPage.png';
import {PillStore} from './pillStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Pills = () => {
   return (
     <>
    <Tabview
    componentName="Pills"
    path="\ActiveLearningStudio-react-client\src\containers\Admin\pills.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','prop-types']}
    customHooks={[
      {name:'./starter',url:'www.google.com'},{name:'./column',url:'www.pakistan.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'store/actions/resource',pathCode:PillStore}

    ]}
    apiUsed= {[
      {path:'services/admin.service', apicode:ApiCode}
    ]}
    images={''}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/admin"

    
    />
    
    </>
  );
};
