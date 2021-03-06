export const Stylesheetused = ` 
@import 'assets/css/index';

.resource-modal {
  h1 {
    margin: 0;
    font-family: $rubik, sans-serif;
    font-size: 2rem;
    font-weight: 300;
    color: #165399;
    text-transform: capitalize;

    .close-btn {
      float: right;
      background: none;
      border: 0;
    }
  }

  .modal-content {
    padding: 40px 35px;
  }

  .modal {
    padding: 0 !important;
  }
}

.create-program-wrapper {
  .label-toggle {
    display: flex;
    justify-content: space-between;

    .class-toggle {
      align-items: center;
      display: flex;

      label {
        padding-right: 5px;
      }
    }
  }

  h1 {
    margin: 0;
    font-family: $rubik, sans-serif;
    font-size: 2rem;
    font-weight: 300;
    color: #165399;
    text-transform: capitalize;
  }

  .create-playlist-form {
    h2 {
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: 400;
    }

    label {
      margin-bottom: 0;
    }

    .project-name {
      input {
        width: 100%;
        height: 54px;
        padding-left: 15px;
        border: 1px solid #d9dfe8;
        border-left: 3px solid #d9dfe8;
      }
    }

    .project-description {
      textarea {
        width: 100%;
        height: 200px;
        padding: 15px;
        border: 1px solid #d9dfe8;
        border-left: 3px solid #d9dfe8;
        border-radius: 0;
      }
    }

    .upload-thumbnail {
      label {
        width: 100%;
        height: 54px;
        padding-left: 15px;
        border: 1px solid #d9dfe8;
        border-left: 3px solid #d9dfe8;
        cursor: pointer;

        input {
          display: none;
        }

        span {
          width: 138px;
          height: 100%;
          padding-top: 15px;
          display: block;
          float: right;
          background: #d9dfe8;
          font-family: $rubik, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #000;
          text-align: center;
          text-transform: uppercase;
        }
      }

      .thumb-display {
        width: 280px;
        height: auto;
        overflow: hidden;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    .create-project-template-wrapper {
      margin-top: 25px;

      .create-project-submit-btn {
        padding: 10px 15px;
        background: #2ecf43;
        border: 0;
        border-radius: 5px;
        font-family: $rubik, sans-serif;
        font-weight: 500;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
      }

      .project-template-btn {
        padding: 10px 15px 10px 35px;
        float: right;
        background: url(../../../assets/images/project-template-icon.png) #fff no-repeat 8px 10px;
        border: 1px solid #d9dfe8;
        border-radius: 5px;
        font-family: $rubik, sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}
.dropdown-visibilitytypes {
  width: 280px;
  height: 87px;
  border-bottom: 1px solid  $fun-blue-1;
 
  .dropdown-toggle {
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    width: 100%;
    padding-left: 0px;
  
    p{
      font-size: 9px;
      line-height: 12px;
      color: $dove-gray;
      margin-bottom: 0px;
    }
    &:after {
      content: url('../../../assets/images/path.png');
      float: right;
      border-top: none;
    }
    &:hover, &:active, &:focus {
      border: 0;
      outline: none;
    }
  }

  .dropdown-menu {
    min-width: 283px;
    max-height: 359px;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
    border: none;
    padding: 10px 25px;
    overflow: auto;
  }

  a {
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: $fun-blue-1;
    padding:0;
  }
  select{
    border-bottom: 1px solid #E5E5E5;
    border: none;
    padding: 22px 195px 17px 0px;
    option {
      border-bottom: 1px solid #E5E5E5;
      padding: 10px 0px;
    }
  }
  // .all-tg-lister {
  //   border-bottom: 1px solid #E5E5E5;
  //   padding: 10px 0px;
  // }

  p{
    font-weight: normal;
    font-size: 12.8px;
    line-height: 127.85%;
    color: #888888;
    margin-bottom: 0px;
  }
}
#dropdown-basic {
  background-color: transparent;
  right: 0px;
  top: 1px;
}
`
