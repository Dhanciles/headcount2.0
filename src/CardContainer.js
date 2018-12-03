import React from 'react'; 
import './CardContainer.css'; 
import Card from './Card.js'; 
import PropTypes from 'prop-types'; 

const CardContainer = ({selectDistrict, selectedCards, districts}) => {
  const data = Object.keys(districts);
  const allDistricts = data.map(district => (<Card {...districts[district]} selectDistrict={selectDistrict} selectedCards={selectedCards}
  />))
    return (
      <div className="card-container">
      {allDistricts}
    </div>
    )
  }
// }
CardContainer.propTypes = {

  findAllMatches: PropTypes.func.isRequired,
  filteredDistricts: PropTypes.array,
  selectDistrict: PropTypes.func,
  selectedCards: PropTypes.func
}

export default CardContainer; 