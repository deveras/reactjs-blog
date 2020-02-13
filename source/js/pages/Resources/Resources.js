import React from 'react';
import ReactRouterDOM from 'react-router-dom';

import './Resources.scss';

function Resources () {
  return (
    <section>
      <section id="resources">
        <article>
          <h1>Resources</h1>
          <ul>
            <li>
              <h2>Ceaser Cipher - let's play a game</h2>
              <p>
                being one of the oldest ciphers in the world, it's one of the
                starting points for anyone that is serious in developing their
                skillset. Get implementation examples in different languages and
                a game you can use to try and guessthe cipher or encoded your
                own messages
                <br />
                <ReactRouterDOM.Link to="/resources/Ceaser-cipher">
                  read more
                </ReactRouterDOM.Link>
              </p>
            </li>
          </ul>
        </article>
        <aside>
          <h2>Latest resources</h2>
        </aside>
      </section>
    </section>
  );
}

export default Resources;
