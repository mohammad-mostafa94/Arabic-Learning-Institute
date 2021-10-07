import React from 'react';

const Service = () => {

    const courses =
        [
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
            {
                name: "Masum Bhuiyan",
                image: "https://i.ibb.co/KVNKNf2/masum.jpg",
                Donation: 100
            },
        ]
      

    

    return (
        <div>
            <h1>Service</h1>
            {courses.map(cr=> console.log(cr))}
        </div>
    );
};

export default Service;