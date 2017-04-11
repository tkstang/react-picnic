import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const userIsNull = () =>
(
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Picnic</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Search</NavItem>
        <NavItem eventKey={2} href="#">Sign Up</NavItem>
        <NavItem eventKey={3} href="#">Log In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const userIsNotNull = (user, logout) =>
(
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Picnic</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Search</NavItem>
        <NavItem eventKey={2} href="#">Favorites</NavItem>
        <NavItem eventKey={3} href="#">Log Out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const UserNav = ({ currentUser, logout }) => (
  currentUser ? userIsNotNull(currentUser, logout) : userIsNull()
);

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
