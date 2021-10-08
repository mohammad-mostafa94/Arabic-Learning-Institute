import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
const Service = (props) => {

    const {title,image} = props.service;

    return (
        <div className="">
            <MDBCol>
                <MDBCard className='h-50 w-50'>
                <MDBCardImage
                    src={image}
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    );
};

export default Service;