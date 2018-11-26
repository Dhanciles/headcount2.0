export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((sortedDistricts, district) => {
      if (!sortedDistricts[district.Location]) {
        sortedDistricts[district.Location] = {[district.TimeFrame]: district.Data}
      } 
      sortedDistricts[district.Location][district.TimeFrame] = district.Data 
      return sortedDistricts
    }, {})
  }



}
