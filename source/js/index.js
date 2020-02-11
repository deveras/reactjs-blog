import React from 'react';
import ReactDom from 'react-dom';
import ReactRouterDOM from 'react-router-dom';

import './index.scss';

import Aside from './components/Aside/Aside';
import About from './pages/About/About';
import Article from './pages/Article/Article';
import Articles from './pages/Articles/Articles';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Resource from './pages/Resource/Resource';
import Resources from './pages/Resources/Resources';
import Tutorial from './pages/Tutorial/Tutorial';
import Tutorials from './pages/Tutorials/Tutorials';

function App () {
  return (
    <ReactRouterDOM.BrowserRouter>
      <React.StrictMode>
        <Aside />
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route path="/about" component={About} />
          <ReactRouterDOM.Route exact path="/articles" component={Articles} />
          <ReactRouterDOM.Route
            path="/articles/:articleId"
            component={Article}
          />
          <ReactRouterDOM.Route path="/contact" component={Contact} />
          <ReactRouterDOM.Route exact path="/" component={Home} />
          <ReactRouterDOM.Route exact path="/resources" component={Resources} />
          <ReactRouterDOM.Route
            path="/resources/:resourceId"
            component={Resource}
          />
          <ReactRouterDOM.Route exact path="/tutorials" component={Tutorials} />
          <ReactRouterDOM.Route
            path="/tutorials/:articleId"
            component={Tutorial}
          />
        </ReactRouterDOM.Switch>
      </React.StrictMode>
    </ReactRouterDOM.BrowserRouter>
  );
}

ReactDom.render(<App />, window.document.getElementById('app'));
