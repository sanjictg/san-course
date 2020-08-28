import React from 'react';
import logo from '../../images/logo.png'
import Card from 'react-bootstrap/Card'
import './CourseList.css'

const CourseList = () => {
    
    return (
        <div>
            <div className="image">
                <Card className=" text-white">
                    <Card.Img src={logo} alt="" />
                    <Card.ImgOverlay>
                        <Card.Title className="title">Course Catalog buX</Card.Title>
                        <Card.Text className="text">Courses from buX</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
         
        </div>
    );
};
export default CourseList;
