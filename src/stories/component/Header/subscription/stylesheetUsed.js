export const Stylesheet = `
@import 'assets/css/index';

.top-header {
  .dropdown-toggle {
    background: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;

    &:after {
      border-top-color: gray;
    }
  }

  .group-search-logo {
    display: flex;
    align-items: center;
  }

  .notification-bar {
    .notification-alert {
      position: relative;

      .alert-added {
        width: 10px;
        height: 10px;
        background-color:#d54646 ;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    .notification-status {
      font: normal normal 600 14px/20px $rubik;
      letter-spacing: 0;
      color: #8F8FA1;
      padding: 15px 0 5px 25px;
    }

    .user-dropdown {
      width: 480px !important;
      box-shadow: 0 0 99px #00000021;
      border-radius: 5px;

      .scroll-notification {
        max-height: 480px;
        overflow-y: auto;

        .header-data {
          display: flex;
          justify-content: space-between;
          padding: 15px 25px;
          border-bottom: 1px solid #f2f0f0;

          h2 {
            font: normal normal 600 18px/20px $rubik;
            letter-spacing: 0;
            color: #0F0F0F;
            margin-bottom: 0;
          }

          h3 {
            font: normal normal 600 14px/20px $rubik;
            letter-spacing: 0;
            color: #5250C1;
            margin-bottom: 0;
          }
        }

        .dropdown-item {
          padding: 0;

          &:nth-of-type(odd) {
            .user-detail .user-icons {
              background: #C3C0E7 0% 0% no-repeat padding-box;
              color: #6D629A;
            }
          }
        }

        p {
          white-space: pre-wrap;
        }
      }

     .btn-all-notification {
        border-top: 1px solid #f2f0f0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 0;

        .all-notification {
          text-decoration: underline;
          font: normal normal 600 14px/20px $rubik;
          color: #5250C1;
          width: 100%;
        }

        .notification-setting {
          font: normal normal 600 14px/20px $rubik;
          letter-spacing: 0;
          color: #5250C1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }

    h2.title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      color: #515151;
    }
  }

  .navbar-link li .dropdown-menu {
    width: 200px;
    padding: 20px;
    h2.title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      color: #515151;
    }
  }

  .active {
    .dropdown-menu {
      display: block;
    }
  }

  .hide {
    .dropdown-menu {
      display: none;
    }
  }
}

.search-block {
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 36px;
  margin-right: 0px;

  .fa-chevron-down {
    position: absolute;
    right: 20px;
    top: 10px;
    color: $fun-blue-1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }
}

.search-div {
  align-items: center;
  margin-right: 50px;

  #dropdown-basic {
    background-color: transparent;
    position: initial;
    right: 4px;
    color: $fun-blue-1;
    top: 0px;
    padding: 0;
  }

  .dropdown-menu {
    box-shadow: 0 0 20px #00000029;
    border: 1px solid #CFCFCF;
    opacity: 1;
    padding: 30px;
    background: #fff;
    margin-top: 0;
    width: 600px;
    position: absolute;
    right: auto !important;
    left: initial !important;
    border-radius: 5px;
    overflow-y: auto;
    max-height: 615px;
    top:20px !important
  }

  .overlay-search-form {
    .form-group {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;

      input, select {
        border: none;
        width: 100%;
        text-align: left;
        font-size: 14px;
        line-height: 26px;
        border-bottom: 1px solid #CFCFCF;
        letter-spacing: 0;
        color: #636363;
        opacity: 1;
        padding-bottom: 5px;
      }

      .error {
        color: red;
        display: block;
      }

      .keywords-de {
        background-color: $curriki-main-blue;
        color: #fff;
        border-radius: 30px;
        padding: 6px 10px;
        font-size: 12px;
        position: relative;
        margin: 5px 5px 0 0;

        .iocns {
          color: #fff;
          background-color: #ff0000d1;
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          border-radius: 30px;
          stroke-width: 1px;
          cursor: pointer;
          display: none;

          svg {
            margin: 10px auto;
            display: flex;
          }
        }

        &:hover .iocns {
          display: block;
        }
      }

      input[type='date'], input[type='select'] {
        cursor: pointer;
      }

      .radio-btns {
        width: 100%;
        display: flex;

        label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
          line-height: 26px;
          color: #636363;
          font-weight: bold;

          input {
            width: 25px
          }

          &:first-child {
            margin-right: 30px;
          }
        }
      }
    }
  }

  .dual select, .dual input {
    width: 48% !important;
  }

  h4 {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: 0;
    color: $curriki-main-blue;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
  }

  .form-group.wrap-keyword {
    display: flex;
    justify-content: initial;
    flex-wrap: wrap;
  }

  button {
    font-size: 15px;
    line-height: 20px;
    background: $curriki-main-blue 0% 0% no-repeat padding-box;
    border-radius: 30px;
    opacity: 1;
    border: none;
    letter-spacing: 0;
    color: #FFFFFF;
    //width: 102px;
    height: auto;
    text-align: center;
    cursor: pointer;
  }

  .dual_activity {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    button {
      width: 120px;
    }
  }
}

.tophd_left {
  width: auto;
  height: 75px;
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 75px
  }
}

.search-term {
  width: 320px;
  height: 36px;
  background: #ffffff 0 0 no-repeat padding-box;
  border: 1px solid $fun-blue-1;
  box-sizing: border-box;
  border-radius: 20px;
  opacity: 1;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0;
  color: $fun-blue-1;
  padding-left: 20px;
  padding-right: 50px;

  &::placeholder {
    color: $fun-blue-1;
  }
}

.header-icon-text{
  font-size: 9.42439px;
  text-align: center;
  color: $fun-blue-1;
  margin-bottom: 0px;
  display: block;
}

.search-submit {
  position: absolute;
  right: -10px;
  z-index: 99;
  top: 3px;
  border: 0;
  background: transparent;
  font-size: 18px;
  color: #fff;
  width: 27px;
  height: 12px;
  border-radius: 0;
  margin-right: 20px;
}

.dropdown-multitenancy {
  width: 80px;
  height: 35px;
  display: flex;
  flex-direction: column;

  &:after {
    content: url('../../assets/images/path.png');
    position: absolute;
    right: 10px;
    top: 0px;
    z-index:-1
  }
  // div.text{
  //   text-overflow: ellipsis;
  //   overflow: hidden;
  //   text-align: center;
  //   width: 60px;
  // }
  .dropdown-toggle {
    color: $fun-blue-1 !important;
    font-size: 9.42px;
    line-height: 19px;
    text-align: left;
    width: 100%;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img {
      margin-bottom: 3px;
    }

    p{
      font-size: 9px;
      line-height: 12px;
      color: $dove-gray;
      margin-bottom: 0px;
    }

    &:hover, &:active, &:focus {
      color: $fun-blue-1;
    }
  }

  .dropdown-menu {
    min-width: 398px;
    max-height: 359px;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
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

  .all-tg-lister {
    border-bottom: 1px solid #E5E5E5;
    padding: 10px 0px;
  }

  p{
    font-weight: normal;
    font-size: 12.8px;
    line-height: 127.85%;
    color: #888888;
    margin-bottom: 0px;
  }
}

.profile-avatar {
  width: 32px;
  height: 32px;
  background: #084892;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: -8px; */
  font-size: 20px;
  font-weight: bold;
}
`
