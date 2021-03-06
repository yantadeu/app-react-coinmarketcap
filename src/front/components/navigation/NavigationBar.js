// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type UserAuthActions } from '../../types/redux/userAuth';
// #endregion

// #region flow types
type Props = {
  // withRouter HOC:
  match: Match,
  location: Location,
  history: RouterHistory,

  // redux
  token: string | null,
  isAuthenticated: boolean,

  // parent props:
  brand: string,
  handleLeftNavItemClick: OnLeftNavButtonClick,
  handleRightNavItemClick: OnRightNavButtonClick,
  navModel: {
    leftLinks: Array<LeftLink>,
    rightLinks: Array<RightLink>,
  },

  ...any,
} & UserAuthActions;

type State = {
  isOpen: boolean,
  ...any,
};
// #endregion

class NavigationBar extends PureComponent<Props, State> {
  static defaultProps = {
    brand: 'brand',
  };

  state = {
    isOpen: false,
  };

  // #region lifecycle
  render() {
    const {
      brand,
      navModel: { rightLinks },
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">{brand}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {rightLinks.map(({ label, link, viewName }, index) => (
              <NavItem key={`${index}`}>
                <NavLink href="#" onClick={this.handlesNavItemClick(link)} color="white">
                  {label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  // #endregion

  // #region navigation bar toggle
  toggle = (evt: SyntheticEvent<>) => {
    if (evt) {
      evt.preventDefault();
    }
    this.setState(({isOpen: prevIsOpened}) => ({ isOpen: !prevIsOpened }));
  };
  // #endregion

  // #region handlesNavItemClick event
  handlesNavItemClick = (link: string = '/') => (evt: SyntheticEvent<>) => {
    if (evt) {
      evt.preventDefault();
    }
    const { history } = this.props;
    history.push(link);
  };
  // #endregion

  // #region disconnect
  handlesDisconnect = (evt: SyntheticEvent<>) => {
    if (evt) {
      evt.preventDefault();
    }
    const { history, disconnectUser } = this.props;

    disconnectUser();
    history.push('/');
  };
  // #endregion
}

export default NavigationBar;
