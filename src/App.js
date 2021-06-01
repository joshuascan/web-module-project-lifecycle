import React from "react";
import axios from "axios";
import "./App.css";

import CardList from "./components/CardList";

class App extends React.Component {
  state = {
    data: [],
    followers: [],
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

    axios
      .get("https://api.github.com/users/joshuascan/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Github User Cards</h1>
        <CardList data={this.state.data} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
