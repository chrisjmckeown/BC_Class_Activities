import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends,
  };

  remove = (id) => {
    console.log(id);
    const friends = this.state.friends.filter(friend => friend.id !== id);
    console.log(friends)
    this.setState({friends});
  };

  render() {
    return (
      <Wrapper>
        <h1 className='title'>Friends List</h1>

        {this.state.friends.map((friend) => (
          <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            remove={this.remove}
          />
        ))}
      </Wrapper>
    );
  }
}

// import Counter from "./components/Counter";

// function App() {
//   return <Counter />;
// }

// // import Calculator from "./components/Calculator";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// // import SpongeBobCard from "./components/SpongeBobCard";
// // import SquidwardCard from "./components/SquidwardCard";
// // import MrKrabsCard from "./components/MrKrabsCard";
// import FriendsCard from "./components/FriendCard";
// import friends from "./friends.json";

// function App() {
//   return (
//     <Wrapper>
//       <Title>Friends List</Title>
//       {friends.map((friend) => (
//         <FriendCard
//           key={friend.id}
//           name={friend.name}
//           image={friend.image}
//           occupation={friend.occupation}
//           location={friend.location}
//         />
//       ))}
//       {/* <Calculator /> */}
//     </Wrapper>
//   );
// }

// import List from "./components/List";

// const groceries = [
//   {
//     id: 1,
//     name: "Milk",
//     purchased: true
//   },
//   {
//     id: 2,
//     name: "Eggs",
//     purchased: true
//   },
//   {
//     id: 3,
//     name: "Cheese",
//     purchased: false
//   },
//   {
//     id: 4,
//     name: "Cake Mix",
//     purchased: false
//   },
//   {
//     id: 5,
//     name: "Carrots",
//     purchased: false
//   },
//   {
//     id: 6,
//     name: "Juice",
//     purchased: true
//   }
// ];

// function App() {
//   return <List {...{groceries}} />;
// }
export default App;
