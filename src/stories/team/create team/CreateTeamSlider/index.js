import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import TeamSlider from './teamSlider.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\components\CreateTeamSlider\index.js"
    description="In this component, you will create a slider bar for the creation of a team 
    where you will see three links create team, invite members and add a project. 
    When you click on one of them then,that link will be active and show the respective form for creation of team."
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','classnames']}
    customHooks={[
    ]}
    reduxStore= {[
    ]}
    apiUsed= {[
      
    ]}
    images={TeamSlider}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/teams/create-team"

    
    />
    
    </>
  );
};
