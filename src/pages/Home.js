import React from "react";
import "./Home.css"; // ไฟล์ CSS สำหรับหน้าแรก

const Home = () => {
  return (
    <div className="home-container">
      <h1>ยินดีต้อนรับสู่คณะเทคโนโลยีสารสนเทศ</h1>

      <div className="activity-section">
        <h2>กิจกรรมและข่าวสาร</h2>
        <div className="activity-item">
          <img
            src={`${process.env.PUBLIC_URL}public/poly1.jpg`}
            alt="กิจกรรม"
            className="activity-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}public/poly2.jpg`}
            alt="กิจกรรม"
            className="activity-image"
          />

          <p>การประกวดโครงงานนักศึกษา</p>
        </div>
      </div>
    </div>
  );
};

export default Home;