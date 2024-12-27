import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>เกี่ยวกับเรา</h1>
      <div className="about-content">
        <p>สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่...</p>
        <p>เป้าหมายของเราคือการพัฒนานักศึกษาให้สามารถประยุกต์ใช้เทคโนโลยีในชีวิตประจำวันได้...</p>
      </div>
      <div className="about-image">
        <img src="path-to-image" alt="เกี่ยวกับเรา" />
      </div>
    </div>
  );
};

export default About;
