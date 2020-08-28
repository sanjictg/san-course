import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Catalog = (props) => {
    // console.log(props)
    const {name, details, price} = props.subject;
    
   
    return (
        <div className="">
                    <Card>
                        <Card.Header>View Course</Card.Header>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{details}</Card.Text>
                        <Card.Text>${price}</Card.Text>
                        <Button 
                        variant="primary"
                        onClick ={()=> props.handleAddCourse(props.course)}

                        >Enroll now</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Catalog;
