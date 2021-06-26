import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import GroupSlider from './GroupSlider.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\components\CreateGroupSlider\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','classnames']}
    customHooks={[
    ]}
    reduxStore= {[
    ]}
    apiUsed= {[
      
    ]}
    images={GroupSlider}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"

    
    />
    
    </>
  );
};
