import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-welcome">
        <h1>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
        <p>แหล่งรวมความรู้และกิจกรรมทางด้านเทคโนโลยีสารสนเทศที่หลากหลาย...</p>
      </div>
      <div className="home-image">
        <img src="path-to-image" alt="กิจกรรมสาขา" />
      </div>
    </div>
  );
};

export default Home;
