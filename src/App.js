import React, { Component } from "react";
import Nav from "./components/Nav";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    navMessage: ""
  };
  componentDidMount() {
    let msg = "Click on the image";
    this.setState({ navMessage: msg });
  }

  shuffleFriends = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //console.log("Testing " +  id);

    //let selectedFriends = this.state.friends.filter(friend => friend.id === id);
    friends.forEach((friend, index) => {
      if (friend.id === id) {
        console.log("Testing " + id);
        if (friend.selected === true) {
          console.log("Bad Choice");
          this.setState({ navMessage:"Wrong Guess!"});
          if (this.state.score > this.state.highScore) this.setState({highScore:this.state.score});
          friends.forEach((friend, index) => {
            friends[index].selected = false;
          })
        }
        else {
          console.log("Good Choice");
          this.setState({ navMessage:"Correct Guess!"});
          friends[index].selected = true;
        }
      }
    })
    /*if (friends[id].selected === true) {
      //this.setState({navMessage : "You guess wrong!"});
      friends.forEach(friend => {
        friend.selected = false;
      });
    } else {
      friends[id].selected = true;
      //this.setState({navMessage : "You guess correct!"});
    }*/
    let counter = this.state.friends.length;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = this.state.friends[counter];
      friends[counter] = this.state.friends[index];
      friends[index] = temp;
    }
    //const friends = this.state.friends.shuffleArray();
    // Set this.state.friends equal to the new friends array
    let friendCount = this.state.friends.filter(friend => friend.selected !== false).length;
    this.setState({ friends, score: friendCount });
    //let friendCount = this.state.friends.filter(friend => friend.selected !== false).length;
    console.log(friendCount);
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav
          navMessage={this.state.navMessage}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Wrapper className ="bg">
          <Title>Click on an image to earn points, but don't click on any more than once!</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              shuffleFriends={this.shuffleFriends}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              selected={friend.selected}
            />
          ))}
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
