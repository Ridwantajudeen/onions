import React from 'react'
import teacher from './images/teacher.png'
import vector from './images/Vector.png'
import profile from './images/profile-circle.png'
import people from './images/people.png'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <section id="welcome" className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 bg-white rounded-2xl p-6">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Know your Onions? <br />
            <span className="text-green-800">Find a Teaching Job</span>
          </h1>
          <p className="text-sm text-gray-700 max-w-md">
            For Teachers seeking new Job Opportunities, parents searching
            to enhance their child’s academic performance and schools faced
            with staffing shortages, we bridge the gap between needs and
            qualification.
          </p>
          <div className="flex gap-3 mt-4">
            <Link to="/signup">
            <button className="px-4 py-1.5 text-xs rounded-lg bg-green-800 text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800">
              Find Jobs
            </button>
            </Link>
            <Link to="/signup">
            <button className="px-4 py-1.5 text-xs rounded-lg bg-white text-green-800 border border-green-800 hover:bg-green-800 hover:text-white">
              Hire a Teacher
            </button>
            </Link>
            
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center">
          <img
            src={teacher}
            alt="welcome-img"
            className="max-w-xs md:max-w-md rounded-xl"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-around items-center gap-4 bg-white shadow-sm rounded-2xl p-4">
  <div className="text-center">
    <img src={vector} alt="vector" className="w-4 mx-auto mb-1" />
    <p className="text-sm">500+ <br /> Schools</p>
  </div>
  <div className="text-center">
    <img src={people} alt="people" className="w-4 mx-auto mb-1" />
    <p className="text-sm">500+ <br /> Teachers</p>
  </div>
  <div className="text-center">
    <img src={profile} alt="profile" className="w-4 mx-auto mb-1" />
    <p className="text-sm">500+ <br /> Employers</p>
  </div>
</div>
    </section>
  )
}

export default Welcome
