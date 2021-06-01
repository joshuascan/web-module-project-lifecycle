import React from "react";

class User extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <img width="100" src={data.avatar_url} alt={this.props.data.name} />
        <div>
          <h2>{data.name}</h2>
          <h3>{data.login}</h3>
          <p>Location: {data.location}</p>
          <p>
            Profile: <a href="{data.html_url}">{data.html_url}</a>
          </p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
        </div>
      </div>
    );
  }
}

export default User;
