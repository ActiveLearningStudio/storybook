export const codeSnippet = `
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import bell from 'assets/images/bell.png';

import { getAllNotifications, clearAllNotification } from 'store/actions/notification';
import NotificationArea from 'containers/Notification/NotificationArea';

import './style.scss';

function HeaderNotification() {
  const dispatch = useDispatch();
  const allNotifications = useSelector((state) => state.notification);
  const [notificationData, setNotificationData] = useState([]);
  const [errorNotification, setErrorNotification] = useState('');
  const organization = useSelector((state) => state.organization);
  useEffect(() => {
    dispatch(getAllNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (notificationData.yesterday) {
      if (notificationData.today.length === 0 && notificationData.yesterday.length === 0 && notificationData.older.length === 0) {
        setErrorNotification('Currently no Notifications are available.');
      }
    }
  }, [notificationData]);

  useEffect(() => {
    setNotificationData(allNotifications.notification);
  }, [allNotifications]);

  return (
    <li className="notification-bar">
      <Dropdown>
        <Dropdown.Toggle className="d-flex align-items-center">
          <div className="notification-alert" onClick={() => dispatch(clearAllNotification())}>
            <img src={bell} alt="notification" />
            <p className="header-icon-text">Notifications</p>
            {allNotifications.notificationAlert > 0 && <div className="alert-added" />}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="user-dropdown">
          <div className="scroll-notification">
            <div className="header-data">
              <h2>Notifications</h2>
              {/* <h3>Mark all as read</h3> */}
            </div>
            {notificationData.today && Object.keys(notificationData.today).length > 0
              && (
              <>
                <div className="notification-status"> Today </div>
                {notificationData.today.map((msg) => (
                  <Dropdown.Item key={msg.id}>
                    <NotificationArea content={msg} />
                  </Dropdown.Item>
                ))}
              </>
              )}

            {notificationData.yesterday && Object.keys(notificationData.yesterday).length > 0
              && (
              <>
                <div className="notification-status"> Yesterday </div>
                {notificationData.yesterday.map((msg) => (
                  <Dropdown.Item key={msg.id}>
                    <NotificationArea content={msg} />
                  </Dropdown.Item>
                ))}
              </>
              )}

            {notificationData.older && Object.keys(notificationData.older).length > 0
              && (
              <>
                <div className="notification-status"> Older </div>
                {notificationData.older.map((msg) => (
                  <Dropdown.Item key={msg.id}>
                    <NotificationArea content={msg} />
                  </Dropdown.Item>
                ))}
              </>
              )}
            {errorNotification && <div className="error-notification">{errorNotification}</div> }
          </div>
          <div className="btn-all-notification">
            {/* <Dropdown.Item className="notification-setting" as={Link} to="/notification">
              <FontAwesomeIcon icon="cog" className="mr-2" />
              settings
            </Dropdown.Item> */}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}

export default HeaderNotification;

`
