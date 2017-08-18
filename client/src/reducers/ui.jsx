const defaultState = {
  nav: {
    collapsed: true
  }
}

const ui = (state=defaultState, action) => {

  if (action.type === 'TOGGLE_NAV') {
    return {...state, nav: {collapsed: !state.nav.collapsed}};
  }

  return state;
}

export default ui