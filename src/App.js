import React, { Component } from 'react';
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'; 
import CardContainer from './CardContainer.js'; 
import Search from './Search.js'; 
import ComparisonContainer from './ComparisonContainer.js'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      repostitory: new DistrictRepository(kinderData),
      filteredDistricts: [],
      comparedDistricts: []
    }
  }

  displayFilteredDistricts = (userInput) => {
    const { findAllMatches } = this.state.repostitory
    const filteredDistricts = findAllMatches(userInput)
    this.setState({
      filteredDistricts
    })
  }

  selectCard = (e) => {
    
  }

  // displayComparedDistricts = (district1, district2) => {
  //   const { compareDistrictAverages } = this.state.repostitory
  //   const comparedDistricts = compareDistrictAverages(district1, district2)
  //   this.setState({
  //     comparedDistricts
  //   })
  // }

  render() {
    const { findAllMatches } = this.state.repostitory
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search displayFilteredDistricts={this.displayFilteredDistricts}/>
        <CardContainer 
        findAllMatches={findAllMatches} 
        filteredDistricts={this.state.filteredDistricts}
        />
      </div>

    );
  }
}

export default App;
