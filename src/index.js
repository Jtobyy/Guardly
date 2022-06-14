import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Signup';
import Home from './Home';
import $ from 'jquery';

export function showLoading() {
  $('#loading').removeClass('hidden');
}

export function removeLoading() {
  $('#loading').addClass('hidden');
 }

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
