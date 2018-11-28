export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data)
  }

  cleanData = (data) => {
    return data.reduce((sortedDistricts, district) => {
      // const { Data, Location, TimeFrame } = district;
      let dataNumber = typeof district.Data === 'string' ? 0 : parseFloat(district.Data.toFixed(3))
  
      if (!sortedDistricts[district.Location.toUpperCase()]) {
        sortedDistricts[district.Location.toUpperCase()] = {location: district.Location.toUpperCase(), stats: {[district.TimeFrame]: dataNumber}}
      } 
      sortedDistricts[district.Location.toUpperCase()].stats[district.TimeFrame] = dataNumber 

      return sortedDistricts
    }, {})
  }

  findByName = (name) => {
    const districts = Object.keys(this.stats) 
    if (!name) {
      return undefined
    } else {
      const upperCasedName = name.toUpperCase(); 
      const matchingDistrict = districts.find(district => district.includes(upperCasedName))
      return this.stats[matchingDistrict]
    }
  }

  findAllMatches = (userInput) => {
    const districts = Object.keys(this.stats) 

    if (!userInput) {
     return districts.map(district => {
        return {location: district, stats: this.stats[district].stats}
      }) 
    }
    let upperCasedInput = userInput.toUpperCase(); 
    const matchingDistricts = districts.filter(district => district.includes(upperCasedInput))
    return matchingDistricts
  }
}