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
    let matchingDistricts = districts.filter(district => district.includes(upperCasedInput))
    matchingDistricts = matchingDistricts.map(district => {
      return {location: district, stats: this.stats[district].stats}
    })
    return matchingDistricts
  }

  findAverage = (input) => {
    const district = this.findByName(input)
    const stats = Object.values(district.stats)
    const average = stats.reduce((sum, stat) => {
        sum += stat
        return sum 
      }, 0)
    return Math.round((average / stats.length)*1000) / 1000
  }

  compareDistrictAverages = (district1, district2) => {
    const average1 = this.findAverage(district1)
    const average2 = this.findAverage(district2)
    const comparisson = Math.round((average1 / average2)*1000) / 1000
    return { [district1.toUpperCase()]: average1, [district2.toUpperCase()]: average2, compared: comparisson}
  }
}

