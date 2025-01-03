import React from "react";

const Courses = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <h2>หลักสูตรของสาขาเทคโนโลยีสารสนเทศ</h2>

      {/* ไฟล์ PDF แรก */}
      <iframe
        src="public/courses1.pdf"  // ระบุพาธไฟล์ PDF แรก
        width="80%"
        height="500px"
        title="หลักสูตร PDF 1"
        style={{ border: "none" }}
      ></iframe>

      {/* ไฟล์ PDF ที่สอง */}
      <iframe
        src="public/courses2.pdf"  // ระบุพาธไฟล์ PDF ที่สอง
        width="80%"
        height="500px"
        title="หลักสูตร PDF 2"
        style={{ border: "none" }}
      ></iframe>

      {/* ไฟล์ PDF ที่สาม */}
      <iframe
        src="public/courses3.pdf"  // ระบุพาธไฟล์ PDF ที่สาม
        width="80%"
        height="500px"
        title="หลักสูตร PDF 3"
        style={{ border: "none" }}
      ></iframe>

      {/* ไฟล์ PDF ที่สี่ */}
      <iframe
        src="public/courses4.pdf"  // ระบุพาธไฟล์ PDF ที่สี่
        width="80%"
        height="500px"
        title="หลักสูตร PDF 4"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Courses;