export const IndexStyle = `
@import 'assets/css/index';

.create-team-sidebar {
  width: 213px;
  min-width: max-content;
  height: 500px;
  border-right: 1px solid #f6f6f6;

  .team-sidebar-btn {
    height: 126px;

    &.selected {
      .btn-box {
        font-family: $halvetica, serif;

        .number-box {
          border: 2px solid #084892;

          span.number {
            background: #084892;
            color: #fff;
          }
        }

        span.bottom-vertical-line {
          background: #084892;
        }

        span.top-vertical-line {
          background: #084892;
        }
      }

      span.name {
        padding: 13px 0 7px 0;
        color: #084892;
      }
    }

    &.filled {
      .btn-box {
        .number-box {
          border: 2px solid #44ca92;

          span.number {
            background: #44ca92;
            color: #fff;
          }
        }

        span.top-vertical-line {
          background: #44ca92;
        }

        span.bottom-vertical-line {
          background: #44ca92;
        }
      }

      span.name {
        padding: 13px 0 7px 0;
        color: #44ca92;
      }
    }

    &.filled.selected {
      span.name {
        border-right: 3px solid #084892;
      }
    }

    .btn-box {
      position: relative;

      .number-box {
        position: absolute;
        padding: 3px;
        display: inline-block;
        border: 5px solid #efefef;
        border-radius: 50%;

        span.number {
          width: 30px;
          height: 30px;
          padding-top: 4px;
          display: inline-block;
          border-radius: 50%;
          font-weight: bold;
          text-align: center;
          color: #efefef;
        }
      }

      span.top-vertical-line {
        position: absolute;
        top: -38px;
        left: 20px;
        width: 3px;
        height: 38px;
        display: inline-block;
        background: #efefef;
      }

      span.bottom-vertical-line {
        position: absolute;
        bottom: -116px;
        left: 20px;
        width: 3px;
        height: 76px;
        display: inline-block;
        background: #efefef;
      }
    }

    span.name {
      margin-left: 50px;
      padding-top: 7px;
      padding-bottom: 10px;
      display: block;
      font-family: "rubik", sans-serif;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
    }
  }

  .select-question {
    height: 126px;
  }

  .select-description {
    height: 126px;
  }
}

`
