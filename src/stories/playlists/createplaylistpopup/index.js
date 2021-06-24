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
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['prop-types']}
    customHooks={[
      {name:'/src/utils/index',url:'www.google.com'}
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
