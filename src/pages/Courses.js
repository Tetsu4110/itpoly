import React from "react";
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>หลักสูตรของเรา</h1>
      <ul className="courses-list">
        <li className="course-item">ปวช. - เทคโนโลยีสารสนเทศ</li>
        <li className="course-item">ปวส. - เทคโนโลยีสารสนเทศและการสื่อสาร</li>
      </ul>
    </div>
  );
};

export default Courses;
