import React from "react";
import check from "./images/tick-square.svg";
import board from "./images/with-board.jpg";
import classroom from "./images/classroom.jpg";
import parents from "./images/parents.jpg";
import { Link } from 'react-router-dom';

function Middle() {
  return (
    <div
  className="middle px-4 py-12 overflow-x-hidden"
  style={{ backgroundColor: '#f6fff2' }}
>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">
          Teachers, Schools, Parents
        </h1>
        <p className="text-gray-600 mt-4">
          Creating a Collaborative academic ecosystem by providing key stakeholders access to a platform designed <br />
          to enhance employment opportunities and academic excellence within Nigeria’s educational infrastructure.
        </p>
      </div>

      {/* Teachers Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Teachers</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Search for teaching opportunities within your preferred location.</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Find additional private lesson opportunities to boost your income.</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>
                Set and achieve milestones with personalized recommendations of skill acquisition, international scholarships, and further education programs to boost employability.
              </p>
            </div>
          </div>
          <Link to="/signup">
          <button className="w-[138.9px] text-xs rounded-[10px] h-[30px] mr-[10px] border-0 bg-[#35740b] text-[#fefefe] mt-5">
            Find jobs
          </button>
          </Link>
          
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Teachers</h2>
          <img src={board} alt="teacher at board" className="rounded shadow-md max-w-full" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Parents */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Parents</h2>
          <img src={parents} alt="parents" className="rounded shadow-md mb-4 max-w-full" />
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Improve your child’s academic performance by one-on-one extra private lessons.</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Discover highly qualified teachers specialized in JAMB, WAEC, SAT, TOEFL & IELTS exam preparations.</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Receive timely teaching appointment reminders and process secure payments effortlessly.</p>
            </div>
          </div>
          <Link to="/signup">
           <button
  className="
    w-[157px] h-[30px] text-xs rounded-[10px]
    bg-[#fefefe] text-[#35740b] border border-[#35740b]
    hover:bg-[#35740b] hover:text-[#fefefe] hover:border-[#fefefe]
  "
>
  Hire a Teacher
</button>
          </Link>
         
        </div>

        {/* Schools */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Schools</h2>
          <img src={classroom} alt="classroom" className="rounded shadow-md mb-4 max-w-full" />
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Ability to post job vacancies and connect with qualified, subject-specific teachers.</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Gain valuable insights into applicants’ qualifications and preferences in a centralized dashboard.</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={check} alt="check" className="w-6 h-6" />
              <p>Eliminate ineffective traditional recruitment methods.</p>
            </div>
          </div>
          <Link to="/signup">
          <button
  className="
    w-[157px] h-[30px] text-xs rounded-[10px]
    bg-[#fefefe] text-[#35740b] border border-[#35740b]
    hover:bg-[#35740b] hover:text-[#fefefe] hover:border-[#fefefe]
  "
>
  Hire a Teacher
</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Middle;
