import React, { Component } from 'react';
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'; 
import CardContainer from './CardContainer.js'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      repostitory: new DistrictRepository(kinderData)
    }
  }

  render() {
    const { findAllMatches } = this.state.repostitory
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <CardContainer findAllMatches={findAllMatches}/>
      </div>

    );
  }
}

export default App;
