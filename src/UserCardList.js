import React, {Component} from "react";
import UserCard from "./UserCard";

export default class UserCardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      qty: 0
    }
    this.calculateArray(this.props.qty);
  }

  addCard = () => {
    this.calculateArray(this.state.qty + 1);
  }

  calculateArray = (qty) => {
    const arr = [];

    for(let i = 0; i < qty; i++) {
      arr.push(i);
    }

    this.setState({
      ...this.state,
      arr,
      qty,
    })
  }

  render() {
    const {arr} = this.state;

    return (
      <div>
        {
          arr.map((i) => (
            <UserCard key={i} />
          ))
        }
        <button onClick={this.addCard}>Add Card</button>
      </div>
    )
  }
}