import React from 'react'; 
import {shallow} from 'enzyme'; 
import Card from '.Card.js'; 

describe('Card', () => {
  let wrapper; 

  beforeEach(() => {
     wrapper = shallow(<Card />)

    test('matches snapshot', () => {

      expect(wrapper).toMatchSnapshot()
    })
  })
}); 