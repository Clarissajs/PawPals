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
        <Navbar inverse style={{backgroundColor: '#FC7050'}}>
          <NavbarToggler right onClick={this.toggleNavbar.bind(this)} style={{
            borderColor: '#F7FFED',
            outline: 'none'
          }}/>
          <NavbarBrand><b style={{
            color: '#F7FFED',
            fontSize: '1.5rem'
          }}>PawPals</b></NavbarBrand>
          <Collapse isOpen={!this.props.collapsed}>
            <Nav navbar>
              <NavItem style={{marginTop: 5}}>
                <NavLink to='/listings' onClick={this.toggleNavbar.bind(this)} className='NavLink' activeClassName='activeNavLink'>Listings Near Me</NavLink>
              </NavItem>
              <hr style={{margin: 5}}/>
              <NavItem>
                <NavLink to='/profile' onClick={this.toggleNavbar.bind(this)} className='NavLink' activeClassName='activeNavLink'>My Profile</NavLink>
              </NavItem>
              <hr style={{margin: 5}}/>
              <NavItem>
                <NavLink to='/login' onClick={this.toggleNavbar.bind(this)} className='NavLink' activeClassName='activeNavLink'>Login</NavLink>
              </NavItem>
              <hr style={{margin: 5}}/>
              <NavItem style={{marginBottom: 5}}>
                <NavLink to='/signup' onClick={this.toggleNavbar.bind(this)} className='NavLink' activeClassName='activeNavLink'>Signup</NavLink>
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