export const Stylesheetused = `
@import 'assets/css/index';

.search-pixels {
  position: relative;

  input {
    border: none;
    font-size: 16px;
    font-weight: 300;
    height: 50px;
    width: 420px;
    padding-left: 50px;
    box-shadow: 0 0 3px 0 #ccc;
  }

  svg {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #ccc;
    -webkit-text-stroke: 1px #fff;
  }

  .fa {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #ccc;
    -webkit-text-stroke: 1px #fff;
  }
}

.upload-thumbnail.check {
  margin-bottom: 20px;

  .thumb {
    max-width: 280px;
  }

  label {
    display: none;
  }

  .upload_placeholder {
    width: 100%;
    margin-top: 20px;
    display: flex;
    cursor: pointer;

    .imgbox {
      height: 200px;
      border: 1px solid #ccc;
      max-width: 280px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      img {
        width: 100%;
        max-height: 100%
      }
    }

    .button-flex {
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .gallery,
    .pexel {
      width: 300px;
      height: 89px;
      display: flex;
      background: #00000000 0% 0% no-repeat padding-box;
      border: 1px solid #D9DFE8;
      border-radius: 1px;
      opacity: 1;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      flex-direction: row;

      p {
        font-weight: 400;
        font-size: 16px;
        padding-left: 10px;
        color: #084892;
      }
    }
  }

  .thumb {
    margin-right: 15px;
    cursor: pointer;
  }

  .fa {
    font-size: 40px;
  }
}

.img-box-pexels {
  max-height: 700px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;

  .read-more-pexel {
    background-color: #084892;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 10px;
  }

  .watermark {
    width: 32.5%;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;

    img {
      width: 100%;
    }

    a {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      display: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &:hover {
      a {
        display: block;
      }

      img {
        filter: brightness(0.7);
      }
    }
  }

  .loader {
    width: 50px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
  }
}


.react-responsive-modal-root {

  z-index: 1040;
}
`;
