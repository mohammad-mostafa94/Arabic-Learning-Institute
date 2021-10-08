import { MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import Course from '../Course/Course';



const HomePage = () => {

    const mainCourses =
    [
        {
            title: "Arabic Letter Writing",
            image: "https://i.ibb.co/tQ1TbLk/small-learnig.jpg",
            Price: 2000,
            description:"You have just made the first and most important step on your journey to learning how to read and write Arabic. You will amaze yourself at how fast you can pick it up."
        },
        {
            title: "Sahih Prayer Learning",
            image: "https://i.ibb.co/SBL1CV7/old-learning.jpg",
            Price: 1000,
            description:"That’s why we divided this Beginner’s Guide into seven chapters which represent the most important areas of the prayer such as how to make wudu, how to perform the prayer,"
        },
        {
            title: "Arabic Language Learning",
            image: "https://i.ibb.co/5cQZ3dh/girl-learning.jpg",
            Price: 3000,
            description:"Discover the fastest way to learn Arabic with our Complete Arabic online course. Whether you’re starting from scratch with Arabic letters, learning basic Arabic words for beginners,"
        },
        
]


    
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 m-3'>
            {mainCourses.map(mcr=><Course course = {mcr}></Course> )}
        </MDBRow>
        );
};

export default HomePage;