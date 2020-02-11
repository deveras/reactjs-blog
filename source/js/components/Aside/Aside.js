import React from 'react';

import UserCard from '../UserCard/UserCard';
import SocialMedia from '../SocialMedia/SocialMedia';

import './Aside.scss';

function Aside () {
  return (
    <aside tabIndex="0">
      <UserCard />
      <SocialMedia />
    </aside>
  );
}

export default Aside;
