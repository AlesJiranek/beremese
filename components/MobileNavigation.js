import React from 'react';
import Menu from './Menu';

class MobileNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  }

  render() {
    const { isOpened } = this.state;

    return [
      <button
        className={`fh5co-nav-toggle fh5co-nav-white ${
          isOpened ? 'active' : ''
        }`}
        onClick={this.toggleMenu}
        key="button"
      >
        <i />
      </button>,
      <div
        id="fh5co-offcanvas"
        className={isOpened ? 'active' : ''}
        key="menu-wrapper"
      >
        <Menu />
      </div>
    ];
  }
}

export default MobileNavigation;
