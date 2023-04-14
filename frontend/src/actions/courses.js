export const fetchCourses = () => {
  return fetch("api/syllabi")
    .then(response => response.json())
    .then(data => data);
}