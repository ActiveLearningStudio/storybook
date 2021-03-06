export const AddRoleSnippet = `
/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadImage,
  createOrganizationNew,
  checkBranding,
  updateOrganization,
} from "store/actions/organization";
import { removeActiveAdminForm } from "store/actions/admin";
import imgAvatar from "assets/images/img-avatar.png";
import Swal from "sweetalert2";
import loader from "assets/images/dotsloader.gif";
import EditActivity from "containers/EditActivity";

export default function CreateOrg(prop) {
  const { editMode } = prop;
  const [imageActive, setImgActive] = useState(null);
  const [activityImage, setActivityImage] = useState("");
  const imgUpload = useRef();
  const allListState = useSelector((state) => state.organization);
  const dispatch = useDispatch();
  const [loaderImg, setLoaderImg] = useState(false);
  const adminState = useSelector((state) => state.admin);
  const { activeForm, currentUser } = adminState;
  const { activeEdit, activeOrganization } = allListState;

  useEffect(() => {
    if (editMode) {
      setImgActive(activeEdit?.image);
    } else {
      setImgActive(null);
    }
  }, [editMode]);
  return (
    <div className="create-form">
      <Formik
        initialValues={{
          image: editMode ? activeEdit.image : "",
          name: editMode ? activeEdit?.name : "",
          description: editMode ? activeEdit?.description : "",
          domain: editMode ? activeEdit?.domain : "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.domain) {
            errors.domain = "Required";
          } else if (values.domain?.length < 2) {
            errors.domain = "Character limit should be greater then one";
          } else if (values.domain === true) {
            errors.domain = "Domain already taken, Kindly try again.";
          }
          if (!values.image) {
            errors.image = "Required";
          }

          return errors;
        }}
        onSubmit={async (values) => {
          Swal.fire({
            title: "Please Wait !",
            html: editMode
              ? "Updating Organization ... "
              : "Creating Organization ... ",
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            },
          });
          if (editMode) {
            const result = await dispatch(
              updateOrganization(activeOrganization.id, values, activeEdit.parent.id)
            );
          } else {
            const result = await dispatch(
              createOrganizationNew(activeOrganization.id, values)
            );
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
            <h2>{editMode ? "Edit " : "Create "} Organization</h2>
            <div className="form-group-create">
              <h3>Organization Name</h3>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className="error">
                {errors.name && touched.name && errors.name}
              </div>
            </div>
            <div className="form-group-create">
              <h3>Organization Image</h3>
              <div
                className="img-upload-form"
                onClick={() => imgUpload.current.click()}
              >
                <input
                  type="file"
                  name="image"
                  onChange={(e) => {
                    if (
                      !(
                        e.target.files[0].type.includes("png") ||
                        e.target.files[0].type.includes("jpg") ||
                        e.target.files[0].type.includes("gif") ||
                        e.target.files[0].type.includes("jpeg")
                      )
                    ) {
                      Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Invalid file selected.",
                      });
                    } else if (e.target.files[0].size > 100000000) {
                      Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Selected file size should be less then 100MB.",
                      });
                    } else {
                      const formData = new FormData();
                      try {
                        formData.append("thumb", e.target.files[0]);
                        const imgurl = dispatch(
                          uploadImage(
                            allListState.currentOrganization?.id,
                            formData
                          )
                        );
                        imgurl.then((img) => {
                          setImgActive(img.data?.thumbUrl);
                          setFieldValue("image", img.data?.thumbUrl);
                        });
                      } catch (err) {
                        Swal.fire({
                          icon: "error",
                          title: "Error",
                          text: "Image upload failed, kindly try again.",
                        });
                      }
                    }
                  }}
                  onBlur={handleBlur}
                  ref={imgUpload}
                  style={{ display: "none" }}
                />
                {imageActive ? (
                  <>
                    <div
                      className="playimg"
                      style={{
                       
                      }}
                    />
                    <div
                      className="update-img"
                      onClick={() => imgUpload.current.click()}
                    >
                      Update Image
                    </div>
                  </>
                ) : (
                  <>
                    <img src={imgAvatar} alt="" />
                    <p>Upload Image</p>
                  </>
                )}
                <div className="error">
                  {errors.image && touched.image && errors.image}
                </div>
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
                {errors.description &&
                  touched.description &&
                  errors.description}
              </div>
            </div>
            {!editMode &&
            <div className="form-group-create">
              <h3>Domain</h3>
              <input
                type="text"
                name="domain"
                autoComplete="off"
                value={values.domain}
                onChange={(e) => {
                  if (e.target.value.length > 1) {
                    const inputValue = e.target.value;
                    setLoaderImg(true);
                    const result = dispatch(checkBranding(e.target.value));
                    result
                      .then(() => {
                        setLoaderImg(false);
                        setFieldValue("domain", true);
                      })
                      .catch((err) => {
                        if (err.errors) {
                          setLoaderImg(false);
                          setFieldValue("domain", inputValue);
                        }
                      });
                  } else {
                    setFieldValue("domain", e.target?.value);
                  }
                }}
                onBlur={handleBlur}
                // value={values.admin}
              />
              {loaderImg && (
                <img
                  src={loader}
                  style={{ width: "25px" }}
                  alt=""
                  className="loader"
                />
              )}
              <div className="error">
                {errors.domain && touched.domain && errors.domain}
              </div>
            </div>
            }
            <div className="button-group">
              <button type="submit">
                {editMode ? "Edit " : "Create "} Organization
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

CreateOrg.propTypes = {};

`
