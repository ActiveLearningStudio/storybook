export const Stylesheetused = `
@import 'assets/css/index';

// stylesheet for notification
.notification-wapper {
    max-width: 593px;
    margin: 30px auto;
    background-color: #fff;
    box-shadow: 0 0 20px #00000005;
    border-radius: 5px;
    box-shadow: 0 0 99px #00000021;
    border-radius: 5px;

    .notification-status {
        font: normal normal 600 14px/20px $rubik;
        letter-spacing: 0;
        color: #8F8FA1;
        padding: 15px 0 5px 25px;
    }
}

.error-notification {
    font-weight: 500;
    font-size: 18px;
    padding: 20px;
}

.notification-area {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f0f0;
    margin: 0 20px;
    padding: 10px 0;


    .user-detail {
        display: flex;
        align-items: center;

        img {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .user-icons {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            margin-right: 10px;
            background: #CDECF2 0% 0% no-repeat padding-box;
            font: normal normal 600 14px/20px $rubik;
            letter-spacing: 0;
            color: #6B9CA5;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            font: normal normal normal 14px/20px $rubik;
            letter-spacing: 0;
            color: #504F4F;
            width: 85%;
        }
    }

    .timer {
        font: normal normal normal 12px/20px $rubik;
        letter-spacing: 0;
        color: #8F8FA1;
        white-space: nowrap;
    }

    .settings-notification {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
    }

}

`
