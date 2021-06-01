import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img
          width="100"
          src={this.props.data.avatar_url}
          alt={this.props.data.name}
        />
        <div>
          <h2>{this.props.data.name}</h2>
          <h3>{this.props.data.login}</h3>
          <p>Location: {this.props.data.location}</p>
          <p>Profile: {this.props.data.html_url}</p>
          <p>Followers: {this.props.data.followers}</p>
          <p>Following: {this.props.data.following}</p>
        </div>
      </div>
    );
  }
}

export default Card;
