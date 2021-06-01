import React from "react";
import axios from "axios";
import "./App.css";

import CardList from "./components/CardList";

class App extends React.Component {
  state = {
    data: [],
    followers: [],
    user: "",
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

  handleChange = (e) => {
    this.setState({ user: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Github User Cards</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user} onChange={this.handleChange}></input>
          <button>Search for User</button>
        </form>
        <CardList data={this.state.data} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
