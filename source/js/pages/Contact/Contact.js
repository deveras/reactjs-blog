import React from 'react';
import ReactRouterDOM from 'react-router-dom';

import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.scss';

function Contact () {
  // @TODO: move this to a future app context, perhaps merge with SocialMedia
  const socialMediaItems = [
    {
      link: 'https://twitter.com/deveras77',
      imgSrc: 'styles/imgs/twitter.png',
      title: 'Navigate to Twitter and follow André R. Ferreira',
      description: 'Follow me on Twitter',
      hreflang: 'en',
      imgSrc: 'styles/imgs/twitter.png'
    },
    {
      link: 'https://www.linkedin.com/in/andreraposoferreira',
      imgSrc: 'styles/imgs/linkedin.png',
      title: 'Navigate to LinkedIn and connect with André R. Ferreira',
      description: 'Connect with me on LinkedIn',
      hreflang: 'en',
      imgSrc: 'styles/imgs/linkedin.png'
    },
    {
      link: 'https://github.com/deveras',
      imgSrc: 'styles/imgs/github.png',
      title: 'Navigate to Github and follow André R. Ferreira',
      description: 'Follow me on Github',
      hreflang: 'en',
      imgSrc: 'styles/imgs/github.png'
    }
  ];

  return (
    <section id="contactPage">
      <article>
        <h1>Contact</h1>

        <p>
          I've created this space as to share some of my experience and thoughts
          with you. I would love to know what you thought, however could you do
          that using social media? You can find me at:
        </p>

        <ul id="social">
          {socialMediaItems.map((menuItem, iterator) => (
            <li key={iterator}>
              <ReactRouterDOM.Link
                to={menuItem.link}
                target="_blank"
                title={menuItem.title}
                hrefLang={menuItem.hreflang}
              >
                <img src={menuItem.imgSrc} />{' '}
                <span>{menuItem.description}</span>
              </ReactRouterDOM.Link>
            </li>
          ))}
        </ul>

        <h1>Public speaking</h1>
        <p>
          You would like to level up your development team? I can to talk
          extensively in an entertaining fashion supported by carefully craft
          presentations.
          <br />
          If you are running an event and need someone to fillin the gaps, I
          might be up for that too.
        </p>

        <h1>Press</h1>
        <p>
          If you are interested, check out some of my recent media appearances
          on print.
          <br />
          Waiting for them to be published... stay tuned!
        </p>
      </article>

      <aside id="contactForm">
        <ContactForm />
      </aside>
    </section>
  );
}

export default Contact;
