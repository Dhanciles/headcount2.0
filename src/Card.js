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

  selectDistrict = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    const {location, stats} = this.props
    const statsList = Object.entries(stats)
    const list = statsList.map(([year, value]) => {
      return <li>{year}: {value}</li>
    })

    return (
      <div className={ this.state.selected ? 'selected-card' : 'district-card'} onClick={() => this.selectDistrict()}>
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