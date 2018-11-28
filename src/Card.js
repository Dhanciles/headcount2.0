import React from 'react'; 

const Card = ({location, stats}) => {
  const statsList = Object.entries(stats)
  // console.log(statsList)
  const list = statsList.map(stat => {
    return <li>{stat[0]}:  {stat[1]}</li>
  })
  return (
    <div className="districtCard">
      <h1>{location}</h1>
      <ul>{list}</ul>
    </div>
  )
}

export default Card; 