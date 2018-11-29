import React from 'react'; 
import './CardContainer.css'; 
import Card from './Card.js'; 
import PropTypes from 'prop-types'; 

const CardContainer = ({findAllMatches}) => {
  const data = findAllMatches();
  const allDistricts = data.map(district => (<Card {...district}/>))
  return (
    <div className="card-container">
      {allDistricts}
    </div>
  )
}

CardContainer.propTypes = {
  findAllMatches: PropTypes.func.isRequired
}

export default CardContainer; 