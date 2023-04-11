import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from './layout/Navbar';
import CourseList from './content/CourseList';

export default function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("api/syllabi")
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <CourseList courses={courses} />
    </div>
  );
}