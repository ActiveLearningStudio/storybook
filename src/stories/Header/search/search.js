import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {SearchSnippet} from './code.js'
import Searchimg from './search.png';
import {SearchStore} from './searchStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Search = () => {
   return (
     <>
    <Tabview
    componentName="Search Form"
    path="\src\components\Header\searchForm.js"
    description="This is the Description of Compoennt"
    codeSnippet={SearchSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-router-dom','swal','formik','react-fontawesome']}
    customHooks={[
      {name:'/src/components/ResourceCard/AddResource/dropdownData',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/store/actions/search',pathCode:SearchStore}

    ]}
    apiUsed= {[
      
    ]}
    images={Searchimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
