import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {shallow} from 'enzyme'; 

describe('App', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test.skip('renders all districts', () => {
    const initialState = []; 

    wrapper.displayFilteredDistricts()

  })
})
