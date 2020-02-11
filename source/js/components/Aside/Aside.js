import React, { useState } from 'react';

import UserCard from '../UserCard/UserCard';
import SocialMedia from '../SocialMedia/SocialMedia';
import Navigation from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';

import './Aside.scss';

function Aside () {
  const [isSubMenuActive, toggleSubMenuActive] = useState(false);

  function handleMobileMenuClick () {
    toggleSubMenuActive(!isSubMenuActive);
  }

  return (
    <aside tabIndex="0">
      <UserCard />
      <SocialMedia />
      <MobileMenu show={isSubMenuActive} toggleShow={handleMobileMenuClick} />
      <Navigation show={isSubMenuActive} />
    </aside>
  );
}

export default Aside;
