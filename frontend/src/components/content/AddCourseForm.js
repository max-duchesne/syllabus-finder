import React, { useState } from 'react'

import { postCourse } from '../../actions/courses';

export default function AddCourseForm() {

  const [formData, setFormData] = useState({
    course: '',
    instructor: '',
    year: '',
    semester: '',
    pdf: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;

    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postCourse(formData);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>

        <div className="row">
          <div className="col"><label className="col-form-label">Course</label></div>
          <div className="col"><input className="form-control" type="text" name="course" value={formData.course} onChange={handleChange} /></div>
        </div>

        <div className="row">
          <div className="col"><label className="col-form-label">Instructor</label></div>
          <div className="col"><input className="form-control" type="text" name="instructor" value={formData.instructor} onChange={handleChange} /></div>
        </div>

        <div className="row">
          <div className="col"><label className="col-form-label">Year</label></div>
          <div className="col">
            <select name="year" value={formData.year} onChange={handleChange}>
              <optgroup label="Year">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col"><label className="col-form-label">Semester</label></div>
          <div className="col">
            <select name="semester" value={formData.semester} onChange={handleChange}>
              <optgroup label="Semester">
                <option value="fall">Fall</option>
                <option value="janplan">JanPlan</option>
                <option value="spring">Spring</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col"><label className="col-form-label">Syllabus</label></div>
          <div className="col"><input type="file" name="pdf" onChange={handleChange} /></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col"><button type="submit" className="btn btn-primary">Submit</button></div>
        </div>

      </form>
    </div>
  )
}