import React, { useState, useEffect } from 'react';

import { fetchCourses } from '../actions/courses';

import Navbar from './layout/Navbar';
import CourseList from './content/CourseList';
import AddCourseForm from './content/AddCourseForm';

export default function App() {
  const PAGES = {
    HOME: "home",
    COURSE_LIST: "courseList",
    ADD_COURSE_FORM: "addCourseForm"
  }  

  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(PAGES.COURSE_LIST);

  useEffect(() => {
    fetchCourses().then(data => setCourses(data));
  }, []);

  let content;
  switch (page) {
    case PAGES.COURSE_LIST:
      content = <CourseList courses={courses} />;
      break;
    case PAGES.ADD_COURSE_FORM:
      content = <AddCourseForm setPage={setPage} courses={courses} setCourses={setCourses} PAGES={PAGES}/>;
      break;
    default:
      content = null;
  }

  return (
    <div className='container'>
      <Navbar setPage={setPage} PAGES={PAGES} />
      {content}
    </div>
  );
}