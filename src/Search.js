import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 
import './Search.css'; 

class Search extends Component {
  constructor() {
    super(); 
    this.state = {
      district: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      district: e.target.value
    })
    this.props.displayFilteredDistricts(e.target.value)
  }
  
  render = () => {
    return(
      <div className="search-container">
        <input type="text" value={this.state.district} onChange={this.handleChange} placeholder="Search for District"/> 
      </div>
    )
  }
}

Search.propTypes = {
  displayFilteredDistricts: PropTypes.func.isRequired
}

export default Search; 