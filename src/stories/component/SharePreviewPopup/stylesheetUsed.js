export const Stylesheetused = `
@import 'assets/css/index';

.share-project-preview-url.project-share-check {
  background: #fff;
  padding: 20px;
  border-radius: 5px;

  nav {
    width: 100%;
    margin-top: 0 !important;
    margin-bottom: 10px;

    a.active {
      color: #fff;
      background-color: #3085d6;
    }
  }

  h1 {
    font-size: 1rem;
  }

  h3 {
    text-align: center;
    padding-bottom: 10px;

    strong {
      text-decoration: underline;
    }
  }

  .tab-pane {
    a {
      flex: auto;

      input {
        width: 100%;
      }
    }
  }

  input {
    flex: auto;
    border: none;
    cursor: pointer;
    color: #007bff;
  }

  i {
    padding-left: 10px;
    cursor: pointer;

    &:hover {
      color: #007bff
    }
  }

  .google-script {
    display: none;
  }

  .margin-bottom-20 {
    margin-bottom: 7px;
    font-size: 12px;

    .margin-left-20 {
      padding-left: 10px;
    }
  }

  .close-btn {
    text-align: center;

    button {
      border: 0;
      border-radius: 0.25em;
      background-color: #3085d6;
      color: #fff;
      font-size: 1.0625em;
      display: inline-block;
      border-left-color: rgb(48, 133, 214);
      border-right-color: rgb(48, 133, 214);
      margin: 0.3125em;
      padding: 5px 30px;
      box-shadow: none;
      font-weight: 500;
      cursor: pointer;
    }
  }
}

`;
