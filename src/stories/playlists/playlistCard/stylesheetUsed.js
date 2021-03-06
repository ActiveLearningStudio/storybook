export const Stylesheetused = ` @import 'assets/css/index';

// TODO: didn't used, need to remove after confirm
.playlist-drag-gray {
  background-color: lightgray !important;
}

// TODO: didn't used, need to remove after confirm
.playlist-drag-dashed {
  border-style: dashed;
}

.playlist-add-res-button {
  background: #f9f9f9;
  border-top: 1px solid #d6d6d6;

  .add-resource-to-playlist-btn {
    width: 328px;
    height: 48px;
    margin: 15px;
    display: block;
    background: #ffffff 0 0 no-repeat padding-box;
    border: 1px dashed #d6d6d6;
    border-radius: 2px;
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    color: #607a9b;
    cursor: pointer;

    i {
      margin-right: 5px;
    }
  }
}

.playlist-title-wrapper {
  height: 30px;
  flex: auto;

  .edit-icon {
    display: none;
    color: #868686;
  }

  &:hover {
    .edit-icon {
      display: block;
    }
  }
}

.playlist-header-name {
  min-height: 20px;
  max-height: 256px;
  margin: 0;
  padding: 10px 25px;
  background: #fff;
  border-top: 3px solid #fdc558;
  border-bottom: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: none;
  font-family: $rubik, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  resize: none;

  & > span {
    height: 40px;
    padding-top: 10px;
    display: block;
  }

  .show {
    display: block;
  }

  .hide {
    display: none !important;
  }

  textarea {
    height: 30px;
    flex: auto;
    border: 1px solid blue;
    border-radius: 3px;
    resize: none;
  }

  i {
    font-size: 20px;
  }

  button {
    &:focus {
      box-shadow: none;
    }
  }
}

`
