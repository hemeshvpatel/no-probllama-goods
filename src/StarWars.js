import React, { Component } from "react";

export default class StarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let url = "https://swapi.dev/api/people/";

    fetch(url)
      .then((response) => response.json())
      .then((results) => this.setState({ data: results }));
  }

  render() {
    console.log("State: ", this.state);
    return <div>Star Wars</div>;
  }
}
