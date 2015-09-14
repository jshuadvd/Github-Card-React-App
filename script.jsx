var Card = React.createClass({
  render: function() {
    return (

      <div>
        <img src="https://avatars.githubusercontent.com/u/7577457?v=3" />
        <h3>Name Here</h3>
        <hr/>
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
      <Card />
      </div>


    );
  }
});

React.render( <Main / >, document.getElementById("root"));
