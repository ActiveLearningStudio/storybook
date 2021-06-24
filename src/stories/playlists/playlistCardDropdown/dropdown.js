import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {DropdownSnippet} from './code.js'
import Dropdownimg from './playlistCardDropdown.png';
import {DropdownStore} from './dropdownStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Dropdown = () => {
   return (
     <>
    <Tabview
    componentName="PlaylistCardDropdown"
    path="\src\containers\Playlists\playlisCard\PlaylistCardDropdown.js"
    description="This is the Description of Compoennt"
    codeSnippet={DropdownSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types']}
    customHooks={[
      {name:'/src/components/ResourceCard/ShareLink',url:'www.google.com'},{name:'/src/components/ResourceCard/shareResource',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/playlist',pathCode:DropdownStore}

    ]}
    apiUsed= {[
      
    ]}
    images={Dropdownimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/"

    
    />
    
    </>
  );
};
