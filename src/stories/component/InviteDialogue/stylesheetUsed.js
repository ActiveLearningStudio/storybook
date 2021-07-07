export const Stylesheetused = `
@import 'assets/css/index';

$selected_color: #084892;
$filled: #44ca92;

.invite-wrapper {
  position: relative;
  margin-left: auto;

  .invite-btn {
    width: 190px;
    height: 41px;
    padding: 1px 17px 0;
    background: none;
    border: solid 1px #44CA92;
    font-size: 14px;
    letter-spacing: 0.3px;
    text-align: left;
    color: #44CA92;

    &:hover {
      background: #44CA92;
      color: #ffffff;
    }
  }

  .invite-dialog {
    position: absolute;
    right: 0;
    background: white;
    border: solid 1px #e2e2e2;
    text-align: left;
    z-index: 1;

    button {
      border: solid 1px $selected_color !important;

      &.add-note {
        margin-right: 5px;
        background: #FFFFFF !important;
        border: solid 1px #a4a4a4 !important;
        color: #a4a4a4 !important;

        &:hover {
          background: #A4A4A4 !important;
          color: #FFFFFF !important;
        }
      }

      &:disabled {
        margin-right: 5px;
        background: #FFFFFF !important;
        border: solid 1px #a4a4a4 !important;
        color: #a4a4a4 !important;
      }
    }

    h2 {
      font-size: 14px;
    }

    .popup-header {
      padding: 15px 24px;
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px #e2e2e2;

      h2 {
        margin: 0;
        padding: 0;
      }

      .close-circle {
        margin-left: 7px;
        cursor: pointer;

        &::after {
          content: "x";
          height: 16px;
          padding: 0 3px;
          font-size: 16px;
          line-height: 1;
        }

        &:hover {
          color: #252525;
        }
      }
    }

    & > div {
      min-width: 400px;
      padding: 35px 23px 53px;
      letter-spacing: -0.5px;

      .email-input {
        position: relative;
        margin: 10px 0;
        padding: 0 1.5em 0 0.5em;
        background: #FFFFFF;
        border: solid 1px #C4C4C4;

        .input-box {
          padding: 5px 0;
          display: flex;
          flex-wrap: wrap;
          cursor: text;

          input {
            width: 100%;
            min-width: 100px;
            padding: 0 10px 0 5px;
            background: #FFFFFF;
            border: solid 1px #FFFFFF;
            flex: 1;
          }

          svg {
            margin: 0 -17.5px -1px 0;
            animation: spin 1s linear infinite;
          }

          .user-chip {
            width: max-content;
            height: min-content;
            margin: 2px 1px 0 4px;
            padding: 0 5px;
            display: inline-block;
            background-color: #a5a5a5 !important;
            border-radius: 9px;
            font-size: 12px;
            align-self: center;
            color: #fff;
          }

          .close-circle {
            margin-left: 7px;
            cursor: pointer;

            &::after {
              content: "x";
              padding: 0 3px;
              font-size: 14px;
            }

            &:hover {
              border-radius: 50%;
              color: #252525;
            }
          }

          .input-container {
            display: flex;
            flex-wrap: nowrap;
            flex: 1;

            .close-circle {
              position: absolute;
              right: 0.1em;
              top: 0.4em;

              &::after {
                padding: 0 7px;
              }
            }
          }
        }

        .non-invitee-members {
          position: absolute;
          left: 0;
          overflow-y: scroll;
          width: 100%;
          max-height: 170px;
          background: #fff;
          border: solid 1px #e5e5e5;

          .invite-member-item {
            margin: 0;
            padding: 7px 1em;
            display: flex;

            .invite-member-name-mark {
              position: relative;
              width: 30px;
              height: 30px;
              border: solid 1px #e2e2e2;
              border-radius: 50%;
              font-weight: bold;
              text-align: center;
              text-transform: uppercase;
              color: #a5a5a5;

              span {
                position: absolute;
                top: 50%;
                left: 50%;
                margin: 0;
                transform: translate(-50%, -50%);
                font-size: 13px;
              }
            }

            .invite-member-info {
              margin: 0 0 0 13px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-self: center;
              color: #636363;

              .invite-member-name {
                margin: 0;
                font-size: 14px;
                color: $mine-shaft;
              }
            }

            &:hover {
              cursor: pointer;
              background: $curriki-main-blue;
              * {
                color: #fff !important;
              }
            }
          }
        }

        .add-note-box {
          width: 100%;
          height: 75px;
          border: none;
        }
      }

      button {
        padding: 7px 17px;
        border-radius: 2px;
        font-size: 15px;

        &:not(:disabled) {
          background: $curriki-main-blue;
          border: none;
          color: #fff;
        }

        svg {
          margin-left: 8px;
          animation: spin 1s linear infinite;
        }
      }
    }
  }
}

`;
