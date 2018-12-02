import React, { Component } from 'react'; 
import './Card.css'; 
import PropTypes from 'prop-types'; 

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  selectDistrict = (location) => {
    const { compareDistricts } = this.props
    this.setState({
      selected: !this.state.selected
    })
     compareDistricts(location)
  }
  render() {
    const {location, stats} = this.props
    const statsList = Object.entries(stats)
    const list = statsList.map(([year, value]) => {
      return <li className={value > 0.5 ? 'above' : 'below'}>{year}: {value}</li>
    })

    return (
      <div className={ this.state.selected ? 'selected-card' : 'district-card'} onClick={() => this.selectDistrict(location)}>
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