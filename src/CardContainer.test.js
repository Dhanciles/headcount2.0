import React from 'react'; 
import {shallow} from 'enzyme'; 
import CardContainer from './CardContainer.js'; 

describe('CardContainer', () => {
  let wrapper; 

  beforeEach(() => {
     wrapper = shallow(<CardContainer />)
  })

  test('matches snapshot', () => {
    
    expect(wrapper).toMatchSnapshot(); 
  })
}); 