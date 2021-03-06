export const Stylesheetused = ` 
@import 'assets/css/index';

.create-playlist-btn {
  left: 1467px;
  width: 201px !important;
  height: 40px !important;
  margin: 20px 0;
  padding: 5px 10px 5px 35px;
  background: #fafafa url(../../assets/images/create-playlist-plus-icon.png) no-repeat 96px 16px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  color: #607a9b;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
}

// TODO: didn't used, need to remove after confirm
.remove-playlist-btn {
  background: none;
  border: none;
  float: right;
}

// TODO: didn't used, need to remove after confirm
.playlist-search {
  .search {
    margin-left: 28px;
    padding-left: 25px;
    background: url(../../assets/images/search-icon.png) no-repeat 0 4px;
    border: none;

    &:focus {
      border: 0;
      box-shadow: none;
      outline: 0;
    }
  }
}

// TODO: didn't used, need to remove after confirm
.plist-title {
  font-size: 25px;
  font-weight: bold;
}

// TODO: didn't used, need to remove after confirm
.playlist-preview-wrapper {
  position: relative;
  min-width: 0;
  // display: -ms-flexbox;
  // display: flex;
  // -ms-flex-direction: column;
  // flex-direction: column;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  word-wrap: break-word;

  .preview-header {
    margin-bottom: 0;
    padding: 10px 30px;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
  }
}

// TODO: didn't used, need to remove after confirm
.playlist-preview-content {
  .playlist-title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.playlist-page-project-title {
  h1 {
    margin-top: 20px;
    font-size: 20px;
    color: #0963d7;
    text-transform: capitalize;
  }

  .project-preview {
    height: 40px;
    float: right;

    a {
      margin-top: 0;
      margin-right: 32px;
      background: #fff;
      box-shadow: 1px 1px 8px #ccc;
      font-size: 16px;
      color: #758ba8;
    }
  }
}

`
