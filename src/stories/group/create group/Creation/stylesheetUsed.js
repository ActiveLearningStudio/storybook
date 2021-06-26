export const IndexStyle = `
.create-group-wrapper {
  margin-top: 23px;
  margin-right: 27.5em;

  @media(max-width: 1540px) {
    margin-right: 1em;
  }

  .creation-panel {
    h2 {
      font-size: 16px;
    }

    .create-group-form {
      .group-info-input {
        & > div {
          h2 {
            margin: 0;
            font-size: 16px;
            line-height: 26px;
            font-weight: normal;
            color: #565656;
          }
        }

        .group-name {
          margin-top: 26px;

          input {
            width: 100%;
            padding: 8px 0 7px 5px;
            border: 1px solid #d9dfe8;
          }
        }

        .group-description {
          margin-top: 24px;

          textarea {
            width: 100%;
            min-height: 150px;
            max-height: 150px;
            padding: 5px;
            border: 1px solid #d9dfe8;
            border-radius: 0;
          }
        }
      }
    }
  }
}

`
