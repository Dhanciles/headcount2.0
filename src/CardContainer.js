import React from 'react'; 
import './CardContainer.css'; 
import Card from './Card.js'; 
import PropTypes from 'prop-types'; 

const CardContainer = ({findAllMatches, filteredDistricts, selectDistrict, selectedCards}) => {
  const data = findAllMatches();
  const allDistricts = data.map(district => (<Card {...district} selectDistrict={selectDistrict} selectedCards={selectedCards}
  key={Date.now()}/>))
  const searchedDistricts = filteredDistricts.map(search => (<Card{...search}/>))
  
  if (searchedDistricts.length >= 1) {
    return (
       <div className="card-container">
       {searchedDistricts}
     </div>
    )
  } else {
    return (
      <div className="card-container">
      {allDistricts}
    </div>
    )
  }
  
}

CardContainer.propTypes = {
  findAllMatches: PropTypes.func.isRequired,
  filteredDistricts: PropTypes.array.isRequired,
  selectDistrict: PropTypes.func.isRequired, 
  selectedCards: PropTypes.func.isRequired
}

export default CardContainer; 