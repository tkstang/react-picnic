import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import './Nav.css';

const mapStateToProps = state => ({
  currentUser: state.session,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const userIsNull = () =>
(
  <Navbar className="Nav-bar" inverse collapseOnSelect>
    <Navbar.Header>
      <Nav pullLeft>
        <NavItem className="NavItem" href="#"><Link to="/">React Picnic</Link></NavItem>
      </Nav>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>

        <NavItem className="NavItem" href="#"><Link to="/">Search</Link></NavItem>
        {/* <NavItem eventKey={2} href="#"><Link to="/signup">Sign Up</Link></NavItem> */}
        <NavItem className="NavItem" href="#"><Link to="/login">Log In</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const userIsNotNull = (user, logOut) => {
  console.log("user info", user.email);
  return (
    <Navbar className="Nav-bar" inverse collapseOnSelect>
      <Navbar.Header>
      <Nav pullLeft>
        <NavItem className="NavItem" href="#"><Link to="/">React Picnic</Link></NavItem>
      </Nav>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>{user.email}
          </NavItem>
          <NavItem className="NavItem" href="#"><Link to="/">Search</Link></NavItem>
          <NavItem className="NavItem" onClick={logout} href="#"><Link to="/">Log Out</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const UserNav = ({ currentUser, logOut }) => (
  currentUser.id !== null ? userIsNotNull(currentUser, logOut) : userIsNull()
);

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
