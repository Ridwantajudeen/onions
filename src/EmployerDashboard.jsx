import React from 'react';
import logo from './Landing-page/images/onion.png';
import { Link } from 'react-router-dom';
function EmployerDashboard() {
  return (
    <div className="p-4">
        <Link to="/" className="mb-4">
                    <img src={logo} alt="logo" className="h-10 mx-auto" />
                  </Link>
      <h1 className="text-2xl font-bold">Employer Dashboard</h1>
      <p>Welcome, employer!</p>
      <div className="mt-4">
        <p className="text-gray-700">This is a work in progress, stay tuned for more features!</p>
        </div>
    </div>
  );
}

export default EmployerDashboard;