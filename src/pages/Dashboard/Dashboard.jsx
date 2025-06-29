import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>FarmVista</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Crop Management</li>
          <li>Soil & Water</li>
          <li>Weather</li>
          <li>Equipment</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="dashboard-header">
          <h1>Good Morning!</h1>
          <p>Optimize your farm operations with real-time insights</p>
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>Production Overview</h3>
            <p>1,000 tons total production</p>
          </div>
          <div className="card">
            <h3>Total Land Area</h3>
            <p>1,200 acres</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$50,000</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
