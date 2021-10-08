import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';

const Course = (props) => {
    const {title,image,Price,description} = props.course;
    return (
        <div>
           <MDBCol>
                <MDBCard>
                <MDBCardImage
                    src={image}
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>
                    {description}
                    </MDBCardText>
                    <MDBCardTitle>Course Price: {Price}</MDBCardTitle>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    );
};

export default Course;