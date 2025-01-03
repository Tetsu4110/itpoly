import React from "react";

const Courses = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <h2>หลักสูตรของสาขาเทคโนโลยีสารสนเทศ</h2>

      {/* ไฟล์ PDF แรก */}
      <iframe
        src={`${process.env.PUBLIC_URL}public/courses1.pdf`}  // ใช้ PUBLIC_URL เพื่อเข้าถึงไฟล์ใน public
        width="80%"
        height="500px"
        title="หลักสูตร PDF 1"
        style={{ border: "none" }}
      ></iframe>

      {/* ไฟล์ PDF ที่สอง */}
      <iframe
        src={`${process.env.PUBLIC_URL}public/courses2.pdf`}  // ใช้ PUBLIC_URL เพื่อเข้าถึงไฟล์ใน public
        width="80%"
        height="500px"
        title="หลักสูตร PDF 2"
        style={{ border: "none" }}
      ></iframe>

      {/* ไฟล์ PDF ที่สาม */}
      <iframe
        src={`${process.env.PUBLIC_URL}public/courses3.pdf`}  // ใช้ PUBLIC_URL เพื่อเข้าถึงไฟล์ใน public
        width="80%"
        height="500px"
        title="หลักสูตร PDF 3"
        style={{ border: "none" }}
      ></iframe>

      {/* ไฟล์ PDF ที่สี่ */}
      <iframe
        src={`${process.env.PUBLIC_URL}public/courses4.pdf`}  // ใช้ PUBLIC_URL เพื่อเข้าถึงไฟล์ใน public
        width="80%"
        height="500px"
        title="หลักสูตร PDF 4"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Courses;
