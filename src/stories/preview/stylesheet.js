export const PreviewStyle = `
@import 'assets/css/index';

/* CSS FOR PRoduct TOP */
.inner_body .container {
  max-width: 1521px;
  margin: 0 auto;
  padding: 0 15px;
}

.scene {
  margin-bottom: 25px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  //margin-right: 50px;
  background-color: #fff;

  .img-project-preview {
    background-size: cover !important;
    width: 100%;
    height: 190px;
    background-repeat: no-repeat !important;
    background-position: top !important;
  }

  .expandiv {
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;
    font-family: '$halvetica', sans-serif;
    color: $mine-shaft;
    padding-top: 10px;
  }
}

.check-each{
  position: relative;

  .playlist-dropdown{
    position: absolute;
    top: 0;
    right:0;
    box-shadow: 0 0 1px 1px #ddd !important;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 15px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;

    li{
     min-height: auto;
     border:none;
     box-shadow: 0 0 0 0 transparent
    }
  }
}

img {
  max-width: 100%;
}

.playimg {
  /* height: 100%; */
  width: 100%;
  text-align: center;
}

.scene-img {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 290px;

  > a {
    display: block;
    text-align: center;
  }
}

.sce_cont {
  width: calc(100% - 290px);
  padding: 10px 20px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .configuration{
    .project-dropdown{
      justify-content: flex-end;
      margin-bottom: 5px;
    }

    .project-dropdown-btn{
      box-shadow: 0 0 1px 1px #ddd !important;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 0 !important;
    }
  }
}

.usrcmt i {
  color: #607A9B;
  font-size: 12px;
  margin-right: 5px;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap
}

.title_lg {
  display: flex;
  font-size: 24px;
  font-family: $rubik, sans-serif;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  color: $curriki-main-blue;
  opacity: 1;
  text-transform: capitalize;

  .googleSign {
    background: #fff;
    font-size: 12px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 6px 1px #ccc;
    padding: 2px 15px;
    border-radius: 30px;
    cursor: pointer;
  }

  &.check {
    display: flex;
    align-items: center;

    .w3-border {
      width: 206px;
      height: 28px;
      background: #FFFFFF 0 0 no-repeat padding-box;
      border: 1px solid #D9D9D9;
      border-radius: 70px;
      opacity: 1;
      text-align: left;
      font-weight: Bold;
      font-size: 12px;
      align-items: center;
      letter-spacing: 0;
      color: #FFFFFF;
      margin-left: 30px
    }

    .w3-grey {
      background-color: #5952C6;
      border: 1px solid #5952C6;
      text-align: center;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }
  }
}

.bar_list li {
  padding-right: 15px;

  &:last-child {
    padding-right: 0;
  }
}

.bar {
  width: 206px;
}

.progress_bar {
  width: 35%;

  font-size: 12px;
  color: #fff;
  line-height: 100%;
  text-align: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 8px 0;
  background: linear-gradient(135deg, rgba(38, 143, 198, 0.87) 0%, rgba(38, 143, 198, 1) 4%, rgba(42, 150, 192, 1) 96%, rgba(42, 150, 192, 0.82) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#de268fc6', endColorstr='#d12a96c0', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */

}

.progress_div {
  width: 65%;
  border: 1px solid #D9D9D9;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: #fff;
}

.rating {
  margin-bottom: 15px;
  width: 100%;

  li {
    padding-right: 4px;

    &:not(:last-child) i {
      font-size: 14px;
      color: #FFDF10;
    }

    &:last-child i {
      font-size: 14px;
      color: #CED2D8;
    }
  }
}

.collapse-toggle {
  position: absolute;
  top: 0;
  right: 15px;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}

.usrcmt {
  border: 1px solid #D9D9D9;
  padding: 1px 10px;
  border-radius: 30px;
  height: 28px;
  font-size: 12px;
  color: #343434;
  font-family: $rubik, sans-serif;
  font-weight: 600;

  img {
    margin-right: 5px;
  }
}

/* CSS FOR PLAYLIST */
.playlist-div {
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  //margin-right: 50px;
}

.playlist-title-div {
  border-bottom: 1px solid #EEEEEE;
  padding: 30px 40px 0;

  .title-md:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 87px;
    background: #0063d5;
  }
}

.plhead {
  font-family: $rubik, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: $mine-shaft;
  line-height: 100%;
  text-transform: inherit;
  padding-left: 30px;
  position: relative;
  padding-bottom: 30px;
  cursor: pointer;

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    /* background: url(/assets.images/plusblk.png); */
    width: 15px;
    height: 15px;
  }
}

.plydet {
  border: 1px solid #ECECEC;
  padding: 20px 30px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;

  .head_md {
    height: 46px;
    display: block;
    display: -webkit-box;
    margin: 0 auto;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.acc_head:hover,
.accordion_in.acc_active .acc_head {
  color: #1A73E8;
}

.plhead:hover:after,
.accordion_in.acc_active .plhead:after {
  filter: invert(32%) sepia(79%) saturate(2030%) hue-rotate(198deg) brightness(93%) contrast(95%);
}

.head_md {
  font-size: 14px;
  color: #607A9B;
  font-family: $rubik, sans-serif;
  font-weight: 600;
  line-height: 18px;
}

.all-playlist {
  padding: 45px 40px;
}

.alltxt {
  font-size: 14px;
  color: #959595;
  font-family: $rubik, sans-serif;
  font-weight: 600;

  img {
    margin-left: 10px;
  }
}

.playlist-accordion {
  margin-top: 50px;
}

.acc_active .plhead:after {
  background: url(../../../assets/images/minus.png);
}

.accordion_in {
  border-bottom: 1px solid #F3F3F3;
  margin-bottom: 25px;
}

.acc_content {
  padding: 0 0 40px 35px;
  position: relative;
}

.seeall {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  color: #959595;
  font-family: $rubik, sans-serif;
  font-weight: 600;
  text-decoration: underline;

  img {
    margin-left: 5px;
  }

  &:hover {
    color: #1A73E8;

    img {
      filter: invert(32%) sepia(79%) saturate(2030%) hue-rotate(198deg) brightness(93%) contrast(95%);
    }
  }
}

.title_lg {
  color: #4472C4;
  font-size: 24px;
  font-family: $rubik, sans-serif;
  font-weight: 600;
  line-height: 100%;
}

.playlist_js {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -11px;

  li {
    display: inline-flex;
    max-width: 230px;
    margin: 0 11px;
  }
}

.playlist-slider-control {
  width: 36px;
  height: 36px;
  background: #ffffff;
  border-radius: 100%;
  right: -9px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  top: 35%;
  position: absolute;
  border: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: url(../../../assets/images/seeall.png);
    width: 8px;
    height: 13px;
    left: 0;
    bottom: 0;
    margin: auto;
  }

  &.prev:before {
    transform: rotate(180deg);
  }
}

.playimg img {
  max-height: 100px;
}

@media(max-width: 1400px) {
  .bar_list li {
    margin-bottom: 5px;
  }
}

@media screen and (max-width: 1200px) {
  .scene-img > img {
    height: 300px;
  }
}

@media(max-width: 1080px) {
  .scene-img,
  .sce_cont {
    width: 100%;
  }

  .scene {
    background: #fff;
  }

  .scene-img > img {
    max-width: 100%;
    height: auto;
  }

  .collapse-toggle {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
}

@media(max-width: 767px) {
  .all-playlist {
    padding: 30px;
  }

  .playlist-accordion {
    margin-top: 30px;
  }

  .play-title-div {
    padding: 30px 30px 0;
  }

  .acc_content {
    padding: 0 0 30px 20px;
  }
}

@media(max-width: 580px) {
  .sce_cont {
    padding: 20px;
  }

  .play-title-div {
    padding: 20px 20px 0;
  }

  .acc_content {
    padding: 0 0 20px 20px;
  }

  .all-playlist {
    padding: 20px;
  }

  .title_lg {
    font-size: 22px;
  }

  .seeall {
    position: relative;
    padding-left: 0;
    width: 100%;
    clear: both;
    display: block;
    margin-top: 10px;
  }
}

@media(max-width: 480px) {
  .title_lg {
    font-size: 20px;
  }
}

.check-each {
  // display: flex;
  .add-btn-activity {
    display: flex;
    justify-content: flex-end;
    margin-right: 45px;
  }

  .add-resource-to-playlist-btn {
    width: 175px;
    height: 48px;
    margin-top: 10px;
    display: block;
    background: #ffffff 0 0 no-repeat padding-box;
    border: 1px dashed #d6d6d6;
    border-radius: 2px;
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    color: #607a9b;
    cursor: pointer;
  }
}

`
