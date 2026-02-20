import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Workouts from './components/Workouts';
import logo from './octofitapp-small.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App d-flex">
        <nav className="sidebar bg-dark">
          <div className="sidebar-header p-3">
            <Link className="d-flex align-items-center text-white text-decoration-none" to="/">
              <img src={logo} alt="OctoFit" width="40" height="40" className="me-2" />
              <span>OctoFit Tracker</span>
            </Link>
          </div>
          <ul className="sidebar-nav list-unstyled p-3">
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/activities">Activities</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/teams">Teams</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/workouts">Workouts</Link>
            </li>
          </ul>
        </nav>

        <div className="content flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <img src={logo} alt="OctoFit Tracker" className="mb-4" style={{ maxWidth: '200px' }} />
      <h1>Welcome to OctoFit Tracker</h1>
      <p className="lead">Track your fitness activities, compete with teams, and reach your goals!</p>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Activities</h5>
              <p className="card-text">Log and track your daily fitness activities.</p>
              <Link to="/activities" className="btn btn-primary">View Activities</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Leaderboard</h5>
              <p className="card-text">See how you rank against other members.</p>
              <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Teams</h5>
              <p className="card-text">Join or create teams to compete together.</p>
              <Link to="/teams" className="btn btn-primary">View Teams</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Workouts</h5>
              <p className="card-text">Discover personalized workout suggestions.</p>
              <Link to="/workouts" className="btn btn-primary">View Workouts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
