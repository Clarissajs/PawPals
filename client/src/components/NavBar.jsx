import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

import uiActions from '../actions/uiActions'

class NavBar extends React.Component {
  toggleNavbar() {
    this.props.toggleNav();
  }

  render() {
    return (
      <div>
        <Navbar light color='faded'>
          <NavbarToggler right onClick={this.toggleNavbar.bind(this)} />
          <NavbarBrand>PawPals</NavbarBrand>
          <Collapse isOpen={!this.props.collapsed}>
            <Nav navbar>
              <NavItem>
                <NavLink to='/listings' onClick={this.toggleNavbar.bind(this)}>Listings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login' onClick={this.toggleNavbar.bind(this)}>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/signup' onClick={this.toggleNavbar.bind(this)}>Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

// Connect App to redux store

const mapStateToProps = state => state.ui.nav;

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => {
      dispatch(uiActions.toggleNav());
    }
  }
}

NavBar = withRouter(NavBar);

NavBar = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));

export { NavBar }