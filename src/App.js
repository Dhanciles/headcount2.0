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
      selectedCards: []
    }
  }

  displayFilteredDistricts = (userInput) => {
    const { findAllMatches } = this.state.repostitory
    const filteredDistricts = findAllMatches(userInput)
    this.setState({
      filteredDistricts
    })
  }


  compareDistricts = (location) => {
    const {findAllMatches} = this.state.repostitory
    let selectedCards; 
    const currentCard = findAllMatches(location)
    if (this.state.selectedCards.length > 1) {
      selectedCards = this.state.selectedCards.filter(selected => selected.location !== location )
      this.setState({
        selectedCards
      })
    } else {
      selectedCards = [...this.state.selectedCards, ...currentCard]
      this.setState({
        selectedCards
      })
    }
  }

  render() {
    const { findAllMatches } = this.state.repostitory
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search displayFilteredDistricts={this.displayFilteredDistricts}/>
        <CardContainer 
        findAllMatches={findAllMatches} 
        filteredDistricts={this.state.filteredDistricts}
        compareDistricts={this.compareDistricts}
        selectedCards={this.state.selectedCards}/>
      </div>

    );
  }
}

export default App;
