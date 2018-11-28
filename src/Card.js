import React from 'react'; 
import PropTypes from 'prop-types'; 

const Card = ({location, stats}) => {
  const statsList = Object.entries(stats)
  const list = statsList.map(([year, value]) => {
    return <li>{year}: {value}</li>
  })

  return (
    <div className="districtCard">
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