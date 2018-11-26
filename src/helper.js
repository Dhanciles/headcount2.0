export default class DistrictRepository {
  stats =  {};  

  getStats = (data) => {
    return this.stats = {...data}; 
  }
  
}
