const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const {Link, IndexLink} = require('react-router');

const Navigation = React.createClass({
  componentDidMount: function(){
    var navMarkup = (
      <div>
        <ul className="dropdown menu" data-dropdown-menu="">
          <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
          <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
          <li><a href="www.google.it" >asd</a></li>
        </ul>
      </div>
    );
    var navigation = ReactDOMServer.renderToString(navMarkup);
    document.getElementById('nav').innerHTML = navigation;
  },
  render: function(){
    return(
      <div id="nav">
      </div>
    );
  }
});

module.exports = Navigation;
