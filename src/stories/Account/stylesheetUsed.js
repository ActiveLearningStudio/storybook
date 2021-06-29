export const Stylesheetused = `
@import 'assets/css/index';

.account-page {
  .account-panel {
    background: white;
    border-radius: 8px;
  }

  .account-panel-header-row {
    border-left: solid 5px #607a9b;
  }

  .panel-title {
    color: #607a9b;
    font-family: $rubik, sans-serif;
    font-weight: 700;
    font-size: 22px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .title {
    padding-left: 40px;
    background: url(../../assets/images/my-projects-icon.png) no-repeat 0 9px;
    color: #607a9b;
    font-family: $rubik, sans-serif;
    font-weight: 700;
    font-size: 22px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .form-group {
    position: relative;

    .svg-inline--fa {
      position: absolute;
      bottom: 17px;
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

    &:disabled {
      background-color: #ddd;
    }
  }

  select.input-box {
    padding: 14px 10px 14px 40px;
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

  .submit {
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
}

`
