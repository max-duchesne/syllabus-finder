import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

import { fetchCourses } from '../actions/courses';

import Navbar from './layout/Navbar';
import CourseList from './content/CourseList';
import AddCourseForm from './content/AddCourseForm';

export default function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(data => setCourses(data));
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <CourseList courses={courses} /> } />
        <Route path='add-course' element={ <AddCourseForm courses={courses} setCourses={setCourses}/> } />
      </Routes>
    </div>
  );
}