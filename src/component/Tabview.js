import React from 'react';
import { Tabs, Tab, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabview.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Libraries } from './libraries'

export const Tabview = (props) => {

   const { description, path, codeSnippet, libraryUsed, customHooks,
      images, componentName, stylesheetUsed, examples, reduxStore } = props;
   //console.log(props)
   return (
      <div>

         <h2>{componentName} Component</h2>
         <Tabs className="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="profile" title="Path" style={{ margin: '0' }}>
               <div className="tab-text">

                  <p>This is the path of the {componentName} component,if you want to go this directory
                     then copy this path and  paste into your text editor.</p>
                  <h4 className="url-header">{path} </h4>

               </div>

            </Tab>
            <Tab eventKey="Description" title="Description">
               <div className="tab-text">
                  <h4>{description}</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type
                     specimen book. It has survived not only five centuries, but also the leap into electronic
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                     of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type
                     specimen book. It has survived not only five centuries, but also the leap into electronic
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                     of Letraset sheets containing Lorem Ipsum passages.
                     <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages,
                     </p>
                  </p>
               </div>

            </Tab>


            <Tab eventKey="codeSnippet" title="Code Snippets" >
               <div className="tab-text ">


                  <SyntaxHighlighter language="javascript" style={docco}>
                     {codeSnippet}
                  </SyntaxHighlighter>


               </div>

            </Tab>

            <Tab eventKey="customHooks" title="Custom Component" >
               <div className="tab-text">

                  <ol>
                     <div>
                        {customHooks?.length > 0 ? customHooks?.map((key) => {

                           return (<div>
                              <li>
                                 <h5>{key.name}

                                    <a href={key.url} target="_blank">link to library</a></h5>

                              </li>

                           </div>
                           )
                        }) : <Alert variant="primary" >No Information avaialble</Alert>
                        }
                     </div>
                  </ol>

               </div>
            </Tab>
            <Tab eventKey="librariesUsed" title="Libraries Used" >
               <div className="tab-text">

                  <Libraries
                     libUsed={libraryUsed}
                  />
               </div>
            </Tab>
            <Tab eventKey="reduxStore" title="Redux Store" >
               <div className="tab-text">


                  {reduxStore?.length > 0 ? reduxStore?.map((key) => {

                     return (<div>
                        <p>This is the path of the {componentName} component.if you want to go this directory
                           then copy this path and  paste into your text editor.</p>
                        <h4 className="url-header">{key.path} </h4>
                        <h5>Code Used for Redux Store</h5>
                        <SyntaxHighlighter language="javascript" style={docco}>
                           {key.pathCode}
                        </SyntaxHighlighter>

                     </div>
                     )
                  }) : <Alert variant="primary" >No Information avaialble</Alert>
                  }




               </div>
            </Tab>
            <Tab eventKey="stylesheet" title="Stylesheet" >
               <div className="tab-text">
                  <h5>index.css</h5>
                  <SyntaxHighlighter language="javascript" style={docco}>
                     {stylesheetUsed}
                  </SyntaxHighlighter>

               </div>
            </Tab>
            <Tab eventKey="screenshot" title="Screenshots" >
               <div className="tab-text">
                  <img src={images} className="App-logo" alt="logo" />

               </div>
            </Tab>
            <Tab eventKey="example" title="Examples" >
               <div className="tab-text">
                  <h4>Design of the page</h4>

                  Visit the website to view design look <a href={examples} target="_blank" >Go to the Page</a>
               </div>
            </Tab>
         </Tabs>
      </div>
   );
};





