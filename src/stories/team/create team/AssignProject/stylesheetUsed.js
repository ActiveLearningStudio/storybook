export const IndexStyle = `
@import 'assets/css/index';

.assign-project-wrapper {
  .search-box {
    margin: 25px 0 25px 0;

    input {
      min-width: 17rem;
      padding: 9px 40px 9px 14px;
      background: #F3F3F3;
      border: solid 1px #c4c4c4;

      &::placeholder {
        font-size: 12px;
      }
    }

    svg {
      margin-left: -27px;
      animation: spin 1s linear infinite;
    }
  }

  .assign-projects {
    //min-height: 360px;
    padding-top: 19px;
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;

    .assign-project-item {
      position: relative;
      height: 190px;
      margin-right: 18px;
      margin-bottom: 18px;
      border: solid 1px #e2e2e2;

      .project-img {
        min-width: 180px;
        max-width: 180px;
        min-height: 123px;
        background-position: center;
        background-size: cover;
      }

      .assign-project-radio {
        position: absolute;
        right: 15px;
        top: 15px;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border: 2px solid #084892;
        border-radius: 50%;
        cursor: pointer;

        .checkmark {
          width: 14px;
          height: 14px;
          background-color: #084892;
          box-shadow: 0 3px 6px #00000029;
          border-radius: 50%;
        }
      }

      .assign-project-title {
        width: 180px;
        padding: 14px 22px 14px 13px;
        border-top: solid 1px #e2e2e2;
        line-height: 18px;
      }
    }
  }
}


`
