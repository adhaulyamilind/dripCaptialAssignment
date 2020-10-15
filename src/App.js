import React,{useState} from 'react';
import './App.css';
import CustomLoader from './components/atoms/CustomLoader'
import Routes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {useSelector} from 'react-redux'

function App() {
  const commonReducerData = useSelector(state => state.commonReducer)
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">DripCapital</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/articles">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">Add Post</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes />
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Milind Website 2020</p>
        </div>
      </footer>
      {commonReducerData.isLoading && <CustomLoader />}

    </Router>
  )
}

export default App;
