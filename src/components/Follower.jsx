import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div className="card-container follower">
        <img
          width="100"
          src={this.props.follower.avatar_url}
          alt={this.props.follower.name}
        />
        <div>
          <h3>{this.props.follower.login}</h3>
          <p>Profile: {this.props.follower.html_url}</p>
        </div>
      </div>
    );
  }
}

export default Follower;
