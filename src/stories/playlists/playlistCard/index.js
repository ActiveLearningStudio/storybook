import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import PlaylistCard from './PlaylistCard.png';
import {CardStore} from './CardStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Playlists\playlisCard\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types','swal','react-beautiful-dnd']}
    customHooks={[
      {name:'/src/components/ResourceCard/index',url:'www.google.com'},{name:'/src/components/ResourceCard/index',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/ui',pathCode:CardStore}

    ]}
    apiUsed= {[
      
    ]}
    images={PlaylistCard}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/"

    
    />
    
    </>
  );
};
