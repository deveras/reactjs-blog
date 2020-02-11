import React from 'react';

import './SocialMedia.scss';

function SocialMedia () {
  // @TODO: move this to a future app context
  const socialMediaItems = [
    {
      link: 'https://twitter.com/deveras77',
      imgSrc: 'styles/imgs/twitter.png',
      title: 'Navigate to Twitter and follow André R. Ferreira',
      hreflang: 'en'
    },
    {
      link: 'https://www.linkedin.com/in/andreraposoferreira',
      imgSrc: 'styles/imgs/linkedin.png',
      title: 'Navigate to LinkedIn and connect with André R. Ferreira',
      hreflang: 'en'
    },
    {
      link: 'https://github.com/deveras',
      imgSrc: 'styles/imgs/github.png',
      title: 'Navigate to Github and follow André R. Ferreira',
      hreflang: 'en'
    }
  ];

  return (
    <div id="socialMedia">
      <ul>
        {socialMediaItems.map((menuItem, iterator) => (
          <li key={iterator}>
            <a href={menuItem.link}>
              <img
                src={menuItem.imgSrc}
                target="_blank"
                title={menuItem.title}
                hrefLang={menuItem.hreflang}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
