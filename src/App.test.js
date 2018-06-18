import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });

  it('adds 1 to all counters when press all is clicked', () => {
    wrapper.find('button').simulate('click');
    const state = wrapper.state()
    state.counters.map((counter) => {
      expect(counter.counter).to.equal(1)
    })
  })

});
