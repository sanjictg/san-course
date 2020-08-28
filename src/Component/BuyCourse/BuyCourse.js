import React from './node_modules/react';
import fakeData from '../../fakeData';
import {useState} from './node_modules/react';
import './BuyCourse.css';
import Catalog from '../Catalog/Catalog';
import './BuyCourse.css';


// eslint-disable-next-line
const BuyCourse = () => {
   const first12 = fakeData.slice(0,12);
   const [Courses, setCourses] = useState(first12); 
   const [count, setCount] =useState([]);

   const handleAddCourse = (course) =>{
       console.log("course add", course );
       const newCount = [...count, course];
       setCount(newCount);
   }
    return (
        <div className="course-container">
         <div className="list-container">
         {
         Courses.map(course => <Catalog 
            handleAddCourse ={handleAddCourse}
            subject={course}></Catalog>)
        }   
        </div>
         <div className="My-course">
         <h2>My Course</h2> 
         <h3>Select Course:{count.length} </h3>
         </div>     
        </div>
      
    );
};

export default BuyCourse;
