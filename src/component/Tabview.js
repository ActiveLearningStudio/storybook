import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabview.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Libraries} from './libraries'
import {Customhooks} from './Customhooks.js'
export const Tabview = (props) => {

   const { description, path, codeSnippet, libraryUsed, customHooks, images, componentName,stylesheetUsed,examples } = props;
   //console.log(props)
   return (
      <div>

         <h2>{componentName} Component</h2>
         <Tabs className="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="profile" title="Path" style={{ margin: '0' }}>
               <div className="tab-text path-text">
                  {path}
               </div>

            </Tab>
            <Tab eventKey="Description" title="Description">
               <div className="tab-text desc-text">
                  {description}
               </div>

            </Tab>


            <Tab eventKey="codeSnippet" title="Code Snippets" >
               <div className="tab-text desc-text">


                  <SyntaxHighlighter language="javascript" style={docco}>
                     {codeSnippet}
                  </SyntaxHighlighter>


               </div>

            </Tab>
            <Tab eventKey="librariesUsed" title="Libraries Used" >
               <div className="tab-text desc-text">
                  <Libraries
                     libUsed={libraryUsed}
                  />
               </div>
            </Tab>
            <Tab eventKey="customHooks" title="Custom Hooks" >
               <div className="tab-text desc-text">
                  
                      
                        <div>
                           {customHooks?.map((key) => {
                              
                           return ( <div>
                                <h5>{key.name}</h5>
                                <a href={key.url} target="_blank">link to library</a>
                                </div>
                                 )
                           }
                           )}
                         </div>
                  
               </div>
            </Tab>
            
            <Tab eventKey="stylesheet" title="Stylesheet" >
               <div className="tab-text desc-text">
               <SyntaxHighlighter language="javascript" style={docco}>
               {stylesheetUsed}
                  </SyntaxHighlighter>
                
               </div>
            </Tab>
            <Tab eventKey="screenshot" title="Screenshots" >
               <div className="tab-text desc-text">
               <img src={images} className="App-logo" alt="logo" />
                  
               </div>
            </Tab>
            <Tab eventKey="example" title="Examples" >
               <div className="tab-text desc-text">
               <a href={examples} target="_blank" >Go to the Page</a>
               </div>
            </Tab>
         </Tabs>
      </div>
   );
};





