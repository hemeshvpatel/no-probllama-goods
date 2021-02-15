import React, { Component } from "react";

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let url = "https://reqres.in/api/users";
    console.log(fetch(url)); //should see promise pending, fetch is promise based
    fetch(url).then((response) => console.log(response)); //can see here that we got a 200ok status back
    //as of now that response isn't accessible so we need to run a json conversion function

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data.data));

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.data }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("A name was submitted to be found: " + this.state.value);
    this.findName(this.state.value);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  findName = (name) => {
    const namesFound = this.state.data.filter(
      (user) => user.first_name === name
    );
    console.log(namesFound);
    this.setState({ namesFound });
  };

  render() {
    const { data, value, namesFound } = this.state;
    console.log("Current State", this.state);

    let listNames = "";

    if (namesFound) {
      namesFound.forEach(
        (user) => (listNames += `${user.first_name} ${user.last_name}`)
      );
    }

    return (
      <div>
        <div>
          Map Function:{" "}
          {data
            ? data.map((user) => (
                <ul key={user.id}>
                  <li>
                    <img src={user.avatar}></img>
                  </li>
                  <li>
                    {user.id} - {user.first_name} {user.last_name}
                  </li>
                  <li>{user.email}</li>
                </ul>
              ))
            : "No Map Data"}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Find Full Name</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        <div>Names Found: {namesFound ? listNames : "No names found"}</div>
      </div>
    );
  }
}
