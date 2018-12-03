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
      districts: {}, 
      selectedCards: []
    }
  }

  componentDidMount = () => {
    this.setState({
        districts: this.state.repostitory.stats
    })
  }

  displayFilteredDistricts = (userInput) => {
    const { findAllMatches, stats } = this.state.repostitory
    const filteredDistricts = findAllMatches(userInput);
    const districtsObj = filteredDistricts.reduce((acc, district) =>  {
        acc[district.location] = stats[district.location]
        return acc
    }, {})
  
    this.setState({
      districts: districtsObj
    })
   
  }


  selectDistrict = (location) => {
    const {findAllMatches} = this.state.repostitory
    let selectedCards; 
    const currentCard = findAllMatches(location)
    if (!currentCard.selected && this.state.selectedCards.length < 2) {
      currentCard.selected = true; 
        selectedCards = [...this.state.selectedCards, ...currentCard]
      this.setState({
        selectedCards
      })
    } else {
      currentCard.selected = false; 
      selectedCards = this.state.selectedCards.filter(selectedCard => selectedCard.location !== currentCard.location)
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
        districts={this.state.districts}
        findAllMatches={findAllMatches} 
        selectDistrict={this.selectDistrict}
        selectedCards={this.state.selectedCards}/>
      </div>

    );
  }
}

export default App;
