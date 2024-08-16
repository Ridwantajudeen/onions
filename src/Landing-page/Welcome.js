import React from 'react'
import teacher from './images/teacher.png'
import vector from './images/Vector.png'
import profile from './images/profile-circle.png'
import people from './images/people.png'
function Welcome(){
    return(
        <div id="welcome">
        <div className="welcome">
            <div className="the-left">
                <div>
               <h1 className="left-top"> Know your Onions?<br />
                <span className="left-top2">Find a Teaching Job</span>
                </h1>
                <p className="left-btm">For Teachers seeking new Job Opportunities, parents searching<br />
to enhance their child’s academic performance and school faced<br />
with staffing shortages, we bridged the gap between needs and<br />
qualification.</p>
                </div>
                <div className="left-btn">
                    <button className="left-find">Find jobs</button>
                    <button className="left-hire">Hire a Teacher</button>
                </div>
            </div>
            <div className="the-right">
                <img src={teacher} className="welcome-img" alt="welcome-img"/>
            </div>
        </div>
        <div className="welcome-btm">
            <div className="welcome-objects">
                <img className="vector" src={vector} alt="vector"/><bro />
                <p className="the-vector">500+<br /> Schools</p>
            </div>
            <div className="welcome-objects">
                <img className="people" src={people} alt="people"/><bro />
                <p className="the-people">500+<br /> Teachers</p>
            </div>
            <div className="welcome-objects">
                <img className="profile" src={profile} alt="profile"/><bro />
                <p className="the-profile">500+<br /> Employers</p>
            </div>
           
        </div>
        </div>
    )
}

export default Welcome;