import React, {Component} from "react";
import "./UserCard.css"

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    }
  }

  componentDidMount() {
    this.getNewUser();
  }

  togglePassword = () => {
    this.setState({
      ...this.state,
      showPassword: !this.state.showPassword,
    })
  }

  getNewUser = async () => {

    const response = await fetch("https://randomuser.me/api/");

    const responseObj = await response.json();

    if (responseObj.results && responseObj.results.length > 0) {
      const profile = responseObj.results[0];

      this.setState({
        ...this.state,
        picture: profile.picture.medium,
        firstName: profile.name.first,
        lastName: profile.name.last,
        birthday: profile.dob.date,
        email: profile.email,
        password: profile.login.password,
      });
    }
  }

  render() {
    const {picture, firstName, lastName, birthday, email, password, showPassword} = this.state;

    const fullName = `${firstName} ${lastName}`;

    const passwordValue = showPassword ? password : "*****";

    const date = new Date(birthday);

    const birthdayValue = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

    return (
      <div className="root">
        <img
          className="picture"
          src={picture}
          alt="profile"
        />
        <h2 className="name">{ fullName }</h2>
        <div className="info">
          <div> Birthday: { birthdayValue }</div>
          <div> Email: { email }</div>
          <div> Password: { passwordValue }</div>
        </div>
        <div className="buttons">
          <button className="button" onClick={this.togglePassword}>Show/Hide Password</button>
          <button className="button" onClick={this.getNewUser}>Get New User</button>
        </div>
      </div>
    )
  }
}