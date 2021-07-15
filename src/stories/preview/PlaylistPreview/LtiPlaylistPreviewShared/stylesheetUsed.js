export const Stylesheetused = `
@import "assets/css/index";

.flex-container {
  display: flex;

  -ms-box-orient: horizontal;
}

.disabled-link {
  pointer-events: none;
}

.wrap {
  flex-wrap: wrap;
}

.container.flex-container {
  &:before,
  &:after {
    display: block;
  }
}

img {
  max-width: 100%;
}

.btn-expand-collapse {
  svg {
    font-size: 25px;
    color: $curriki-main-blue;
    transition-delay: 0.5s;
    transition-duration: 0.5s;
  }

  &.collapsed {
    svg {
      transform: rotate(180deg);
    }
  }
}

/* CSS FOR RIGHT SIDE - 30 may */
.right-sidegolf-info {
  position: relative;
  width: 507px;
  min-height: 100vh;
  padding: 30px 50px;
  background-color: #ffffff;

  nav {
    width: 100%;
    margin-top: 0px;
    height: 50px;
    float: none;

    a.nav-item {
      width: 33.3%;
      color: #1b1b1b;
      font-weight: 600;
      text-align: center;
      border: none;
    }
    a.nav-item.active {
      width: 33.3%;
      color: #1b1b1b;
      font-weight: 600;
      border-bottom: 5px solid #084892 !important;
    }
  }

  .link {
    font-family: $rubik, sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #126bdf;

    &:hover {
      text-decoration: underline;
    }
  }

  .back-header {
    a img {
      margin-right: 15px;
    }
  }
}

.activity-bg {
  position: relative;
  padding: 55px 87px;
  background-color: #686868;
  color: #ffffff;
}

.left-vdo {
  position: relative;
  width: calc(100% - 507px);
  /* margin-bottom: 70px; */
}

.main-heading {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #7b7b7b;
  font-family: $rubik, sans-serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
}

.sidebar-heading {
  margin-bottom: 30px;
  font-family: $rubik, sans-serif;
  font-weight: 300;
  font-size: 26px;
  line-height: 36px;
  color: #707070;
}

.sub-heading {
  font-family: $rubik, sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
}

.main-heading,
.sub-heading {
  span {
    margin-right: 15px;
    display: inline-block;
    color: #333;
  }
}

.act-top-header {
  position: relative;
  margin-bottom: 60px;

  .heading-wrapper {
    width: calc(100% - 160px);
  }

  .main-heading {
    display: inline-block;
  }
}

.right-control {
  position: absolute;
  right: 65px;
  top: 60px;
  width: 140px;
  height: 70px;
  background: #ddd;

  .slide-control {
    width: 70px;
    height: 70px;
    display: inline-block;
    float: left;
    background-color: #757575;
    line-height: 70px;
    text-align: center;
    transition: 500ms ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #707070;

      > img {
        filter: none;
      }

      > .hover-control-caption {
        display: flex;
        transform: translate3d(0, 0, 0);
      }
    }

    > img {
      filter: invert(0) brightness(10);
    }

    &.prev .hover-control-caption {
      right: 0;
      left: auto;
    }

    &.prev > img {
      transform: rotate(-180deg);
    }

    &.next {
      border-left: 1px solid rgba(255, 255, 255, 0.26);
    }
  }
}

.panel-list li {
  position: relative;
  padding: 20px 20px 20px 110px;
  border-bottom: 1px solid #f3f3f3;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }

  .panel-heading {
    max-width: 80%;
    margin-bottom: 10px;
    font-family: $rubik, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #090708;
  }

  .small-thumb {
    position: absolute;
    left: 20px;
    top: 5px;
    width: 80px;

    .list-img-thumbnail {
      width: 100%;
      height: 50px;
      background-size: cover;
    }
  }

  .date {
    position: absolute;
    right: 20px;
    bottom: 15px;
    font-family: $rubik, sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    color: #b7b7b7;
  }

  .list-inline {
    display: flex;
    flex-wrap: wrap;

    .inline-img {
      display: inline-flex;

      img {
        margin-right: 15px;
      }
    }

    img {
      height: 100%;
      max-height: 100%;
      display: inherit;
    }
  }
}

.item-caption-bottom {
  position: relative;
  padding: 15px;
  background-color: #ffffff;
  line-height: 1.2;
  color: #000;
}

.hover-control-caption {
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 1;
  width: 190px;
  min-height: 155px;
  margin-top: 17px;
  padding: 10px;
  display: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 3px 0 #ccc;
  text-align: center;
  transition: transform 0.35s;
  transform: translate3d(0, 20px, 0);
  cursor: pointer;

  .img-in-hover {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    display: block;
    background-size: cover;
    background-position: top;
    border-radius: 5px;
  }

  &:before {
    /* position: absolute;
    content: "";
    top: -9px;
    border-bottom: 10px solid #ffffff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    left: 50%;
    margin-left: -5px;
    z-index: 11; */
  }

  &:after {
    /* content: "";
    border: 9px solid transparent;
    width: 100%;
    position: absolute;
    top: -17px;
    z-index: 0;
    background: transparent; */
  }

  span {
    display: block;
    color: #090708;
    font-family: $rubik, sans-serif;
    font-weight: 600;
    line-height: 16px;
    font-size: 14px;
    padding-top: 10px;
  }

  img {
    max-width: 70px;
    margin-bottom: 15px;
  }
}

.tooltip {
  position: relative;
  display: inline-block;

  span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -30px;
    z-index: 20;
    /* opacity: 0.8; */
    width: 100px;
    padding: 0 5px;
    display: none;
    background: #757575;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 0 3px 2px rgba(214, 214, 214, 0.38);
    font-size: 12px;
    text-align: center;
    color: #ffffff;
    /* color: #757575; */
  }

  &:hover span {
    display: inline;
  }
}

.back-arrow {
  filter: invert(52%) sepia(83%) saturate(2850%) hue-rotate(203deg)
    brightness(87%) contrast(97%);
}

.breadcrum {
  margin: 0;
  padding: 15px 0;
  list-style-type: none;

  li {
    position: relative;
    padding: 0 45px 5px 0;
    display: inline-block;
    font-family: $rubik, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 25px;
    color: #5a5a5a;

    a {
      text-decoration: underline;
      color: #5a5a5a;
    }

    &:not(:last-child):after {
      content: "";
      position: absolute;
      right: 15px;
      top: 10px;
      width: 6px;
      height: 10px;
      background: url(../../../assets/images/right-arrow.png) no-repeat right
        top;
    }
  }
}

@media (max-width: 1540px) {
  .activity-bg {
    padding: 55px 65px;
  }

  .hover-control-caption {
    width: 160px;
  }
}

@media (max-width: 1480px) {
  .activity-bg {
    padding: 50px;
  }

  .right-control {
    top: 50px;
    right: 50px;
  }
}

@media (max-width: 1380px) {
  .main-heading {
    font-size: 22px;
  }

  .sidebar-heading {
    font-size: 24px;
  }

  .activity-bg {
    padding: 40px;
  }

  .right-control {
    top: 40px;
    right: 40px;
  }

  .right-sidegolf-info {
    width: 450px;
    padding: 30px 40px;
  }

  .left-vdo {
    width: calc(100% - 450px);
  }

  .panel-list li .panel-heading {
    max-width: 90%;
  }
}

@media (max-width: 1200px) {
  .activity-bg {
    padding: 30px;
  }

  .main-heading {
    font-size: 20px;
  }

  .sidebar-heading {
    font-size: 22px;
  }

  .right-sidegolf-info {
    width: 400px;
    padding: 30px;
  }

  .panel-list li .panel-heading {
    max-width: 100%;
  }

  .left-vdo {
    width: calc(100% - 400px);
  }
}

@media (max-width: 991px) {
  .right-control {
    position: relative;
    height: 50px;
    width: 100px;
    top: inherit;
    right: inherit;
    //order: 3;

    .slide-control {
      width: 50px;
      height: 50px;
      line-height: 50px;

      &.prev .hover-control-caption {
        right: auto;
        left: 0;
      }
    }
  }

  .sidebar-heading {
    font-size: 20px;
    line-height: 120%;
  }

  .act-top-header .heading-wrapper,
  .act-top-header {
    width: 100%;
  }

  .act-top-header {
    margin-bottom: 50px;
  }

  .left-vdo {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
  }

  .main-item-wrapper {
    margin-bottom: 50px;
  }
}

@media (max-width: 992px) {
  .right-sidegolf-info {
    width: 350px;
  }

  .left-vdo {
    width: calc(100% - 350px);
  }
}

@media (max-width: 768px) {
  .left-vdo,
  .right-sidegolf-info {
    width: 100%;
    margin-bottom: 30px;
  }

  .left-vdo {
    order: 2;
  }

  .right-sidegolf-info {
    height: auto;
    min-height: auto;
    order: 1;
  }

  .panel-list li .small-thumb {
    left: 10px;
    top: 10px;
  }

  .act-top-header,
  .main-item-wrapper {
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  .sidebar-heading {
    font-size: 18px;
    line-height: 120%;
  }

  .right-sidegolf-info,
  .activity-bg {
    padding: 20px;
  }

  .panel-list li {
    padding: 15px 15px 15px 80px;

    .date {
      position: relative;
      right: inherit;
      bottom: inherit;
    }

    .list-inline {
      margin-bottom: 10px;
    }

    .small-thumb {
      left: 15px;
      top: 15px;
      width: 55px;
      margin-right: 0;
    }
  }

  .item-caption-bottom {
    font-size: 14px;
  }

  .main-heading {
    font-size: 18px;
    line-height: 26px;
  }
}

.back-header {
  .preview-dropdown {
  }

  .dropdown-menu {
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    left: 0 !important;

    &.no-activities {
      left: 0 !important;
    }

    .alert {
      margin-top: 1rem;
    }
  }
}

@media (max-width: 767px) {
  .flex-container.previews {
    flex-wrap: wrap;

    @media (max-width: 767px) {
      flex-wrap: wrap-reverse;
    }

    .right-sidegolf-info {
      //width: 100%;
    }

    .flex-container-preview {
      width: 100%;

      .slider-btn {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }

      .slider-hover-section {
        margin: 0 15px;
      }
    }

    .left-vdo {
      max-height: 100% !important;
      min-height: auto !important;
      margin-bottom: 15px;

      .main-item-wrapper {
        width: 100%;
        margin-bottom: 0;
        min-height: auto;
      }
    }
  }

  .main-page-content.preview {
    height: auto;
  }
}

.main-page-content.preview.embed {
  padding: 0;
  background-color: #fff;

  @media (max-width: 991px) {
    padding: 10px;
  }

  .flex-container.previews {
    max-width: 100%;
    height: 100%;
  }

  .main-item-wrapper,
  .activity-bg.left-vdo {
    min-height: 100%;
  }
}

@media (min-width: 767px) {
  .iframe-height-resource-shared {
    padding: 50px 15px 20px;
    background-image: linear-gradient(#1b2e3d, #eee) !important;

    .main-item-wrapper {
      //max-height: initial !important;
      min-height: 100% !important;
    }
  }

  .iframe-height-resource {
    padding: 50px 15px 20px;
    background-image: linear-gradient(#1b2e3d, #eee) !important;

    .container-flex-upper {
      position: fixed;
      max-width: 100%;
      width: 100%;
      top: 0;
      z-index: 1;
      opacity: 1;
      display: flex;
      justify-content: space-between;
      padding: 10px 60px;
      /* background: red; */
      box-shadow: 0 -1px 0 #555 inset;
      background-color: #084892;
      font-size: 12px;
      color: #111;
      font-weight: 400;
      align-items: center;
      border-radius: 0px;

      .both-p {
        display: flex;
        text-transform: uppercase;
        align-items: center;

        a {
          padding-right: 20px;
        }
      }
    }

    .flex-container.previews {
    }

    .main-item-wrapper {
      //max-height: initial !important;
      // min-height: 526px !important;
    }

    .right-sidegolf-info {
      overflow: hidden;
      width: 25% !important;
      position: absolute;
      right: 0;
      transition-duration: 0.5s;

      .abs-div {
        background-color: #fff;
      }

      &.collapsed {
        background-color: #ffffff !important;
        width: 0% !important;

        .abs-div {
          margin-left: 100px;
          transition-duration: 0.5s;
        }
      }
    }

    .activity-bg.left-vdo {
      width: 75% !important;
      transition-duration: 0.5s;

      &.collapsed {
        width: 100% !important;

        .flex-container-preview,
        .vd-controls {
          width: 100%;
        }
      }
    }
  }
}

.descr- {
  padding: 10px 10px;

  .tti {
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    padding: 5px 0 5px 0;
    border-bottom: solid 1px #e3e3e3;
    color: #1b1b1b;
  }

  p {
    font-size: 13px;
    font-weight: 400;
    padding-top: 8px;
  }
}

.main-item-wrapper {
  .h5p-iframe-wrapper {
    // position: fixed;
    padding-bottom: 50px;
    height: 90%;
    // width: 100%;
    overflow-y: auto;
    background: #fff;
  }
}
.activity-bg.left-vdo.collapsed {
  .main-item-wrapper {
    .h5p-iframe-wrapper {
      width: 100%;
    }
  }
}

.iframe-height-resource-shared {
  .flex-container.previews {
    margin-top: 0 !important;
    //padding:  20px !important;
  }
  .main-item-wrapper {
    margin-top: 0 !important;
  }
  .main-item-wrapper {
    .h5p-iframe-wrapper {
      width: 100%;
    }
  }
}

.act-top-header {
  width: 100%;
}

.container-flex-upper {
  position: fixed;
  max-width: 100%;
  width: 100%;
  top: 0;
  z-index: 1;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  /* background: red; */
  box-shadow: 0 -1px 0 #555 inset;
  background-color: #084892;
  font-size: 12px;
  color: #111;
  font-weight: 400;
  align-items: center;
  border-radius: 0px;

  .both-p {
    display: flex;
    text-transform: uppercase;
    align-items: center;

    a {
      padding-right: 20px;
    }
  }
}

`;
