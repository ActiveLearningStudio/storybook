export const IndexStyle = `
@import 'assets/css/index';

.assign-projects {
  margin-top: 5em;
  display: flex;

  .title {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 11px;
    padding-bottom: 10px;
    font-family: $rubik, sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #084892;
  }

  .assign-projects-content {
    width: calc(100% - 292px);
    margin-left: 292px;

    .assign-project-item {
      background: #ffffff;
    }
  }

  .title-box {
    display: flex;

    .title {
      margin: 0;
      letter-spacing: -0.6px;
    }

    .title-cross {
      //width: 58%;
      height: 0;
      margin: 22px 20px 0 27px;
      flex: 1;
      border-top: solid 1px #cbcbcb;
    }
  }

  .describe {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 19px;
  }

  .team-information {
    margin: 0 55px;
  }
}

.form-group {
  &:first-child .add-resource-submit-btn {
    position: absolute;
    right: 50px;
    top: -1.1em;
  }

  &:last-child .add-resource-submit-btn {
    margin-top: 30px;
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

.create-team-continue-btn {
  width: 163px;
  height: 40px;
  margin-top: 20px;
  padding-left: 32px;
  background: url(../../../assets/images/btn-arrow.png) #2ecf43 no-repeat right 23px top 13px;
  border: 0;
  border-radius: 3px;
  box-shadow: none;
  font-family: "rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
}

`
