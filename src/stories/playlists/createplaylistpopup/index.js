import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import CreatePlaylist from './createplaylist.png';

import {Stylesheetused}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Playlists\index.js"
    description="In this component, you can create a playlist for any project. 
    When you click on create playlist button then a popup will be displayed where
     you can enter your playlist name and then click on add button. After this, your playlist
     name will be displayed in the project, where you can add activity to the playlist."
    codeSnippet={codeSnippet}
    libraryUsed={['prop-types']}
    customHooks={[
      {name:'/src/utils/index',url:'?path=/story/utils-index--component'}
    ]}

    reduxStore= {[

    ]}
    apiUsed= {[
      
    ]}
    images={CreatePlaylist}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/"

    
    />
    
    </>
  );
};
