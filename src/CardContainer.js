import React from 'react'; 
import Card from './Card.js'; 

const CardContainer = ({findAllMatches}) => {
  const data = findAllMatches();
  const allDistricts = data.map(district => {
    return <Card {...district}/>
  })
  return (
  <div>{ allDistricts }</div>
  )
}

export default CardContainer; 