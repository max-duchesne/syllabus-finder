import React from 'react';

export default function Navbar(props) {
  const { setPage, PAGES } = props;

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" onClick={() => setPage(PAGES.COURSE_LIST)}>Course Finder</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setPage(PAGES.ADD_COURSE_FORM)}>Add Course Info</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
  );
}