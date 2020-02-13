import React from 'react';
import ReactRouterDOM from 'react-router-dom';

import './Resource.scss';

function Resource () {
  var params = ReactRouterDOM.useParams();
  var title = params.resourceId.replace('-', ' ');

  return (
    <section>
      <article>
        <h1>{title}</h1>
      </article>
    </section>
  );
}

export default Resource;
