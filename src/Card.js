import React from 'react'; 
import PropTypes from 'prop-types'; 
import './Card.css'; 

const Card = ({location, stats, selectDistrict, selected}) => {
  const statsList = Object.entries(stats)
  const list = statsList.map(([year, value]) => {
    return <li className={value > 0.5 ? 'above' : 'below'}>{year}: {value}</li>
  })

  return (
    <article className="district-card"
    onClick={() => selectDistrict(location) }>
      <h1>{location}</h1>
      <ul>{list}</ul>
    </article>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired, 
  stats: PropTypes.object.isRequired, 
  selectDistrict: PropTypes.func.isRequired, 
  selected: PropTypes.bool.isRequired
}
export default Card;