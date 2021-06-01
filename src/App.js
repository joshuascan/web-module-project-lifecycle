import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    data: [],
    friends: ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/joshuascan")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Github User Cards</h1>
      </div>
    );
  }
}

export default App;
