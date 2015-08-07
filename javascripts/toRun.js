/** @jsx React.DOM */
// var React = require('react');

// var HelloWorld = React.createClass({
//   render: function(){
//     return (
//       <div>Hello, World!</div>;
//     )
//   }
// });

// React.render(new HelloWorld(), document.getElementById('content'));

var React = require('react');

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('content');
)