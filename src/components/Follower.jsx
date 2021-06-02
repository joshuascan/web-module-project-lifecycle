import React from "react";

class Follower extends React.Component {
  render() {
    const { follower } = this.props;

    return (
      <div className="card-container follower">
        <img width="100" src={follower.avatar_url} alt={follower.name} />
        <div>
          <h3>{follower.login}</h3>
          <p>
            Profile: <a href="{follower.html_url}">{follower.html_url}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Follower;
