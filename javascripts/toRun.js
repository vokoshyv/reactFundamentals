'use strict';

var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return (
          <div>Hello, world!</div>
        );
    }
});

React.render(<HelloWorld />, document.getElementById('content'));