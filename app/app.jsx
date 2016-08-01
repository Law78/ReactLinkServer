var React = require('react');
var ReactDOM = require('react-dom');
// Specifico le proprietà che mi interessano dell'oggetto e mi vengono create automaticamente le variabili
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Miei componenti:
var Main = require('Main');
var Test = require('Test');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="Test" component={Test}/>
    
    </Route>
  </Router>,
  document.getElementById('app'));
