var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    var component = this;
    $.get("https://api.github.com/users/" + this.props.login, function(data) {
      component.setState(data);
    });
  },
  render: function() {
    return (

      < div >
      < img src = {
        this.state.avatar_url
      }
      width = "80" / >
      < h3 > {
        this.state.name
      } < /h3> < hr / >
      < /div>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {logins: ['mpj','torvalds']};
  },
  render: function() {
    return ( < div >
      < Card login = "JSHUADVD" / >
      < Card login = "ericdouglas" / >


      < /div>


    );
  }
});

React.render( < Main / > , document.getElementById("root"));
