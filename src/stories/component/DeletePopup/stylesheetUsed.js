export const Stylesheetused = `
@import 'assets/css/index';

.popup {
  position: relative;
  z-index: 1050;

  .playlistName {
    border: 0;

    &:focus {
      border: 0;
      box-shadow: none;
    }
  }

  ::placeholder {
    color: #607a9b;
  }

  .modal .modal-dialog {
    max-width: 440px;
    max-height: 124px;
    padding-top: 30px !important;
  }

  .modal-content {
    border: none;
  }

  .modal-footer {
    padding: 10px 27px;
    display: block;
    background: #f9f9f9;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    .add-playlist-btn {
      padding: 5px 22px;
      background: #2ecf43;
      border-color: #2ecf43;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
    }

    .close-playlist-btn {
      float: right;
      background: none;
      border: none;
      font-size: 24px;
      color: #b1b1b1;
      cursor: pointer;
    }
  }
}
`;
