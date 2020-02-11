import React from 'react';

import UserCard from '../UserCard/UserCard';
import SocialMedia from '../SocialMedia/SocialMedia';
import Navigation from '../Navigation/Navigation';

import './Aside.scss';

function Aside () {
  return (
    <aside tabIndex="0">
      <UserCard />
      <SocialMedia />
      <Navigation />
    </aside>
  );
}

export default Aside;
