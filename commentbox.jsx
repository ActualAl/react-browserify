/**
 *  @jsx React.DOM
 */

var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, Doofus! I am a CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('container')
);

module.exports = CommentBox;
