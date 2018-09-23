import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.shuffleFriends(props.id)} data-value={props.selected}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

    {/*<span onClick={() => props.shuffleFriends(props.id)} className="remove" data-value={props.selected}>*/}
    {/*<span onClick={() => props.shuffle} className="remove">*/}
    {/* 𝘅 */}
    {/*</span>*/}
  </div>
);

export default FriendCard;
