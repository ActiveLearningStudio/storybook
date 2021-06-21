export const Stylesheet = `
@import 'assets/css/index';

aside {
  // Toggle CSS styles
  div.toggleSidebar {
    padding: 20px;
    border-top: 1px solid #e8e8e8;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    & > a > img {
      padding:12px;
      margin:auto;
      width: 52px;
      height: 52px;
      border-bottom: 1px solid #e8e8e8;
    }
  }
  .collapsedown{
    a {
      position: relative;
    }

    .tagline {

    position: absolute;
    white-space: nowrap;
    border: none;
    background: #F8AF2C;

    padding: 2px 15px;
    -webkit-clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
    display: none;
    top: 20px;
    left: 50px;
    font-weight: 600;

    }
    a {
    &:hover
      .tagline {
        display: block;
      }
    }

  }
  min-height: 900px;
  padding-top: 30px;
  padding-right: 0;
  background: #fff;
  .toggleButton {
    position: absolute;
    top: 10px;
    right: -13px;
    transition: transform 1s;
    cursor: pointer;
    z-index: 111
  }
  & > ul {
    padding: 0 30px;
    list-style: none;

    & > li {
      border-top: 1px solid #e8e8e8;

      a {
        color: #607a9b;
      }

      & > a {
        padding-top: 20px;
        padding-bottom: 20px;
        display: block;
        font-size: 20px;

        &:hover {
          text-decoration: none;
        }
      }

      &:last-child {
        border-bottom: none;
      }

      .sublist {
        padding-left: 25px;
        list-style: none;

        a {
          padding-top: 5px;
          padding-bottom: 5px;
          display: block;
          font-size: 14px;
        }
      }

      .add-member {
        padding-left: 25px;

        button {
          margin-top: 20px;
          margin-bottom: 50px;
          padding: 5px 10px 5px 35px;
          background: #fafafa url(../../assets/images/add-member-icon.png) no-repeat 10px 9px;
          border: 1px solid #bfbfbf;
          border-radius: 2px;
          color: #607a9b;
          cursor: pointer;
        }
      }
    }
  }

  .sidebar-icon {
    width: 25px;
    height: 20px;
    display: inline-block;
  }

  .my-resources-icon {
    background: url(../../assets/images/my-resource-icon.png) no-repeat 0 7px;
  }

  .teams-icon {
    background: url(../../assets/images/teams-icon.png) no-repeat 0 7px;
  }

  .favorites-icon {
    background: url(../../assets/images/favorites-icon.png) no-repeat 0 7px;
  }

  .recent-resource-icon {
    background: url(../../assets/images/recent-resource-icon.png) no-repeat 0 7px;
  }
}

.sidebar-all {
  .expand {
    width: 100%;
    display: block;
    border-top: 1px solid #e8e8e8;
    font: normal normal normal 13px/22px $rubik;
    letter-spacing: 0;
    color: $curriki-main-blue;
    text-align: left;
    text-decoration: underline;
    opacity: 1;

    svg {
      margin-left: 10px;
    }
  }
  .accordion{
    display:flex;
    .row-administrate {
      padding: 12px 52px;
      padding-top: 19px;
      padding-bottom: 17px;
      border-top: 1px solid #e8e8e8;
      button{
        display:flex;
        padding: 0px !important;
        box-shadow:none;
        text-decoration: none;
      }
      .heading-administrate {
        padding-left: 13px;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        margin-right: auto;
        letter-spacing: 0.01em;
        color: $curriki-main-blue;
        svg {
          margin-left: 42px;
        }
      }
      .collapse{
        border-left: 2px solid #084892;
        margin-left: 35px;
      }
      a{
        display: flex;
        font-style: normal;
        font-weight: 500;
        margin-left: 35px;
        text-decoration: none;
        margin:0px;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.01em;
        color:$curriki-main-blue;
      }
      a::before {
        content: "-";
        color: #084892;
        padding-right: 5px;
        margin:0px;
        padding-left: 0px;
    }
      .active {
        background: #EAECEE;
      }
      .org-icon {
        width: 21px;
        height: 21px;
      }
    }
  }
  .goto-dashboard{
    display:flex;
    padding: 15px 52px 39px;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: $curriki-main-blue;
  }
  .dashboard-chevron {
    padding-left: 11px;
    height: 14.88px;
  }
  .org-name {
    padding: 28px 20px 18px 27px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 130.9%;
    color: #515151;
    border-top: 1px solid #e8e8e8;
  }
  .row-sidebar {
    display: flex;
    padding: 12px 52px;
    padding-top: 19px;
    padding-bottom: 17px;
    justify-content:flex-end;
    border-top: 1px solid #e8e8e8;
  }
  .sidebar-headings {
    padding-left: 13px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-right: auto;
    letter-spacing: 0.01em;
    color: $curriki-main-blue;
  }
  .headings-angle-right {
    color: $curriki-main-blue;
  }
  .menu-title {
    padding: 12px 20px;
    font: normal normal bold 16px/25px $rubik;
    font-weight: 600;
    letter-spacing: 0;
    color: $curriki-main-blue;
    text-align: left;
    text-transform: uppercase;
    opacity: 1;

    &:hover {
      cursor: pointer;
      text-decoration: none !important;
    }
  }

  .team-item {
    margin: 12px 20px;
    border: solid 1px #e6e6e6;

    &:hover {
      cursor: pointer;
      text-decoration: none !important;
    }

    .team-label {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px #e6e6e6;
      font-size: 14px;
    }

    .team-detail-labels {
      display: flex;
      flex-direction: column;

      a {
        padding: 10px 15px;
        font-size: 12px;

        .project-title {
          padding-top: 0;
          padding-left: 24px;
          background: url(../../assets/images/project.svg) no-repeat;
          background-size: 25% 100%;
          letter-spacing: -0.5px;
        }

        .channel-title {
          padding-top: 0;
          padding-left: 24px;
          background: url(../../assets/images/users_net.svg) no-repeat;
          background-size: 25% 100%;
          letter-spacing: -0.5px;
        }

        &.active-label {
          color: $curriki-main-blue;
        }

        svg {
          margin-right: 8px;
        }
      }
    }

    &.collapsed {
      .team-label {
        background: #EEEEEE;
      }

      .team-detail-labels {
        display: none;
      }
    }
  }

  .create-button {
    text-align: center;

    div {
      padding: 7px;
      background: none;
      border: solid 1px;
      border-radius: 5px;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      color: $curriki-main-blue;
      //font-style: normal;
      //font-variant-ligatures: normal;
      //font-variant-caps: normal;
      //font-variant-numeric: normal;
      //font-variant-east-asian: normal;
      //font-stretch: normal;
    }
  }

  a {
    padding: 10px 0;
    font: normal normal 400 14px/25px $rubik;
    font-weight: 400;
    letter-spacing: 0;
    color: $mine-shaft;
    text-align: left;
    opacity: 1;
  }
}


`
