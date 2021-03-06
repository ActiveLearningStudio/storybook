export const Stylesheetused = `@import "assets/css/index";

.admin-panel {
  .main-heading {
    p {
      color: #084892;
      font-size: 14px;
      margin: 0;
    }
    .secand-heading {
      display: flex;
      align-items: center;
      margin-top: 7px;

      img {
        width: 33px;
        height: 33px;
      }

      h2 {
        margin: 0 0px 6px 5px;
        color: #084892;
      }
    }
  }

  .bradecrumd {
    width: 330px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: #888888;

          .home-logo {
            width: 20px;
            height: 20px;
            margin: 0 3px 4px 0;
          }
        }
        .span-text {
          margin-left: 10px;
        }
      }
    }
  }

  button.dropdown-toggle {
  }

  .inner-content {
    background: $white;
    padding: 30px;
    margin: 20px 15px 20px 5px;
  }
  nav {
    margin: 0;
    width: 100%;
    margin-top: 25px;
    border-bottom: 1px solid $fun-blue-1;

    .nav-link {
      border-radius: 3px 3px 0px 0px;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: $white;
      background: $fun-blue-1;
      font-weight: 400;
      padding: 5px 30px;
      margin-right: 10px;

      color: #fff;
      border-color: $fun-blue-1 !important;
    }

    .nav-link.active {
      background: $white;
      color: $fun-blue-1;
    }
  }

  .tab-content {
    nav {
      margin: 0;
      width: 100%;
      margin-top: 25px;
      border-bottom: none !important ;
    }
    h2 {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #515151;
      margin-top: 30px;
      margin-bottom: 0px;
    }
    .nav-link {
      border-radius: 3px 3px 0px 0px;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: $white;
      background: transparent;
      font-weight: 400;
      padding: 5px 30px;
      margin-right: 10px;
      padding-left: 0;
      color: $fun-blue-1;
      border: none !important;
    }

    .nav-link.active {
      background: transparent;
      color: $fun-blue-1;
      font-weight: bold;
      border-bottom: 3px solid$fun-blue-1 !important;
    }
  }

  .controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    border: 1px solid #ccc;

    .drop-counter {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        color: #515151;
        padding: 0 5px;
        box-shadow: 0px 0px 0px transparent !important;
        border-bottom: 1px solid #515151;
        border-radius: 0;
      }
    }

    .radio-filter {
      padding: 10px;
      .group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0px;
        border-bottom: 1px solid #515151;
      }
      label {
        margin: 0;
        color: #515151;
        font-size: 12px;
      }
    }

    .search-bar {
      position: relative;
      input {
        border: none;
        border-bottom: 1px solid #515151;
        font-weight: 400;
        font-size: 14px;
        padding-right: 20px;
      }

      img {
        position: absolute;
        right: 0;
      }
    }

    .import-user {
      display: flex;
      align-items: start;
      font-size: 12px;
      text-decoration: underline;
      color: $fun-blue-1;

      img {
        margin-right: 5px;
        width: 13px;
        margin-bottom: 1px;
      }
    }

    .print-info {
      display: flex;
      align-items: center;
      font-size: 14px;
      text-decoration: underline;

      img {
        margin-left: 10px;
      }
    }

    .btn-text {
      .add-user-btn {
        max-width: 450px;

        .dropdown {
          top: 0;
          right: 0;
        }

        .dropdown-toggle {
          color: $fun-blue-1;
          background-color: transparent;
          font-weight: normal;
          font-size: 14px;
        }
        .dropdown-item {
          width: auto;
          background-color: transparent;
          padding: 0px;
        }
        .add-user-organization {
          padding: 15px;
          width: 300px;

          .form-group-create {
            padding-bottom: 15px;
          }

          h3 {
            font-weight: normal;
            font-size: 14px !important;
            color: #515151 !important;
            padding-bottom: 5px im !important;
          }

          input,
          select {
            width: 100% !important;
            height: 27px !important;
          }
          .loader {
            width: 30px;
            margin: 5px;
          }
          .error {
            color: red;
            padding-top: 5px;
            font-size: 12px;
          }
          .btn-group {
            button {
              width: auto;
              height: 32px;
              padding: 0px 20px;
            }
          }
        }
        .all-users-list {
          position: absolute;
          top: 93px;
          background: #fff;
          padding: 10px;
          width: 90%;
          max-height: 140px;
          overflow: auto;
          border: 1px solid #ccc;
          z-index: 11;

          li {
            font-size: 14px;
            padding: 5px 0px;
            border-bottom: 1px solid #ccc;
            color: $fun-blue-1;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }

          p {
            font-size: 11px;
            text-decoration: underline;
            margin-bottom: 0px;
            color: #ccc;
          }
        }

        .btn-group {
          margin-top: 12px;
          width: 100%;

          button {
            background: $fun-blue-1;
            border: 1px solid $fun-blue-1;
            box-sizing: border-box;
            border-radius: 50px;
            font-weight: normal;
            font-size: 14px;
            color: $white;
            margin-right: 16px;
            width: 33%;
            min-height: 32px;
          }
          .cancel-create {
            background: #e5e5e5;
            color: $fun-blue-1;
          }
        }
      }
      button {
        background: $fun-blue-1;
        border: 1px solid $fun-blue-1;
        box-sizing: border-box;
        border-radius: 50px;
        color: $white;
        padding: 5px 20px;

        svg {
          color: #f8af2c;
          margin-right: 7px;
        }
      }
    }
  }

  .table-data {
    table {
      width: 100%;

      td,th {
        border: 1px solid #C4C4C4;
        padding:16px;
        span {
          display: flex;
        }
        .links {
          display: flex;
          justify-content: space-between;
        }
      }

      th {
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        color: #515151;
      }

      tr {
        &:nth-of-type(odd) {
          background: #f0f1f3;
        }
      }

      .org-rows {
        img {
          width: 75px;
        }

        .view-all {
          background: #f8af2c;
          color: $fun-blue-1;
          display: flex;
          justify-content: center;
          padding: 2px;
          width: 60px;
          margin-top: 5px;
          border-radius: 7px;
          cursor: pointer;
        }
      }
    }
  }

  .pagination-top {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #515151;
    padding: 20px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 0;
    margin: 0;
    width: 100%;
    float: none;
  }
  .pagination {
    margin: 15px auto;
    display: flex;
    float: right;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: $fun-blue-1;
    border-color: $fun-blue-1;
    color: #fff;
  }
  .pagination > li > a {
    border: 1px solid$fun-blue-1;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: $fun-blue-1;
    border-color: $fun-blue-1;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: $fun-blue-1;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
  .form-new-popup-admin {
    position: fixed;
    background: #0848928f;
    top: 0;
    width: 100%;
    z-index: 1060;
    height: 100%;
    overflow-y: auto;
    padding-left: 285px;

    .cross-all-pop {
      position: absolute;
      top: 50px;
      right: 50px;
      font-size: 28px;
      cursor: pointer;
    }

    .inner-form-content {
      background: #fff;
      opacity: 1;
      width: 100%;
      height: 150vh;
      display: flex;
      justify-content: left;
      align-items: flex-start;
      padding: 50px;

      .create-form {
        width: 100%;
        height: 80%;
        h2 {
          font-weight: 500;
          font-size: 31.25px;
          line-height: 37px;
          border-bottom: 4px solid #f8af2c;
          color: $fun-blue-1;
          padding-bottom: 5px;
          width: fit-content;
          margin-bottom: 30px;
        }

        .form-group-create {
          margin-bottom: 10px;
          input,
          textarea {
            width: 100%;
            height: 38px;
            border: 1px solid #888888;
            box-sizing: border-box;
            border-radius: 3px;
          }

          textarea {
            height: 100px;
          }

          select {
            width: 100%;
            height: 38px;
            border: 1px solid #888888;
            box-sizing: border-box;
            border-radius: 3px;
          }
          h3 {
            font-size: 16px;
            line-height: 127.85%;
            margin: 0;
            font-weight: 400;
          }
        }

        .permissions {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .form-grouper {
            align-items: center;
            display: flex;
            flex-basis: 33%;
            padding-top: 10px;

            input {
              width: 14px;
              height: 10px;
              margin-right: 5px;
            }

            label {
              margin: 0;
              font-size: 14px;
            }
          }
        }

        .imgupload {
          position: relative;

          button {
            position: absolute;
            top: 0;
            right: 0;
            height: 45px;
            background: #c4c4c4;
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
          }
        }

        .error {
          color: red;
          font-size: 12px;
        }

        .button-group {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;

          button {
            background: $fun-blue-1;
            border-radius: 50px;
            padding: 7px 20px;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #ffffff;
            border: none;
            padding: 10px 40px;
            border: 1px solid$fun-blue-1;
          }
          button.cancel {
            color: $fun-blue-1;
            background: #fff;
          }
        }
      }
    }
  }

  .user-roles {
    border: 1px solid #ccc;
    padding: 0px 20px;

    h2 {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      color: #515151;
    }
    .box-group {
      display: flex;
      justify-content: space-between;
      margin-top: 35px;

      .top-cat {
        width: 15%;
        h3 {
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
          text-decoration-line: underline;

          color: #084892;
        }
        ul {
          list-style-type: disc;
          margin: 13px;
          margin-left: 25px;
          li {
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            text-decoration-line: underline;
            color: #084892;
            padding-bottom: 10px;
            cursor: pointer;
          }
        }
      }

      .child-cat {
        width: 74%;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;

        .all-cat {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 10px 20px;

          .form-grouper {
            flex-basis: 25%;
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            label {
              font-weight: normal;
              font-size: 14px;
              line-height: 19px;
              padding-left: 10px;
              color: #515151;
              margin: 0;
            }

            input {
              width: 14px !important;
              height: 11px !important;
            }
          }
        }
      }

      .config {
        width: 13%;
        .btn-config {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 10px;

          .btn-update {
            background: none;
            border-radius: 30px;
            border: 1px solid $fun-blue-1;
            padding: 14px 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 0;
            color: $fun-blue-1;
            margin-bottom: 15px;
            font-size: 16px;
          }

          .btn-del {
            border: none;
            background: transparent;
            font-size: 14px;
            color: #084892;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.img-upload-form {
  .playimg {
    background-size: contain;
    width: 100%;
    height: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  width: 220px;
  height: 220px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  .update-img {
    background: #005affd1;
    width: 100%;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding: 5px 0px;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    color: #515151;
    padding-top: 10px;
  }
}

.dynamic-roles {
  .accordion {
    margin-top: 10px;
    .card {
      cursor: pointer;

      .card-header {
        background: $fun-blue-1;
        color: #fff;
        padding: 6px 10px;
      }
    }
    label {
      cursor: pointer;
    }
  }
  .card-body {
    display: flex;
    flex-wrap: wrap;

    padding: 10px 20px;

    .form-grouper {
      flex-basis: 33%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      label {
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        padding-left: 10px;
        color: #515151;
        margin: 0;
      }

      input {
        height: 11px !important;
        width: 11px !important;
      }
    }
  }
}
`
