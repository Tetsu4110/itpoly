import React from "react";
import "./Contact.css"; // เชื่อมโยงไฟล์ CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="title">ติดต่อเรา</h1>
      <p className="address">ที่อยู่: 123 หมู่ 4 ถนนมหิดล อำเภอเมือง จังหวัดเชียงใหม่</p>
      <p className="phone">เบอร์โทรศัพท์: 053-123456</p>
      <p className="email">อีเมล: info@lannapolytechnic.ac.th</p>
      <div className="map-container">
        <h2 className="subheading">แผนที่</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.380602089577!2d98.95398721543024!3d18.774444987298107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3ad14d4ffb59%3A0x2178a5f2f9b5da9!2sChiang%20Mai!5e0!3m2!1sen!2sth!4v1692352139176!5m2!1sen!2sth"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;