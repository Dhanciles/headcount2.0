export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((sortedDistricts, district) => {
      let dataNumber; 
      if (typeof district.Data === 'string') {
        dataNumber = 0 
      } else {
        dataNumber = parseFloat(district.Data.toFixed(3))
      }
      if (!sortedDistricts[district.Location]) {
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
      const upperCase = name.toUpperCase(); 
      const matchingDistrict = districts.find(district => district.includes(upperCase))
      return this.stats[matchingDistrict]
    }

  }

}
