import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {PreviewSnippet} from './previewSnippet.js'
import Preview from './preview.png';
import {Stylesheet} from './stylesheet.js'


export const PreviewModal = () => {
   return (
     <>
    <Tabview
    componentName="ProjectPreviewModal"
    path="\src\containers\Projects\ProjectPreviewModal\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={PreviewSnippet}
    libraryUsed={['react-router-dom','prop-types']}
    customHooks={[
     
    
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[

    ]}
    apiUsed= {[
      
    ]}
    images={Preview}

    stylesheetUsed= {Stylesheet}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
