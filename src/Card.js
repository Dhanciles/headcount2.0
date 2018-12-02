import React, { Component } from 'react'; 
import './Card.css'; 
import PropTypes from 'prop-types'; 

class Card extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }
  render() {
    const {location, stats} = this.props
    const statsList = Object.entries(stats)
    const list = statsList.map(([year, value]) => {
      return <li>{year}: {value}</li>
    })
    
    return (
      <div className="district-card">
        <h1>{location}</h1>
        <ul>{list}</ul>
      </div>
    )
  }

}

Card.propTypes = {
  location: PropTypes.string.isRequired, 
  stats: PropTypes.object.isRequired
}
export default Card; 