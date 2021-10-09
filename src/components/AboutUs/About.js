import React from 'react';
import Email from './Email/Email';
import Live from './Live/Live';
import Mobile from './Mobile/Mobile';
const About = () => {
    return (
        <div  className='text-center'>
            <h1 className="text-center m-5">Contact Us</h1>
            <div className='d-flex justify-content-around m-5'>
                <Mobile></Mobile>
                <Email></Email>
                <Live></Live>
            </div>
        </div>
    );
};

export default About;