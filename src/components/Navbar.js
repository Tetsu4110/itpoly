import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ไฟล์ CSS สำหรับ Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">คณะเทคโนโลยีสารสนเทศ</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">หน้าแรก</Link></li>
        <li><Link to="/about">เกี่ยวกับเรา</Link></li>
        <li><Link to="/courses">หลักสูตร</Link></li>
        <li><Link to="/contact">ติดต่อเรา</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
