import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './vendor/bootstrap/css/bootstrap.min.css'
import './css/business-casual.css';
import './css/business-casual.min.css';
import './fonts/google_fonts.css';
import './fonts/google_fonts_api.css';
import './img/bg.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Products from './dir/products';
import About from './dir/about';
import Store from './dir/store';


ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
        <Route path='/store' component={Store} />
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();