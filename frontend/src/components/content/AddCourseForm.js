import React from 'react'

export default function AddCourseForm(props) {
  return (
    <div className="container">
      <form className="form">
        <div className="row">
          <div className="col"><label className="col-form-label">Course</label></div>
          <div className="col"><input className="form-control" type="text" /></div>
        </div>
        <div className="row">
          <div className="col"><label className="col-form-label">Instructor</label></div>
          <div className="col"><input className="form-control" type="text" /></div>
        </div>
        <div className="row">
          <div className="col"><label className="col-form-label">Year</label></div>
          <div className="col">
            <select>
              <optgroup label="This is a group">
                <option value="12" selected="">This is item 1</option>
                <option value="13">This is item 2</option>
                <option value="14">This is item 3</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col"><label className="col-form-label">Semester</label></div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" id="formCheck-1" />
              <label className="form-check-label" for="formCheck-1">Label</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"><label className="col-form-label">Syllabus</label></div>
          <div className="col"><input type="file" /></div>
        </div>
      </form>
    </div>
  )
}