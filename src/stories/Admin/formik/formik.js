
import './formik.css';
import { Tabview } from '../../../component/Tabview'

export const Formik = (props) => {
   return (
     <>
    <Tabview
    componentName={props.componentName}
    path={props.path}
    description={props.description}
    codeSnippet={props.codeSnippet}
    libraryUsed={props.libraryUsed}
    customHooks={props.customHooks}
    reduxStore= {props.reduxStore}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    images={props.images}
    stylesheetUsed= {props.stylesheetUsed}
    examples={props.examples}
    
    />
    
    </>
  );
};
