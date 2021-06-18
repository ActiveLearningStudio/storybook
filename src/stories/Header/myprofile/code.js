export const ProfileSnippet = `<li className="menu-user-settings d-flex align-items-center">
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

    <Dropdown.Item as={Link} to={'/org/{stateHeader.currentOrganization?.domain}/dashboard'}>
      Dashboard
    </Dropdown.Item>

    <Dropdown.Item as={Link} to={'/org/{stateHeader.currentOrganization?.domain}/account'}>
      My Account
    </Dropdown.Item>

    <Dropdown.Item as={Link} to={'/org/{stateHeader.currentOrganization?.domain}/change-password'}>
      Change Password
    </Dropdown.Item>

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


`
