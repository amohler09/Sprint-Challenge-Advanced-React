import React from 'react';
import {fireEvent, findByText, render} from '@testing-library/react'
import ReactDOM from 'react-dom';

import {NavBar} from './NavBar'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('shows first players name', () => {
  findByText(/Alex Morgan /)
})

test('nav bar renders', () => {
  render(<NavBar />)
}) 


