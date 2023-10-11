import { useEffect, useState } from 'react';
import CPTable from '../../component/CPtable'
import { fbGet } from '../../config/firebaseMethods';

export default function CourseList() {
  const [courseData , setCourseData ] = useState<any>([]);

  const getData = () => {
    fbGet("CourseForm")
    .then((res : any) => {
      console.log(res);
      setCourseData([...res])
    })
    .catch((err) =>{
     console.log(err)
    });
  };
useEffect(() => {
  getData();
},[])

  return (
    <div>
      <div>
        <CPTable 
                label="Course List"
                cols={[
                  {
                    heading: "Course Name",
                    key: "CourseName",   // ya key woh hn jaha sey data arha hn us ka address 
                  },
                  {
                    heading: "Duration",
                    key: "Duration",
                  },
                  {
                    heading: "Fee",
                    key: "Fee",
                  },
                ]}
                datasourse={courseData}/>
      </div>
    </div>
  )
}
