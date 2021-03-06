export const CodeSnippet = `
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ResourceCardDropdown from 'components/ResourceCard/ResourceCardDropdown';

import './style.scss';
import { useSelector } from 'react-redux';

const ActivityCard = (props) => {
  const {
    activity,
    projectId,
    playlistId,
    lti,
    sampleID,
    setModalShow,
    setCurrentActivity,
    playlist,
  } = props;
  const organization = useSelector((state) => state.organization);
  return (
    <li>
      {sampleID
        ? (
          <a
            onClick={() => {
              setCurrentActivity(activity.id);
              setModalShow(true);
            }}
          >
            <div
              className="playimg"
              style={{
                backgroundImage:
                  !!activity.thumb_url && activity.thumb_url.includes('pexels.com')
                    ? url({activity.thumb_url})''
                    : 'url({global.config.resourceUrl}{activity.thumb_url})',
              }}
            />
            <div className="plydet">
              {activity.metadata ? activity.metadata.title : activity.title}
            </div>
          </a>
        )
        : (
          <>
            <Link
              to={
                lti
                  ? /playlist/{playlistId}/activity/{activity.id}/preview/lti
                  : /org/{organization.currentOrganization?.domain}/project/{projectId}/playlist/{playlistId}/activity/{activity.id}/preview'
              }
            >
              <div
                className="playimg"
                style={{
                  backgroundImage:
                    !!activity.thumb_url && activity.thumb_url.includes('pexels.com')
                      ? url({activity.thumb_url})
                      : url({global.config.resourceUrl}{activity.thumb_url}),
                }}
              />
              <div className="plydet">
                {activity.metadata ? activity.metadata.title : activity.title}
              </div>
            </Link>
            {!lti
            && (
              <ResourceCardDropdown
                playlist={playlist}
                resource={activity}
              />
            )}
          </>
        )}
    </li>
  );
};

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired,
  projectId: PropTypes.number.isRequired,
  playlistId: PropTypes.number.isRequired,
  lti: PropTypes.bool,
  sampleID: PropTypes.number,
  setModalShow: PropTypes.func,
  setCurrentActivity: PropTypes.func,
  playlist: PropTypes.object.isRequired,
};

ActivityCard.defaultProps = {
  lti: false,
  sampleID: null,
  setModalShow: () => {},
  setCurrentActivity: () => {},
};

export default ActivityCard;

`;
