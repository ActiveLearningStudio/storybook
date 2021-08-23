import React from 'react';
import { Tabview } from '../../../../component/Tabview'
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
    description="In this, you will see the component for the search modal.
     When you click on the search bar in the header section then a modal will appear. 
     In this modal, you will see three radio buttons for a different search option.
      By switching into these radio buttons a form which is created through formik modal
       will be opened to enter search details. After entering details, you will hit the 
       search button to get your expected search results."
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
