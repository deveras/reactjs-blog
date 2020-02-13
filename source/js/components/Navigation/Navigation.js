import React from 'react';
import ReactRouterDOM from 'react-router-dom';
import * as PropTypes from 'prop-types';

import './Navigation.scss';

function Navigation (props) {
  // @TODO: move this to a future app context
  var navigationItems = [
    {
      link: '/',
      description: 'Home',
      title: 'Navigate to Home',
      hreflang: 'en'
    },
    {
      link: '/articles',
      description: 'Articles',
      title: 'Navigate to Articles',
      hreflang: 'en'
    },
    {
      link: '/tutorials',
      description: 'Tutorials',
      title: 'Navigate to Tutorials',
      hreflang: 'en'
    },
    {
      link: '/resources',
      description: 'Resources',
      title: 'Navigate to Resources',
      hreflang: 'en'
    },
    {
      link: '/about',
      description: 'About',
      title: 'Navigate to About',
      hreflang: 'en'
    },
    {
      link: '/contact',
      description: 'Contact',
      title: 'Navigate to Contact',
      hreflang: 'en'
    }
  ];

  return (
    <nav className={props.show ? 'show' : ''}>
      <ul>
        {navigationItems.map((menuItem, iterator) => (
          <li key={iterator}>
            <ReactRouterDOM.Link
              to={menuItem.link}
              target="_self"
              title={menuItem.title}
              hrefLang={menuItem.hreflang}
              onClick={props.toggleShow}
            >
              {menuItem.description}
            </ReactRouterDOM.Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  show: false
};

Navigation.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired
};

export default Navigation;
