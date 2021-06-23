export const IndexStyle = `@import 'assets/css/index';

.member-add {
  height: 46.5rem;
  margin: 3em;
  //padding: 0 0.7em 0 0;
  //display: flex;
  justify-content: space-between;
  //flex-wrap: nowrap;

  .title-box {
    display: flex;

    .title {
      margin: 0;
      letter-spacing: -0.6px;
      padding-top: 11px;
      padding-bottom: 10px;
      font-family: $rubik, sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #084892;
    }

    .title-cross {
      width: 58%;
      height: 0;
      margin: 22px 20px 0 27px;
      border-top: solid 1px #cbcbcb;
    }
  }

  .team-information {
    //width: 65.8rem;
    margin-top: 4em;
    //margin-right: 4em;
    padding: 35px 44px;
    background: #fff;

    .member-management-wrapper {
      margin: 0 0 2em 0;

      .search-box {
        display: flex;
        justify-content: space-between;

        input {
          width: 36%;
          padding: 9px 13px;
          background: #F3F3F3;
          border: solid 1px #C4C4C4;
        }

        .invite-wrapper {
          position: relative;

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

            h2 {
              font-size: 14px;
            }

            h2.font-weight-bold {
              padding: 15px 24px;
              border-bottom: solid 1px;
              border-color: #e2e2e2;
            }

            & > div {
              padding: 35px 23px 53px;
              letter-spacing: -0.5px;

              .email-input {
                margin: 10px 0;

                input {
                  min-width: 263px;
                  padding: 8px 11px;
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
      }

      .member-list {
        margin-top: 2rem;
        border-top: solid 1px;
        border-color: #e2e2e2;
        overflow-y: auto;

        .member-item {
          padding: 16px 0 14px;
          display: flex;
          border-width: 1px 0 0 0;
          border-style: solid;
          border-color: #e2e2e2;

          h2 {
            margin: 0;
          }

          .member-name-mark {
            position: relative;
            width: 50px;
            height: 50px;
            border: solid 1px #e2e2e2;
            border-radius: 50%;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            color: #a5a5a5;
            cursor: pointer;

            &.active {
              background-color: #5952c6;
            }

            &:hover {
              background-color: #5952c6;
              color: #ffffff;
            }

            span {
              position: absolute;
              top: 50%;
              left: 50%;
              margin: 0;
              transform: translate(-50%, -50%);
              font-size: 16px;
            }
          }

          .member-info {
            margin: 8px 0 7px 13px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #636363;

            .member-name {
              font-size: 14px;
              color: $mine-shaft;
            }

            .member-data {
              display: flex;

              h2 {
                font-size: 12px;

                & > span {
                  color: $mine-shaft;

                  & > span {
                    font-size: 8px;
                    color: #c2c2c2;
                  }
                }
              }
            }
          }

          .collapse-btn {
            height: 16px;

            button {
              height: 100%;
              background: none;
              border: none;
              color: #636363;

              svg {
                display: block;
              }
            }
          }

          .button-container {
            position: relative;
            padding: 10px 0;
            flex: 1;
            text-align: end;

            .eliminate-btn {
              min-width: 85px;
              height: 100%;
              background: none;
              font-size: 12px;

              svg {
                transform: rotate(45deg);

                &.spinner {
                  margin-left: 8px;
                  animation: spin 1s linear infinite;
                }
              }

              &:not(.checked) {
                padding: 0 10px;
                border: solid 1px #707070;
                color: #707070;

                &:hover {
                  background: #707070;
                  color: #ffffff;
                }
              }

              &.checked {
                border: solid 1px #c4c4c4;
              }
            }
          }
        }

        .member-project-dialog {
          position: relative;
          max-width: 40%;
          margin: 2px 0 3rem 4rem;
          padding: 31px 20px 10px 24px;
          background: white;
          border: solid 1px #e2e2e2;
          text-align: left;

          &::after {
            content: "";
            position: absolute;
            top: -21px;
            left: 7%;
            border-width: 11px;
            border-style: solid;
            border-color: transparent transparent #ffffff transparent;
            filter: drop-shadow(0px -1px 0 #e2e2e2);
          }

          &.empty {
            h2 {
              font-size: 32px;
              text-align: center;
            }
          }

          & > div {
            position: absolute;
            top: 1em;
            right: 0.7em;
            width: fit-content;
            font-size: 11px;

            &:hover {
              color: red;
              cursor: pointer;
            }

            svg {
              transform: rotate(45deg);
            }
          }

          h2 {
            margin: 0;
            padding: 16px 0 15px;
            font-size: 14px;
            color: $mine-shaft;
          }

          .border-top {
            border-top: solid 1px #EEEEEE;
          }
        }
      }
    }
  }

  .team-description {
    width: 380px;

    .title {
      margin: 2px 0 12px;
      padding: 0 0 0 0;
    }

    .description {
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.5px;
    }
  }
}

.create-team-submit-btn {
  width: 94px;
  height: 40px;
  /* margin-left: 9px; */
  background: #2ecf43;
  border: 0;
  border-radius: 3px;
  box-shadow: none;
  font-family: "rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    margin-left: 8px;
    animation: spin 1s linear infinite;
  }
}

`
