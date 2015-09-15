var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (

      <div>
        <img src="https://avatars.githubusercontent.com/u/7577457?v=3" width="80" />
        <h3>JSHUADVD</h3>
        <hr/>
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
      <Card login="JSHUADVD" />
      </div>


    );
  }
});

React.render( <Main / >, document.getElementById("root"));
