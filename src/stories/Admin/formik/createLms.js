export const CreateLmsSnippet = `
/* eslint-disable */
import React, { useState, useRef } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { addUserInOrganization, editUserInOrganization, removeActiveAdminForm } from 'store/actions/admin';
import Swal from 'sweetalert2';
import organizationapi from '../../../services/organizations.services';
import loader from 'assets/images/dotsloader.gif';

export default function CreateUser(prop) {
  const { editMode, method, clone } = prop;
  const dispatch = useDispatch();
  const organization = useSelector((state) => state.organization);
  const {activeEdit} = organization
  const [loaderlmsImgUser, setLoaderlmsImgUser] = useState(false)
 
  return (
    <div className="create-form">
      <Formik
        initialValues={{
          lms_url: editMode ? activeEdit?.lms_url : '',
          lms_access_token: editMode ? activeEdit?.lms_access_token : '',
          site_name: editMode ? activeEdit?.site_name : '',
          lti_client_id: editMode ? activeEdit?.lti_client_id : '',
          // moodle: editMode ? activeEdit?.moodle : '',
          // canvas: editMode ? activeEdit?.canvas : '',
          lms_name: editMode ? activeEdit?.lms_name: '',
          access_key: editMode ? activeEdit?.access_key : '',
          secret_key: editMode ? activeEdit?.secret_key : '',
          description: editMode ? activeEdit?.description : "",
          name: editMode ? clone ? '':activeEdit?.user?.name : '',
          lms_login_id: editMode ? activeEdit?.lms_login_id : "",


        }}
        validate={(values) => {
          const errors = {};
          if (!values.lms_url) {
            errors.lms_url = 'required';
          }
          if (!values.lms_access_token) {
            errors.lms_access_token = 'required';
          }
          if (!values.site_name) {
            errors.site_name = 'required';
          }
          if (!values.lti_client_id) {
            errors.lti_client_id = 'required';
          }
          // if (!values.moodle) {
          //   errors.moodle = 'required';
          // }
         
          // if (!values.canvas) {
          //   errors.canvas = 'required';
          // }
          // if (!values.access_key) {
          //   errors.access_key = 'required';
          // }
          // if (!values.secret_key) {
          //   errors.secret_key = 'required';
          // }
          // if (!values.description) {
          //   errors.description = 'required';
          // }
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.lms_login_id) {
            errors.lms_login_id = 'required';
          }
          return errors;
        }}
        onSubmit={async (values) => {
          if (editMode) {
            Swal.fire({
              title: 'Users',
              icon: 'info',
              text: 'Updating User LMS Settings...',
              allowOutsideClick: false,
              onBeforeOpen: () => {
                Swal.showLoading();
              },
              button: false,
            });
            console.log(values)
            updateLmsProject(row.id, values);
            

          } else {
            Swal.fire({
              title: 'Users',
              icon: 'info',
              text: 'Creating new user...',

              allowOutsideClick: false,
              onBeforeOpen: () => {
                Swal.showLoading();
              },
              button: false,
            });
            await dispatch(addUserInOrganization(values));
            Swal.close();
            dispatch(removeActiveAdminForm());

          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <h2>{editMode ? clone ? 'Create ' : 'Edit' : 'Create'}LMS Setting</h2>
            <div className="form-group-create">
              <h3>LMS URL</h3>
              <input
                type="text"
                name="lms_url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lms_url}
              />
              <div className="error">
                {errors.lms_url && touched.lms_url && errors.lms_url}
              </div>
            </div>
            <div className="form-group-create">
              <h3>LMS Access Token</h3>
              <input
                type="text"
                name="lms_access_token"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lms_access_token}
              />
              <div className="error">
                {errors.lms_access_token && touched.lms_access_token && errors.lms_access_token}
              </div>
            </div>
            <div className="form-group-create">
              <h3>Site Name</h3>
              <input
                type="site_name"
                name="site_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.site_name}
              />
              <div className="error">
                {errors.site_naactiveEditme && touched.site_name && errors.site_name}
              </div>
            </div>
            {!editMode ?
              <div className="form-group-create">
                <h3>LTI Client ID</h3>
                <input
                  type="lti_client_id"
                  name="lti_client_id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lti_client_id}
                />
                <div className="error">
                  {errors.lti_client_id && touched.lti_client_id && errors.lti_client_id}
                </div>
              </div>
              : null
            }
            <div className="form-group-create">
              <h3>LMS Name</h3>
              {/* <input
                type="text"
                name="role"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.role}
              /> */}
              <select name="lms_name" onChange={handleChange} onBlur={handleBlur} value={values.lms_name}>
                <option value="moodle">Moodle</option>
                <option value="canvas">Canvas</option>
               
              </select>
              <div className="error">
                {errors.lms_name && touched.lms_name && errors.lms_name}
              </div>
            </div>
            <div className="form-group-create">
              <h3>Access Key</h3>
              <input
                type="text"
                name="access_key"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.access_key}
              />
              <div className="error">
                {errors.access_key && touched.access_key && errors.access_key}
              </div>
            </div>
            <div className="form-group-create">
              <h3>Secret Key</h3>
              <input
                type="text"
                name="secret_key"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secret_key}
              />
              <div className="error">
                {errors.secret_key && touched.secret_key && errors.secret_key}
              </div>
            </div>
            <div className="form-group-create">
              <h3>Description</h3>
              <textarea
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <div className="error">
                {errors.description && touched.description && errors.description}
              </div>
            </div>
            <div className="form-group-create">
              <h3>User</h3>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={async (e) => {
                  setFieldValue('name', e.target.value);
                  
                  setLoaderlmsImgUser(true);
                  const lmsApi = organizationapi.getAllUsers(organization.activeOrganization?.id, e.target.value, method);
                  lmsApi.then((data) => {
                    setLoaderlmsImgUser(false);
                   
                  })
                }}
                onBlur={handleBlur}
                value={values.name}
              />
              {loaderlmsImgUser && <img src={loader} alt="" className="loader" />}
            </div>
            <div className="form-group-create">
              <h3>LMS Login ID</h3>
              <input
                type="text"
                name="lms_login_id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lms_login_id}
              />
              <div className="error">
                {errors.lms_login_id && touched.lms_login_id && errors.lms_login_id}
              </div>
            </div>
            <div className="button-group">
              <button type="submit">
                {editMode ? 'Edit ' : 'Create'} LMS Setting
              </button>
              <button
                type="button"
                className="cancel"
                onClick={() => {
                  dispatch(removeActiveAdminForm());
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

CreateUser.propTypes = {

};


`
