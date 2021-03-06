export const codeSnippet = `
import React
// ,{ useMemo }
  from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import
{
// setActiveOrganization,
  updateOrganizationScreen,
//  getOrganizationFirstTime
}
  from 'store/actions/organization';
import logo from 'assets/images/studio_new_logo.png';
import { SHOW_HELP } from 'store/actionTypes';
import add from 'assets/images/add-icon.png';
// import profile from 'assets/images/user-profile.png';
import searchImg from 'assets/images/search.png';
import createProjectIcon from 'assets/images/create-project-icon.png';
import help from 'assets/images/help.png';
import { logoutAction } from 'store/actions/auth';
import { Event } from 'trackers/ga';

import MultitenancyDropdown from './multitenancyDropdown';
import SearchForm from './searchForm';
import HeaderNotification from './notification';

import './style.scss';

function Header(props) {
  const { /* user, */ logout } = props;
  const stateHeader = useSelector((state) => state.organization);
  const { user } = useSelector((state) => state.auth);
  const { permission: { Project } } = stateHeader;
  const { permission } = stateHeader;
  const dispatch = useDispatch();
  // useMemo(() => {
  //   dispatch(getOrganizationFirstTime(stateHeader?.currentOrganization?.id));
  // }, [stateHeader?.currentOrganization?.id]);
  return (
    <header>
      <div className="top-header flex-div align-items-center">
        <div className="group-search-logo">
          <div className="tophd_left">
          </div>
        </div>
        <div className="tophd_right flexdiv search-div  d-flex flex-wrap ">
          <div className="search-div">
            <SearchForm />
          </div>
          <div className="navbar-link">
            <ul className="top-info flex-div">
              {false && permission?.Organization?.includes('organization:view') && (
                <>
                  <li>

                      <FontAwesomeIcon icon="briefcase" />
                      <p className="header-icon-text">
                        Manage Organization
                        {/* {stateHeader.currentOrganization?.domain} */}
                      </p>
                    </Link>
                  </li>
                </>
              )}
              <li>
                <MultitenancyDropdown />
              </li>
              <li>
                <div
                  style={{ padding: '0.375rem 0.75rem', cursor: 'pointer' }}
                  onClick={() => {
                    dispatch({
                      type: SHOW_HELP,
                      payload: true,
                    });
                  }}
                >
                  <img src={help} alt="help" />
                  <p className="header-icon-text">
                    Help
                  </p>
                </div>
              </li>
              {false && Project?.includes('project:create') && (
                <li className="align-items-center" style={{ paddingTop: '4px' }}>
                  <Dropdown className="create-project">
                    <Dropdown.Toggle className="align-items-center">
                      <img src={add} alt="add" />
                      <p className="header-icon-text">Create</p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="user-dropdown">
                       <div className="notify-box">
                          <div className="notify-icon">
                            <img src={createProjectIcon} alt="create" />
                          </div>
                          <div className="notify-description">
                            <div className="nav-title">Create a New Project</div>
                            <p>
                              A project gives you a place to build and organize the
                              amazing learning experiences available in the Active
                              Learning Studio.
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              )}
              <HeaderNotification />
              <li className="mobile-links">
                <Link to="#">
                  <img src={searchImg} alt="search" />
                </Link>
              </li>
              <li className="menu-user-settings d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle className="align-items-center">
                    <div className="profile-avatar">
                      {user?.first_name[0]}
                    </div>
                    <p className="header-icon-text">Profile</p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="user-dropdown">
                    {/* <Dropdown.Item to="#">
                      Welcome &nbsp;
                      <span className="user-name-login">
                        {user && user.displayName}
                      </span>
                    </Dropdown.Item> */}
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        Event('button click', 'User press Logout button', 'Login Page');
                        logout();
                      }}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
`
