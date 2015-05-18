/**
 *  @jsx React.DOM
 */

var React = require('react');

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, Doofus! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('container')
);

module.exports = CommentBox;
