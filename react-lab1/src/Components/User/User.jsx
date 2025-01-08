import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, updateCourse, removeCourse, setError } from '../../redux/coursesSlice'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap

const CourseComponent = () => {
  const courses = useSelector(state => state.courses.items); // Updated state selector
  const dispatch = useDispatch();

  const [newCourse, setNewCourse] = useState({ id: '', name: '' }); // Updated state
  const [editCourseId, setEditCourseId] = useState(null);
  const [editName, setEditName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [errorMessage, setErrorMessage] = useState(''); // Состояние для хранения сообщения об ошибке

  const handleAdd = () => {
    const courseId = Number(newCourse.id);
    
    // Проверка на уникальность ID
    if (!courseId || !newCourse.name) {
      dispatch(setError('Invalid course'));
      setErrorMessage('Please provide a valid ID and name.');
      return;
    }

    if (courses.some(course => course.id === courseId)) {
      setErrorMessage('Course ID already exists.');
      return;
    }

    dispatch(addCourse({ id: courseId, name: newCourse.name }));
    setNewCourse({ id: '', name: '' });
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  const handleEdit = (course) => {
    setEditCourseId(course.id);
    setEditName(course.name);
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  const handleSave = (id) => {
    if (!editName) {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    dispatch(updateCourse({ id, updates: { name: editName } }));
    setEditCourseId(null);
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  const handleRemove = (courseId) => {
    dispatch(removeCourse(courseId));
  };

  const handleSort = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filteredAndSortedCourses = courses
    .filter(course => course.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="container mt-5">
      <h2>Courses</h2>

      {/* Отображение сообщения об ошибке */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={handleSort}>
          Sort {sortOrder === 'asc' ? '▲' : '▼'}
        </button>
      </div>
      
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          value={newCourse.id}
          onChange={(e) => setNewCourse({ ...newCourse, id: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add Course</button>
      </div>

      <ul className="list-group">
        {filteredAndSortedCourses.map(course => (
          <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editCourseId === course.id ? (
              <>
                <input
                  type="text"
                  className="form-control me-2"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button className="btn btn-success" onClick={() => handleSave(course.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{course.name}</span>
                <div>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(course)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleRemove(course.id)}>Remove</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseComponent;