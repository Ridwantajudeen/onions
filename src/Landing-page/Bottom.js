import React from 'react'
import employ from './images/employ.png'
import career from './images/career.png'
import management from './images/management.png'
import think from './images/think.png'
import arrow from "./images/arrow-down.png"
import contact from "./images/contact.png"

function Bottom(){
    return(
        <div className='bottom'>
            <div className='btm-first'>
                <h1 className='btm-first-text'>Why Onions?</h1>

                <div className='btm-first-cards'>
                <div className='btm-first-card'>
                    <img src={employ} className='btm-first-card-img' alt='btm-first-card-img'/>
                    <h1>Employment<br />
                    Opportunities</h1>
                    <p>Reducing the rates of unemployment in<br /> 
Nigeria and providing career development <br />
opportunities to Teachers.</p>
                </div>
                <div className='btm-first-card'>
                    <img src={career} className='btm-first-card-img' alt='btm-first-card-img'/>
                    <h1>Employment<br />
                    Opportunities</h1>
                    <p>Reducing the rates of unemployment in<br /> 
Nigeria and providing career development <br />
opportunities to Teachers.</p>
                </div>
                <div className='btm-first-card'>
                    <img src={management} className='btm-first-card-img' alt='btm-first-card-img'/>
                    <h1>Employment<br />
                    Opportunities</h1>
                    <p>Reducing the rates of unemployment in<br /> 
Nigeria and providing career development <br />
opportunities to Teachers.</p>
                </div>
                </div>
            </div>
            <div className='btm-middle'>
                <h1 className='btm-middle-text' >Frequently asked Questions</h1>
                <div className='btm-middle-card'>
                    <img src={think} className='middle-card-img' alt='middle-card-img'/>
                    <div className=' middle-card-texts'>
                        <div className='middle-card-compo'>
                            <h4 className=' middle-card-text'>Could distance be a barrier?</h4>
                            <img src={arrow} className='middle-card-icon' alt='arrow'/>
                        </div>
                        <div className='middle-card-compo'>
                            <h4 className=' middle-card-text'>How many extra hone lesson jobs can I<br /> 
                            apply for?</h4>
                            <img src={arrow} className='middle-card-icon' alt='arrow'/>
                        </div>
                        <div className='middle-card-compo'>
                            <h4 className=' middle-card-text'>How can i be sure that the teachers listed<br /> 
                            are genuine?</h4>
                            <img src={arrow} className='middle-card-icon' alt='arrow'/>
                        </div>
                        <div className='middle-card-compo'>
                            <h4 className=' middle-card-text'>How many hours for an extra home<br /> 
                            lesson schedule?</h4>
                            <img src={arrow} className='middle-card-icon' alt='arrow'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-contact'>
                <h1>Contact Us</h1>
                <div className='bottom-contact-det'>
                <div className='bottom-contact-left'>
                    <h2>Have Further Enquiries?</h2>
                    <p>Send us a mail for more information</p>
                    <form>
                    <div className='contact-left-one'>
                        <div>
                        <p>Name</p>
                        <input className='left-one-input' />
                    </div>
                    <div>
                        <p>Email Address</p>
                        <input className='left-one-input' />
                    </div>
                    </div>
                    <div className='contact-left-two'>
                        <p>Message</p>
                        <textarea className="left-two-input" rows={5}/>
                    </div>
                    <button type='submit'>Submit</button>
                    </form>
                </div>
                <img src={contact} className='bottom-contact-img' alt='bottom-contact-img'/>
                </div>
               
            </div>
        </div>
    )
}

export default Bottom;