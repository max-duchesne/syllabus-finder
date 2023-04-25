export const fetchCourses = () => {
  return fetch("api/syllabi")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('Error fetching courses:', error));
}

export const postCourse = (courseData) => {
  const formData = new FormData();
  formData.append('course', courseData.course);
  formData.append('instructor', courseData.instructor);
  formData.append('year', courseData.year);
  formData.append('semester', courseData.semester);
  formData.append('pdf', courseData.pdf);

  return fetch("api/syllabi/", {
    method: "POST",
    body: formData,
  })
  .then(response => response.json())
  .catch(error => console.error('Error posting course:', error));
}