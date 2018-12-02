import React from 'react'; 
import PropTypes from 'prop-types'; 
import './Card.css'; 

const Card = ({location, stats}) => {
  const statsList = Object.entries(stats)
  const list = statsList.map(([year, value]) => {
    return <li className={value > 0.5 ? 'above' : 'below'}>{year}: {value}</li>
  })

  return (
    <div className="district-card">
      <h1>{location}</h1>
      <ul>{list}</ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired, 
  stats: PropTypes.object.isRequired
}
export default Card;