import React, {Component} from 'react'; 

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
      <div className="search-input">
        <input type="text" value={this.state.district} onChange={this.handleChange}/> 
      </div>
    )
  }
  
}

export default Search; 