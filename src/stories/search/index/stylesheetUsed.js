export const IndexStyle = `
@import 'assets/css/index';

.search-result-main {
  padding: 0 20px;

  .total-count {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    font-family: "rubik", sans-serif;
    letter-spacing: 0;
    text-transform: capitalize;
    opacity: 1;
    padding: 30px 0;

    span {
      letter-spacing: 0;
      color: $curriki-main-blue;
      text-transform: capitalize;
    }
  }

  .main-content-search {
    display: flex;
    justify-content: space-between;
  }

  .left-search {
    width: 25%;
  }

  .search-library {
    .card {
      padding: 20px 10px 30px;
    }

    .card-header {
      background-color: #fff;
      text-align: left;
      font: normal normal 600 16px/20px $rubik;
      letter-spacing: 0;
      color: $curriki-main-blue;
      opacity: 1;
      border: none;
      cursor: pointer;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-body {
      padding: 0 20px;

      .radio-btns{
        display: flex;
        flex-direction: column;

        label{
          display: flex;
          cursor: pointer;
          align-items: center;
          margin-bottom: 0;
        }

        input{
          width:13px;
          background-color: $mine-shaft;
          margin-right: 10px;
          margin-bottom: 0;
        }
      }

      input {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #b8b8b8;
        border-radius: 2px;
        opacity: 1;
        width: 100%;
        padding: 10px;
        height: 36px;
        text-align: left;
        font: normal normal normal 14px/26px $rubik;
        letter-spacing: 0;
        color: $mine-shaft;
        margin-bottom: 10px;
      }

      .check-box-search {
        text-align: left;
        font: normal normal normal 14px/26px $rubik;
        letter-spacing: 0;
        color: $mine-shaft;
        opacity: 1;
        margin-top: 5px;

        i {
          margin-right: 5px;
        }
      }

      .src-btn {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 2px solid #5952c6;
        border-radius: 2px;
        text-align: center;
        font: normal normal 600 16px/20px $rubik;
        letter-spacing: 0;
        color: #5952c6;
        opacity: 1;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        cursor: pointer;

        &:hover {
          background-color: #5952c6;
          color: #fff;
        }
      }
    }
  }

  .refine-search {
    margin-top: 20px;

    .headline {
      text-align: left;
      font: normal normal bold 16px/20px $rubik;
      letter-spacing: 0;
      color: #ffffff;
      opacity: 1;
      background: $curriki-main-blue 0% 0% no-repeat padding-box;
      box-shadow: 0 0 2px #0000000d;
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }

    .list-item-keys{
      padding: 5px 10px;

      span{
        margin: 0 10px;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0 0 2px #0000000d;
        opacity: 1;
        font: normal normal 600 14px/20px $rubik;
        letter-spacing: 0;
        cursor: pointer;
      }

      svg.fa-square{
        color:#fff;
        border:1px solid #333;
      }
      svg.fa-check-square{
        color:$curriki-main-blue;
      }
    }

    .card-header {
      margin: 0 10px;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0 0 2px #0000000d;
      opacity: 1;
      text-align: left;
      font: normal normal 600 16px/20px $rubik;
      letter-spacing: 0;
      color: $curriki-main-blue;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .right-search {
    width: 73%;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    nav {
      width: 100%;
      margin: 0 !important;
      padding: 25px;

      a.active {
        background: $curriki-main-blue 0% 0% no-repeat padding-box;
        opacity: 1;
        color: #fff;
        border: 1px solid $curriki-main-blue;
        border-radius: 0;
      }

      a {
        text-align: left;
        font: normal normal normal 14px/26px $rubik;
        letter-spacing: 0;
        color: $mine-shaft;
        opacity: 1;
        margin-top: 5px;
        text-transform: capitalize;
        border: 1px solid $mine-shaft;
        border-right: none;
        border-radius: 0;

        &:last-child {
          border-right: 1px solid $mine-shaft;
        }
      }
    }

    .results_search {
      width: 100%;

      .box {
        display: flex;
        margin: 0 20px;
        padding: 20px 0;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        min-height: 140px;

        h2 {
          text-align: left;
          font: normal normal 600 16px/22px $rubik;
          letter-spacing: 0;
          color: $curriki-main-blue;
          text-transform: capitalize;
          opacity: 1;
        }

        ul {
          padding: 2px 0 8px 15px;
          display: flex;

          li {
            margin-right: 30px;
            text-align: left;
            font: normal normal normal 14px/26px $rubik;
            letter-spacing: 0;
            opacity: 1;
            list-style-type: disc;

            span {
              text-align: left;
              font: normal normal normal 14px/26px $rubik;
              letter-spacing: 0;
              color: $curriki-main-blue;
            }
          }
        }

        p {
          text-align: left;
          font: normal normal normal 14px/22px $rubik;
          letter-spacing: 0;
          opacity: 1;
        }
        .dropdown {
          margin-top: auto;
        }
        .dropdown-menu {
          padding-left: 10px;
          cursor: pointer;
        }

        button {
          background-color: #fff;
          box-shadow: 0 0 3px 1px #d3cfcf;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-top: 10px;
          text-align: center;
          padding-left: 25px;

          svg {
            color: #333;
          }
        }
      }

      .imgbox {
        width: 20%;
        max-height: 135px;

        div {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        h5 {
          background-color: #000;
          color: #fff;
          font-size: 12px;
          justify-content: center;
          align-content: center;
          display: flex;
          height: 30px;
          align-items: center;
        }
      }

      .content {
        margin-top: 0;
        width: 78%;
        display: flex;
        justify-content: space-between;

        .btn-fav{
          border: 1px solid #eee;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 130px;
          box-shadow: 0 0 7px 2px #eee;
          cursor: pointer;
        }
        .btn-fav.true{

          svg{
            color:goldenrod
          }
        }
      }
    }
  }
}

.clone-lti {
  .modal-title {
    text-align: left;
    font: normal normal 400 18px/24px $rubik;
    color: #084892;
  }

  .modal-body {
    padding: 0;
    background:#EBEEF3;
  }

  .top-box-project {
    max-height: 520px;
    min-height: 300px;
    overflow-y: auto;
    width:55%;
  }

  .footer-model{
     display: flex;
     justify-content: flex-end;
     margin:20px;

    .button-submit{
      background: #5952C6 0% 0% no-repeat padding-box;
      border-radius: 30px;
      width: 98px;
      height: 40px;
      font: normal normal normal 15px/20px $rubik;
      letter-spacing: 0;
      color: #FFFFFF;
      border:none
    }
  }
}

.lti-all-project {
  margin: 15px;
  display: flex;
  justify-content: space-between;
  background:#fff;

  .information-clone{
    width:40%;
    padding: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p{
      font: normal normal normal 14px/22px $rubik;
      color: $mine-shaft;
    }

    .active-resource{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0 3px 6px #00000012;
      border: 1px solid #E1E1E1;
      border-radius: 2px;
      padding: 10px 20px;

      h2{
        font: 400 14px/20px $rubik;
        color: #084892;
        padding: 10px 0;
      }

      h3{
        font: 400 12px/26px $rubik;
        color: $mine-shaft;
        border-top: 1px solid #E6E6E6;
        padding: 10px 0;

        span{
          font-weight: 600;
        }
      }
    }
  }

  .flex-bar {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }

  .btn {
    padding: 10px;
    width: 100%;
  }

  .card-header {
    padding: 0;
  }

  .top-card.card-header {
    background-color: #084892;

    span {
      color: #fff;
      font-weight: 600;

      svg {
        margin-right: 10px;
      }
    }

    .top-card-btn {
      padding: 0;
    }
  }

  .middle-card {
    background-color: #fff;
    border: none;

    span {
      color: #333;
      font-weight: 600;

      svg {
        margin-right: 10px;
        color: #084892;
      }
    }

    .btn-link {
      padding: 0;
    }
  }

  .button-submit {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 5px 1px #ccc;
    width: 200px;
    height: 50px;
    margin: 30px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    background-color: #fff;

    &:hover {
      color: #084892;
    }
  }
}

ul.pagination {
  display: flex;
  margin: 20px 20px;
  justify-content: flex-end;

  .page-item.active {
    .page-link {
      background-color: $curriki-main-blue;
      border-color: $curriki-main-blue;
    }
  }
}

`
