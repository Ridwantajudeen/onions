import React from 'react';
import logo from './Landing-page/images/onion.png';
import { Link } from 'react-router-dom';

function TeacherDashboard() {
  return (
    <div className="p-4">
         <Link to="/" className="mb-4">
                            <img src={logo} alt="logo" className="h-10 mx-auto" />
                          </Link>
      <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
      <p>Welcome, teacher</p>
      <div className="mt-4">
        <p className="text-gray-700">This a work in progress, stay tuned for more features!</p>
        </div>
    </div>
  );
}

export default TeacherDashboard;
