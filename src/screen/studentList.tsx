import React, { useEffect, useState } from 'react';
import { fbGet } from '../config/firebaseMethods';
import CPButton from '../component/CPbutton';

export default function StudentList() {
  const [stdData, setSTDData] = useState<any>([]);

  const getData = () => {
    fbGet("users")
      .then((res:any) => {
        console.log(res);
        setSTDData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <div className="header">STUDENT LIST</div>
        <div className="container">
          {stdData.map((student:any, i:any) => (
            student.StudentName && student.FatherName ? (
              <div className="item" key={i}>
                <p>Student Name: <span id='title'>{student.StudentName}</span></p>
                <p>Father's Name: <span id='title'>{student.FatherName}</span></p>
                <p>Course: <span id='title'>{student.Cousre}</span></p>
                <CPButton label="Profile View"/>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}
