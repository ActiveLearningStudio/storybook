import React from 'react';

import { Tabview } from '../../../component/Tabview'
import { ApiCode} from './apiCode';
import {codeSnippet} from './tableSnippet.js'
import TablePageimg from './table.png';
import {TableStore} from './tablestore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Tables = () => {
   return (
     <>
    <Tabview
    componentName="Admin Tables"
    path="\src\containers\Admin\tables.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','prop-types','react-js-pagination','swal']}
    customHooks={[
      
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'store/actions/resource',pathCode:TableStore}

    ]}
    apiUsed ={[
      {path:'services/admin.service',apicode:ApiCode}
    ]}
    
    images={TablePageimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/admin"

    
    />
    
    </>
  );
};
