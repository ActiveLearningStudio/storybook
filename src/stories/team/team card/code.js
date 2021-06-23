export const IndexSnippet = `
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTeamAction } from 'store/actions/team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TeamCard(props) {
  const {
    team: {
      id,
      name,
      description,
      users,
      projects,
    },
  } = props;
  const dispatch = useDispatch();
  const deleteTeam = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this team?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTeamAction(id));
      }
    });
  };
  let memCnt = '{users.length}';
  memCnt = memCnt.slice(memCnt.length - 2, memCnt.length);
  const organization = useSelector((state) => state.organization);
  const { permission } = organization;
  let projCnt = 00{projects.length}';
  projCnt = projCnt.slice(projCnt.length - 2, projCnt.length);

  return (
    <div className="team-card-content">
      <div className="team-title">
        )}
        <h2 className="describe">{description}</h2>
      </div>

      <div className="team-member-content mid-border">
        <div className="sub-title">
          <span>Team Members</span>
          <span>{({memCnt})}</span>
        </div>

        <div className="member-mark-container">
          {users.map((user, index) => (
            <div key={user.id} className={'member-name-mark{index > 0 ? ' over' : ''}'}>
            </div>
          ))}
        </div>
      </div>

      <div className="sub-title">
        <span>Projects for the Team</span>
        <span>{'({projCnt})'}</span>
      </div>
      {permission?.Team?.includes('team:delete') && (
        <div>
          <button type="button" onClick={() => deleteTeam()} className="back-button" style={{ textAlign: 'center' }}>
            Delete Team
          </button>
        </div>
      )}
    </div>
  );
}

TeamCard.propTypes = {
  team: PropTypes.object.isRequired,
};

export default TeamCard;


`
