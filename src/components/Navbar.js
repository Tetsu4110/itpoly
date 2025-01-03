import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ไฟล์ CSS สำหรับ Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* โลโก้และข้อความข้างโลโก้ */}
        <Link to="/" className="logo-link">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="logo-image"
          />
          <span className="logo-text">IT POLY</span>
        </Link>
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
