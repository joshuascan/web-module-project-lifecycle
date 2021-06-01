import React from "react";
import Card from "./Card";
import Follower from "./Follower";

class CardList extends React.Component {
  render() {
    // console.log("CardList", this.props);
    return (
      <div>
        <div className="card-container profile">
          <Card data={this.props.data} />
        </div>
        <div className="followers">
          <h2>Followers</h2>
          {this.props.followers.map((follower) => (
            <Follower key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
