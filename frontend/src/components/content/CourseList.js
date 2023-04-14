import React from 'react';

import Course from './Course';

export default function CourseList(props) {
  const { courses } = props;

  return (
    <div className='table-responsive'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className='col-4'>Course</th>
            <th className='col-4'>Instructor</th>
            <th className='col-4'></th>
          </tr>
        </thead>
        <tbody>
          {courses.map(syllabus => {
            return (
              <Course syllabus={syllabus} />
            );
          })}
        </tbody>
      </table>
    </div>
  )
}