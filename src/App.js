import React, { Component } from "react";

import CardList from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import USER_DATA from "./components/card-list/user_data";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };

    //this.handleChange = this.handleChange.bind(this);
    //.bind
  }

  componentDidMount() {
    this.setState({ users: USER_DATA });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(this.state.searchField);
  };

  render() {
    //.filter method and .includes for search

    //this is destructuring
    const { users, searchField } = this.state;
    
    console.log(users);
    const filteredUsers = Object.values(users).filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log("filteredUsers = ", filteredUsers);
    return (
      <div className="App">
        <p className='info'>i</p>
        <p className='info-hide' >A database for alien community on earth</p>
        <div>
          <span className="monsters">Aliens </span>
          <span className="monsters">Rolodex</span>
        </div>
        
        <SearchBox
          placeholder="Search Aliens"
          //this is a special keyword in javascript
          //this gives us the reference
          //this keyword is set to our context
          //this keywords gets bound differently based on out class methods
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
