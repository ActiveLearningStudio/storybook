import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import Searchimg from './search.png';
import {IndexStore} from './indexStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Search\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-js-pagination','react-redux','react-fontawesome','react-bootstrap']}
    customHooks={[
      {name:'/src/components/ResourceCard/AddResource/dropdownData',url:'www.google.com'},
      {name:'/src/containers/Search/CloneModel',url:'www.google.com'},
      {name:'/src/components/Footer/index',url:'www.google.com'}

    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/search',pathCode:IndexStore}
    ]}
    apiUsed= {[
      
    ]}
    images={Searchimg}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/search?q=project&type=private&grade=&education=&h5p="

    
    />
    
    </>
  );
};
