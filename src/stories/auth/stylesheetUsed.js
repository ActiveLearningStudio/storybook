export const Stylesheetused = `
@import 'assets/css/index';

.auth-page {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;

  flex-direction: row;
  .auth-leftpane {
    width: 70%;
    height: 100%;
    left: 0px;
    top: 0px;
    background:#3362AA;
    position: relative;
    
    
 }
  .auth-header-logo {
    position: absolute;
    width: 407px;
    height: 236px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .auth-header-logo.nevada {
    background: #205a9c;
    border-radius: 10px;
    padding: 10px 0px;
  }

  @media (max-width: 767px) {
    .auth-header-logo {
      margin-bottom: 0;
    }
  }

  .auth-container {
    margin: auto;
    padding: 40px 60px;
    background: #fff;
    border-radius: 5px;

    width: 30%;
    left: 887px;
    top: 0px;

    background: #FFFFFF;
    &:after {
      // content: "";
      // position: absolute;
      // top: 20%;
      // right: -180px;
      // z-index: -1;
      // width: 330px;
      // height: 330px;
      // background-color: #eadbf0;
      // border-radius: 50%;
    }

    &:before {
      // content: "";
      // position: absolute;
      // bottom: -80px;
      // left: -80px;
      // z-index: -1;
      // width: 200px;
      // height: 200px;
      // background-color: #eadbf0;
      // border-radius: 50%;
    }
    .google-button {
      min-width: 230.6px;
      height: 40px;
      left: 958px;
      top: 370.78px;
      margin-bottom: 19.5px;
      color: #000000;
      border: 1px solid #888888 !important;
      background: #FFFFFF;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 0px 20px;
    }
    .email-button {
      min-width: 230.92px;
      height: 40px;
      color: #000000;
      left: 958px;
      top: 429.84px;
      border: 1px solid #888888 !important;
      background: #FFFFFF;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 0px 20px;
    }
    .auth-title {
      letter-spacing: 0;
      color: $curriki-main-blue;
      left: 66.53%;
      right: 5%;
      top: 25.88%;
      bottom: 69.7%;
      font-style: normal;
      font-weight: 500;
      font-size: 39px;
      line-height: 46px;
      text-transform: uppercase;
    }
    .termsandcondition {
      margin-top: 36.45px;
      width: 411.27px;
      height: 32.73px;
      left: 958.91px;
      top: 665.45px;
      font-style: normal;
      font-weight: normal;
      font-size: 12.8px;
      line-height: 122.8%;
      /* or 16px */
      color: #515151;
    }
    @media (max-width: 767px) {
      padding: 25px;
      margin: 15px;

      .auth-title {
        width: min-content;
      }
    }

    .auth-subtitle {
      padding: 12px 0 18px;
      font-weight: 600;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.44px;
      color: $mine-shaft;
      text-transform: capitalize;
    }

    .auth-description {
      font-size: 16px;
      line-height: 26px;
      margin-top: 10px;
      letter-spacing: 0;
      color: $mine-shaft;
      a {
        color: #285AA5;
        font-weight: bold;
        text-decoration:underline;
        &:hover {
          color: #285AA5;
        }
      }

    }

    @media (max-width: 767px) {
      .auth-subtitle {
        display: none;
      }

      .auth-description {
        padding-top: 10px;
      }
    }

    .auth-form {
      margin-top: 35px;
      flex: 1;
      overflow-y: auto;
    }

    .form-group {
      position: relative;
      margin-bottom: 3rem;
      .back-button {
        height: 30px;
        background: $curriki-main-blue 0 0 no-repeat padding-box;
        border-color: $curriki-main-blue;
        font-weight: 400;
        font-size: 19px;
        line-height: 26px;
        border-radius: 0.25rem;
        float: right;
        letter-spacing: 0.76px;
        color: #ffffff;
        opacity: 1;
      }
      .svg-inline--fa {
        position: absolute;
        top: 17px;
        left: 16px;
      }

      .input-wrapper {
        position: relative;
        margin: 0;
        flex: 1;

        &:last-child {
          margin-left: 1rem;
        }
      }
    }

    .input-box {
      width: 100%;
      height: 50px;
      padding: 18px 18px 18px 40px;
      display: block;
      background-color: #fff;
      border: 1px solid #d9dfe8;
      font-size: 14px;
      color: $mine-shaft;

      &:focus {
        outline: none;
      }
    }

    .organization-type{
      padding: 10px 18px 10px 40px;
    }

    .password-box {
      width: 100%;
      height: 50px;
      padding: 18px 18px 18px 40px;
      display: block;
      background-color: #fff;
      border: 1px solid #d9dfe8;
      font-size: 14px;
      color: #000;

      &:focus {
        outline: none;
      }
    }

    .remember-me {
      display: flex;
      justify-content: space-between;

      input {
        margin-right: 5px;
        cursor: pointer;
      }

      a,
      label {
        margin-bottom: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        font-family: '$halvetica', sans-serif;
        letter-spacing: 0;
        color: $mine-shaft !important;
        opacity: 0.8;
      }

      span {
        border: 1px solid #ccc;
        width: 18px;
        height: 18px;
        display: block;
        float: left;
        margin-top: 2px;
        margin-right: 12px;
        border-radius: 3px;
      }

      [type="checkbox"]:checked + span {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: #374761;

        &::before {
          position: absolute;
          left: 2px;
          bottom: 3px;
          height: 8px;
          width: 3px;
          background-color: #fff;
          content: "";
          transform: translateX(5px) rotate(-45deg);
          transform-origin: left bottom;
        }

        &::after {
          position: absolute;
          left: 3px;
          bottom: 4px;
          height: 3px;
          width: 12px;
          background-color: #fff;
          content: "";
          transform: translateX(5px) rotate(-45deg);
          transform-origin: left bottom;
        }
      }
    }

    .forgot-password-box {
      text-align: right;
      padding-right: 10px;

      a {
        color: #9b9b9b;
        font-family: '$halvetica', sans-serif;
        font-weight: 400;
      }
    }

    .submit {
      width: 100%;
      min-width: 150px;
      height: 50px;
      background: #4646c4 0 0 no-repeat padding-box;
      border-color: #4646c4;
      font-weight: 400;
      font-size: 19px;
      line-height: 26px;
      text-transform: uppercase;
      letter-spacing: 0.76px;
      color: #ffffff;
      opacity: 1;

      &:disabled {
        background: grey;
        border-color: grey;
      }
    }

    .create-account-block {
      margin-top: 35px;

      p {
        font-size: 16px;
        color: #000;
        font-family: '$halvetica', sans-serif;
        font-weight: 400;

        a {
          font-weight: 500;
          color: #000;
        }
      }
    }
  }

  .bg1 {
    position: fixed;
    bottom: -83px;
    right: -20%;
    z-index: -1;
    display: none;
  }

  .bg2 {
    position: fixed;
    bottom: -70px;
    left: -88px;
    z-index: -1;
    display: none;
  }

  .terms-section {
    h4 {
      font-size: 13px;
      cursor: pointer;

      a {
        color: $curriki-main-blue;
        font-weight: bold;
        font-family: $rubik, sans-serif;
        text-decoration: underline !important;
        font-size: 13px;
        cursor: pointer;
        text-transform: uppercase;
      }
    }

    .pdf-social {
      display: flex;
      width: 60%;
      justify-content: space-between;
      cursor: pointer;
      font-size: 11px;
      color: $mine-shaft;
      font-weight: bold;

      i {
        color: #f60018;
        padding-right: 7px;
      }
    }

    img {
      max-width: 300px;
      height: 150px;
      margin: 0 auto;
      display: block;
    }

    .fa-times {
      color: #4646c4;
      cursor: pointer;
      text-align: right;
      float: right;
    }

    @media (max-width: 480px) {
      padding: 20px 30px;
      margin: 0 15px;
    }

    a {
      font-size: 12px;
      color: #7b7b7b;
      padding-left: 5px;
      font-weight: 600;
    }

    .form-group.checkbox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;

      .fa {
        padding-right: 5px;
        position: initial;
      }

      .checkbox {
        cursor: pointer;
      }

      @media (max-width: 480px) {
        width: 100%;
      }
    }

    h1 {
      font-size: 30px;
      font-weight: 600;
      margin: 16px 0;
      color: $curriki-main-blue;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      color: $curriki-main-blue;
      font-weight: bold;
      margin: 35px 0 15px;
    }

    button {
      background: #4646c4 0 0 no-repeat padding-box;
      width: 100%;
      height: 50px;
      border-color: #4646c4;
      font-weight: 400;
      font-size: 19px;
      line-height: 26px;
      text-transform: uppercase;
      letter-spacing: 0.76px;
      color: #ffffff;
      opacity: 1;
    }
  }
}

`
