export const Stylesheetused = `@import 'assets/css/index';

.create-activity {
    padding: 30px 15px;

    .intro-header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;

        .title-line {
            display: flex;
            align-items: center;
            width:100%;
        }

        h2 {
            font: normal normal 600 24px/33px $rubik;
            letter-spacing: 0px;
            color: $curriki-main-blue;
            white-space: nowrap;
        }

        .line {
            border-bottom: 1px solid #DCDCDC;
            width: 100%;
            margin: 0px 20px;
        }

        .back-playlist {
            width: 175px;
            height: 40px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #B8B8B8;
            border-radius: 30px;
            font: normal normal normal 15px/20px $rubik;
            letter-spacing: 0px;
            color: $mine-shaft;
            display: flex;
            justify-content: center;
            align-items:center;

            svg {
                margin-right: 5px;
            }
        }
    }

    .nav-pills {

        .nav-item {
          height: 80px;
          background: #FFFFFF 0% 0% no-repeat padding-box;
          margin-bottom: 10px;
        }

        .nav-link {
            display: flex;
            font: normal normal normal 16px/26px $halvetica;
            letter-spacing: 0px;
            color: #084892;
            align-items: center;
            height: 100%;
            border-left: 2px solid #5952C6 ;

            svg {
              margin-right: 10px;
            }
        }

        .nav-link.active {
            background: $curriki-main-blue 0% 0% no-repeat padding-box;
            color:#fff;
            position: relative;

            &:after {
                content: "";
                position: absolute;
                right: -11px;
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-left: 20px solid $curriki-main-blue;
                border-bottom: 10px solid transparent;
            }
        }
    }

    .laravel-h5p-upload {
        height: 240px;
        background: #EEEEEE 0% 0% no-repeat padding-box;
        border: 3px dashed #ddd;
        border-radius: 10px;
    }

    .activity-wizard {
        h2 {
            font: normal normal normal 26px/36px $rubik;
            letter-spacing: 0px;
            color: #084892;
        }

        .Activity-meter {
            background: #F1F1F1 0% 0% no-repeat padding-box;
            box-shadow: 0px 1px 2px #0000000D;
            display: flex;
            align-items: center;
            padding-left: 30px;
            justify-content: space-between;

            .activity-progress {
                display: flex;
                height: 80px;
                justify-content: space-between;
                align-items:center;
            }

            h3 {
                font: normal normal 600 16px/25px $rubik;
                letter-spacing: 0px;
                color: #707070;
                padding: 0px 15px;
                margin-bottom: 0px;
            }

            svg {
                font-size: 40px;
            }

            .fixed-number {
                width: 40px;
            }

            .round-counter {
              border:1px solid #084892; 
              width: 35px;
              height: 35px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center; 
            }

            .counter {
                border: 1px solid #fff;
                background-color: #084892;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font: normal normal 600 16px/28px $halvetica;
                letter-spacing: 0.32px;
                color: #FFFFFF;
                width: 30px;
                height: 30px; 
            }

            .activity-progress.active {
                h3 {
                    color: #44CA92;
                }
    
                .round-counter {
                  border: 1px solid #44CA92; 
                }
    
                .counter {
                  background-color: #44CA92;
                }
            }
        }
    }

    .resource-activity {
        padding-top: 40px;

        h2{
            font: normal normal 600 24px/33px $rubik;
            letter-spacing: 0px;
            color: $mine-shaft;
            padding-bottom: 0px;
        }

        .activity-item {
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #E9E9E9;
            border-radius: 4px;
        }
    }

    .drop-area {
       position: relative;

       .upload-holder {
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%,-50%);
           text-align: center;
           font: normal normal normal 16px/22px $rubik;
           letter-spacing: 0px;
           color: #5A5A5A;

           svg {
            color:#084892;
            font-size: 30px;
            margin-bottom: 15px;
           }

           span {
            font: normal normal normal 16px/22px $rubik;
            letter-spacing: 0px;
            color: #084892;
            text-decoration: underline;
            cursor: pointer;
           }
        }
    }

    .resource-question {
        h2.title {
            font: normal normal normal 24px/33px $rubik;
            letter-spacing: 0px;
            color: $mine-shaft;
            font-size: 18px;
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 0px;
        }

        .shadowbox {
            background: transparent;
            justify-content: flex-end;
            height: 40px;
            align-items: center;
            padding: 0px 0px;
            border-radius: 5px;
            margin-bottom: 15px;
            margin-top: 0px;
        }
    }

    .upload-wizard {
        .Activity-meter {
           justify-content: left;

           svg {
               margin-right: 20px;
           }
        }
    }

    .search-wizard {
        h2 {
            font: normal normal normal 26px/36px $rubik;
            letter-spacing: 0px;
            color: #084892;  
        }

        .form-group {
          margin-bottom: 0px;
        }

        .formik-form {
            margin-top: 30px;

            form {
                display: flex;
                // justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
            }
            .error {
                color:red
            }

            .keywords-de {
              display: none;
            }

            input, select {
                background: #F9F9F9 0% 0% no-repeat padding-box;
                border: 1px solid #D2D2D2;
                border-radius: 3px;
                height: 50px;
                font: normal normal normal 14px/19px $rubik;
                letter-spacing: 0px;
                color: #777777;
                padding-left: 20px;
                margin-right: 20px;
                width: 240px;
                margin-bottom: 10px;
            }

            .dual_activity {
                button {
                    background: #5952C6 0% 0% no-repeat padding-box;
                    border-radius: 3px;
                    width: 148px;
                    height: 50px;
                    font: normal normal 600 16px/22px $rubik;
                    letter-spacing: 0px;
                    color: #FFFFFF;
                    margin-bottom: 10px;
                }
            }
        }

        .active-playlist {
          display: flex;
          border-top: 1px solid #ccc;
          margin-top: 30px;
          padding-top: 30px;
        
          div[data-rbd-droppable-id='droppable2'] {
              width: 50%;
          }

          div[data-rbd-droppable-id='droppable'] {
            width: 50%;
            border-right: 1px solid #ccc;
            max-height: 700px;
            overflow-y: auto;
            border-left: 3px solid #084892;
            padding: 20px;

            h2 {
                font: normal normal normal 22px/30px $rubik;
                letter-spacing: 0px;
                color: #084892;    
            }

            p {
                font: normal normal normal 16px/16px $rubik;
                letter-spacing: 0px;
                color: $mine-shaft;
            }

            .box {
                display: flex;
                margin: 0 20px;
                padding: 20px 0;
                justify-content: space-between;
                border-bottom: 1px solid #ccc;
                min-height: 140px;

                h2 {
                    font: normal normal 600 14px/16px $rubik;
                    letter-spacing: 0px;
                    color: $mine-shaft; 
                }
            }

            .imgbox {
                width: 20%;
                max-height: 135px;
            }

            .imgbox div {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50%;
            }

            .content {
                margin-top: 0;
                width: 78%;
                display: flex;
                justify-content: space-between;
            }

            ul {
                padding: 2px 0 8px 15px;
                display: flex;

                li {
                    margin-right: 30px;
                    text-align: left;
                    font: normal normal normal 14px/26px $rubik;
                    letter-spacing: 0;
                    opacity: 1;
                    list-style-type: disc;
                }
            }
          }

          .playlist-host {
            width: 400px;
            background: #F6F6F6 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #7E7E7E0D;
            border-radius: 3px;
            margin:30px auto;
            max-height: 600px;
            min-height: 500px;
            overflow-y: auto;

            h6 {
                font: normal normal bold 16px/22px $rubik;
                letter-spacing: 0px;
                color: #0A0708;  
                background: #fff;
                text-align: center;
                display: flex;
                align-self: center;
                justify-content: center;
                align-items: center;
                height: 59px;
                border-top: 4px solid #FDC558 ;
            }

            .activity-thumb-wrapper {
                margin-right: 12px;
                float: left;
            }

            .activity-thumb {
                width: 69px;
                height: 48px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top;
                border: 1px solid hsla(0,0%,80%,.8);
            }

            .playlist-resource {
                margin: 15px;
                padding: 15px;
                background: #fff 0 0 no-repeat padding-box;
                border-left: 2px solid #084892;
                border-radius: 2px;
                box-shadow: 1px 1px 2px hsla(0,0%,49.4%,.10196078431372549);
                opacity: 1;
            }

            .title a {
                font-size: 14px;
                font-weight: 600;
                line-height: 16px;
                letter-spacing: 0;
                color: $mine-shaft;
                opacity: 1;
                text-transform: capitalize;
                word-break: break-word;
            }
          }
        }

    }
}
`
