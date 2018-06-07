import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

describe('App MyComponent', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
});
