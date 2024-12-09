import React from 'react'
import check from './images/tick-square.svg'
import board from './images/with-board.jpg'
import classroom from './images/classroom.jpg'
import parents from './images/parents.jpg'
function Middle(){
    return(
        <div className='middle'>
            <div id='middle-top'>
                <h1 className="middle-top"> Teachers, Schools, Parents</h1>
                <p>Creating a Collaborative academic ecosystem by providing key stakeholders access to a platform designed<br /> 
                to enhance employment opportunities and academic excellence within Nigeria’s educational infrastructure.</p>
                
            </div>
            <div className='middle-middle'>
                <div className='mid-left'>
                    <h1 className='teacher-text'>Teachers</h1>
                    <div className='mid-list'>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Search for teaching opportunities within your preferred<br /> 
                        location.</p>
                        </div>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Find additional private lesson opportunities to boost your<br />
                        income</p>
                        </div>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Set and Achieve milestones with personalized<br /> 
recommendations of skill acquisition, international<br /> 
scholarships and further education programs to boost<br /> 
employability.</p>
</div>
                    </div>
                    <button className='mid-btn'>Find jobs</button>
                </div>
                <div className='mid-right'>
                <h1 className='teacher-text'>Teachers</h1>
                <div className='mid-right-img'>
                
                   <img src={board} className='middle-img' alt="middle-img"/>
                </div>
                </div>
            </div>
            <div className='middle-btm'>
                <div className="btm1">
                    <h1>Parents</h1>
                    <div className='mid-list'>
                    <img src={parents} className='btm1-img' alt='btm1-img'/>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Improve your child’s academic performance by one<br />
                        on one extra private lessons.</p>
                        </div>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Discover highly qualified teachers specialized in <br />
JAMB, WAEC, SAT, TOEFL & IELTS in person exam <br />
preparations.</p>
                        </div>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Receive timely teaching appointment reminders and<br /> 
                        process secure payments effortlessly.</p>
</div>
                    </div>
                    <div id='mid-hire'>
                     <button className="mid-hire">Hire a Teacher</button>
                     </div>
                </div>
                <div className="btm1">
                    <h1>Schools</h1>
                    <div className='mid-list'>
                    <img src={classroom} className='btm1-img' alt='btm1-img'/>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Ability to post job vacancies and connect with<br />
                        qualified, subject specific teachers.</p>
                        </div>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Gain valuable insights into applicants qualifications<br />
                        and preferred in a centralized dashboard.</p>
                        </div>
                        <div id='mid-list'>
                        <img src={check} className='mid-check' alt="check"/>
                        <p className='mid-text'>Eliminate ineffective traditional recruitment<br /> 
                        methods.</p>
</div>
                    </div>
                    <div id='mid-hire'>
                     <button className="mid-hire">Hire a Teacher</button>
                     </div>
                </div>
               
            </div>
        </div>
    )
}

export default Middle;