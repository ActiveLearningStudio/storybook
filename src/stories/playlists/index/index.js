import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import PlaylistIndeximg from './playlistIndex.png';
import {PlaylistStore} from '../playlistStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Playlists\index.js"
    description="This is the component for showing all the playlists of the project. 
     At the top right corner, you will see three buttons related to showcasing, project preview, 
     and create a new activity. On the index page, you will see all the playlists in card design.
      In the playlist card, you will see the name of the playlist,
     then the list of all the activities related to that playlist."
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types','react-placeholder','swal','react-beautiful-dnd']}
    customHooks={[
      {name:'/src/components/Footer/index',url:'www.google.com'},{name:'/src/components/DeletePopup/index',url:'www.google.com'},
      {name:'/src/components/ResourceCard/AddResource/index',url:'www.google.com'},{name:'/src/components/ResourceCard/EditResource/index',url:''},
      {name:'/src/containers/Playlists/PlaylistCard/index',url:'www.google.com'},{name:'/src/containers/Playlists/PreviewResourcePage',url:''},
      {name:'/src/containers/Playlists/CreatePlaylistPopup/index',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/resource',pathCode:PlaylistStore}

    ]}
    apiUsed= {[
      
    ]}
    images={PlaylistIndeximg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/"

    
    />
    
    </>
  );
};
