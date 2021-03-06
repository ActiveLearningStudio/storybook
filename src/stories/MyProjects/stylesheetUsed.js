export const Stylesheetused = `
@import 'assets/css/index';

.program-tile {
  height: 100%;
  min-height: 450px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .program-thumb {
    height: 200px;
    overflow: hidden;

    a {
      width: 100%;
      height: 100%;
      display: block;
    }

    .project-thumb {
      min-height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    img {
      min-width: 100%;
      min-height: 100%;
      height: auto;
      margin: auto;
      display: block;
    }
  }

  .program-content {
    height: calc(100% - 200px);
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      margin-top: 10px;

      a {
        font-family: $rubik, sans-serif;
        font-size: 20px;
        font-weight: 300;
        color: #607a9b;
        word-break: break-word;
        line-height: 120%;
        display: block;

        @media (max-width:1500px) {
          font-size: 18px;
        }

        &:hover {
          text-decoration: none;
        }
      }
    }

    i {
      font-size: 20px;
    }

    button {
      box-shadow: none;
    }

    .program-creator {
      font-size: 14px;
      color: #aaa;

      a {
        color: inherit;
      }
    }

    .lessons-duration {
      margin-top: 10px;

      p {
        font-size: 12px;
        line-height: 134%;
        color: $dove-gray;
        font-weight: 400;
        letter-spacing: 0;
        text-align: justify;
        word-break: break-word;
      }

      .lessons {
        display: inline-block;

        .icon {
          width: 13px;
          height: 13px;
          margin-top: 3px;
          margin-right: 8px;
          display: block;
          float: left;
          background: url(../../assets/images/program-lesson-icon.png) no-repeat center;
        }
      }

      .duration {
        margin-left: 15px;
        display: inline-block;

        .icon {
          width: 13px;
          height: 13px;
          margin-top: 3px;
          margin-right: 8px;
          display: block;
          float: left;
          background: url(../../assets/images/program-duration-icon.png) no-repeat center;
        }
      }
    }

    .go-to-playlist {
      position: absolute;
      bottom: 10px;
      right: 30px;
      margin-top: 25px;
      text-align: right;
    }
  }

  .button-bottom {
    margin: -10px;
    display: flex;

    .fa {
      padding-right: 3px;
      font-size: 12px;
    }

    a {
      width: 33.33%;
      padding: 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ece9e9;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      color: #5952c6;
      letter-spacing: 0;
      opacity: 1;
      background-color: #fff;

      &:hover {
        background: $fun-blue-1;
        color: #fff !important;
        text-decoration: none;
      }
    }
  }

  &:hover .button-bottom {
    display: flex;
  }
}

.program-page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 10px;
    padding-left: 40px;
    padding-bottom: 10px;
    background: url(../../assets/images/my-projects-icon.png) no-repeat 0 9px;
    font-family: $rubik, sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #607a9b;
  }

  .btn-top-page {
    width: -moz-fit-content;
    width: 150px;
    height: 35px;
    margin-bottom: 10px;
    //padding: 3px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5952c6;
    border-radius: 20px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    cursor: pointer;

    .fa {
      padding-right: 5px;
    }
  }
}

// TODO: didn't used, need to remove after confirm
.program-search {
  .search {
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

.project-headline {
  padding-top: 20px;

  .title {
    font-weight: 500;
    font-size: 31.25px;
    color: $fun-blue-1;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;

    img {
      width:35px;
      margin-right: 5px;
    }
  }

  p{
    font-size: 14px;
    color: $dove-gray
  }

  .btn-top-page {
    font-size: 14px;
    color: $mercury;
    font-size: 14px;
    background: $fun-blue-1;
    border: 1px solid $fun-blue-1;
    box-sizing: border-box;
    border-radius: 50px;
    align-items: center;
    width: 160px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

`
