import { MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import Service from './Service';


const Services = () => {

    const services =
        [
            {
                title: "Everyday Quran Learning",
                image: "https://i.ibb.co/n3pLgMD/quran-learning.jpg",
            },
            {
                title: "Everyday Five times salah finished",
                image: "https://i.ibb.co/8PXRbZ1/everyday-salah.jpg",
                
            },
            {
                title: "Physical Exercising",
                image: "https://i.ibb.co/6gfJf30/physical-exercise-islam.jpg",
                
            }, {
                title: "Proper Written arabic Letters",
                image: "https://i.ibb.co/WD2L1kC/proper-arabic-letter.jpg" ,
                
            },
            {
                title: "Proper salah Learning",
                image: "https://i.ibb.co/nrzPwpm/proper-salah-learning.jpg",
                
            },
            {
                title: "Properly Spoken Arabic Language ",
                image: "https://i.ibb.co/WFrz3ms/proper-arabic-language-spoken.jpg",
                
            }, {
                title: "Respecting Old men",
                image: "https://i.ibb.co/x1VCyDP/Respecting-Old-men.jpg",
                
            },
            {
                title: "Parent Respecting",
                image: "https://i.ibb.co/k1YLyVv/Parent-Respecting.jpg",
            },
            {
                title: "Proper Spoken arabic Letters ",
                image: "https://i.ibb.co/rGsNrYM/proper-Spoken-arabic-Letters.jpg",
                
            },
        ]

    return (
        <>
        <h1 className="text-center text-primary m-5">Our Services</h1>
        <div className="d-flex justify-content-center text-center">
            <section className="m-5"></section>
            <section>
                <MDBRow className='row-cols-1 row-cols-md-3 g-1 '>
                    {services.map(service=> <Service service={service}></Service>)}
                </MDBRow>
            </section>
        </div>
        </>
        
    );
};

export default Services;