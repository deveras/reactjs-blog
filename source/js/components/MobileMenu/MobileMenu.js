import React from 'react';
import * as PropTypes from 'prop-types';

import './MobileMenu.scss';

function MobileMenu (props) {
  return (
    <div
      id="mobileMenu"
      onClick={props.toggleShow}
      className={props.show ? 'show' : ''}
    ></div>
  );
}

MobileMenu.defaultProps = {
  show: false
};

MobileMenu.propTypes = {
  toggleShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default MobileMenu;
