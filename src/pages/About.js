
import React from "react";
import "./About.css"; // เชื่อมโยงไฟล์ CSS

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">เกี่ยวกับเรา</h1>
      <p className="description">
        คณะเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่
      </p>
      <h2 className="subheading">วิสัยทัศน์</h2>
      <p className="content">
        พัฒนานักศึกษาให้มีความรู้ ความสามารถ และพร้อมสำหรับการทำงานในยุคดิจิทัล
      </p>
      <h2 className="subheading">พันธกิจ</h2>
      <p className="content">เสริมสร้างการเรียนรู้และการพัฒนาทักษะด้านเทคโนโลยี</p>
    </div>
  );
};

export default About;
