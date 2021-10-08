import React from 'react';
import './About.css';
const About = () => {
    return (
        <div  className='text-center'>
            <h1 className="text-center m-5">Contact Us</h1>
            <div className='d-flex justify-content-around m-5'>
                <div className="">
                    <h1 className="p-5">&#128242;</h1>
                    <h2>By Mobile</h2>
                    <h6>(Saturday to Thursday, 8am to 4pm)</h6>
                    <p>Dhaka,Bangladesh:</p>
                    <p>01800000111</p>
                    <p>International:</p>
                    <p>+8801800000111</p>
                </div>
                
                <div className="">
                    <h1 className="p-5">&#9993;</h1>
                    <h2>Send  Email</h2>
                    <p className="">Just send us your questions or <br /> concerns by a new mail and  <br /> we will give you the help you need.</p>
                    <button className ="btn-primary">Mail</button>
                </div>
                
                <div className="">
                    <h1 className="p-5">&#128490;</h1>
                    <h2 >Live Chat</h2>
                    <h6 className="p-5">Chat with a member of our support team.</h6>
                    <button className ="btn-primary">Start now</button>
                </div>
            </div>
        </div>
    );
};

export default About;