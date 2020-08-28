import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import CourseList from './component/CourseList/CourseList';
import BuyCourse from './Component/BuyCourse/BuyCourse';



function App() {
  return (
    <div>
      <Header></Header>
      <CourseList></CourseList>
      <BuyCourse></BuyCourse>
     
    </div>
  );
}

export default App;
