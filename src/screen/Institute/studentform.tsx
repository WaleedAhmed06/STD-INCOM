import  { useState } from 'react'
import CPInput from '../../component/CPinput'
import { fbSignUp } from '../../config/firebaseMethods';
import CPSelect from '../../component/CPselect';
import CPButton from '../../component/CPbutton';

export default function StudentForm() {
    const [studentData , setStudentData] = useState<any>({})

    const stdR = () => {
        fbSignUp(studentData).then((res:any) => {
          console.log(...res)
        }) .catch((err:any) =>{
          console.log(err)
        } )
    
      }
  return (
    <div>
      <div className='Inform'>
        <div><CPInput value={studentData.StudentName} label="Student Name" onChange={(e:any) => setStudentData({...studentData,StudentName:e.target.value})}/></div>
        <div><CPInput value={studentData.FatherName} label="Father Name" onChange={(e:any) => setStudentData({...studentData,FatherName:e.target.value})}/></div>
        <div><CPInput value={studentData.Contact} label="Contact"  onChange={(e:any) => setStudentData({...studentData,Contact:e.target.value})}/></div>
        <div><CPInput value={studentData.CNIC} label="CNIC" onChange={(e:any) => setStudentData({...studentData,CNIC:e.target.value})}/></div>
        <div><CPSelect options={[
          {       
           displayName: "none"
         },
         {
           value: "Secondary",
           displayName: "Secondary",
         },
         {
           value: "Intermediate",
           displayName: "Intermediate",
         },
         {
           value: "Bachelor",
           displayName: "Bachelor",
         },
         {
           value: "Masters",
           displayName: "Masters",
         },
       ]} value={studentData.LastQual} label="Last Qualification" onChange={(e:any) => setStudentData({...studentData,LastQual:e.target.value})}/></div>
        <div><CPSelect options={[
          {       
           displayName: "none"
         },
         {
           value: "Object Oriented Programming",
           displayName: "Object Oriented Programming",
         },
         {
           value: "Programming Fundamental",
           displayName: "Programming Fundamental",
         },
         {
           value: "Data Structure and Algorithm",
           displayName: "Data Structure and Algorithm",
         },
         {
           value: "Data Science",
           displayName: "Data Science",
         },
       ]} value={studentData.Cousre} label="Cousre" onChange={(e:any) => setStudentData({...studentData,Cousre:e.target.value})}/></div>
        <div><CPInput value={studentData.Institute} label="Institute" onChange={(e:any) => setStudentData({...studentData,Institute:e.target.value})}/></div>
        <div><CPSelect options={[
          {       
           displayName: "none"
         },
         {
           value: "A",
           displayName: "A",
         },
         {
           value: "B",
           displayName: "B",
         },
         {
           value: "C",
           displayName: "C",
         },
         {
           value: "D",
           displayName: "D",
         },
       ]} value={studentData.Section} label="Section" onChange={(e:any) => setStudentData({...studentData,Section:e.target.value})}/></div>
        <div><CPInput value={studentData.email} label="Email" onChange={(e:any) => setStudentData({...studentData,email:e.target.value})}/></div>
        <div><CPInput value={studentData.password} label="Password" type="Password" onChange={(e:any) => setStudentData({...studentData,password:e.target.value})}/></div>
        <div><CPSelect options={[
          {       
           displayName: "none"
         },
         {
           value: "Karachi",
           displayName: "Karachi",
         },
         {
           value: "Lahore",
           displayName: "Lahore",
         },
         {
           value: "Berlin",
           displayName: "Berlin",
         },
         {
           value: "New York",
           displayName: "New York",
         },
       ]} value={studentData.City} label="City" onChange={(e:any) => setStudentData({...studentData,City:e.target.value})}/></div>
        <div><CPSelect options={[
          {       
           displayName: "none"
         },
         {
           value: "Pakistan",
           displayName: "Pakistan",
         },
         {
           value: "United State of America",
           displayName: "United State of America",
         },
         {
           value: "Germany",
           displayName: "Germany",
         },
         {
           value: "Other",
           displayName: "Other",
         },
       ]} value={studentData.Country} label="Country" onChange={(e:any) => setStudentData({...studentData,Country:e.target.value})}/></div>
        <div><CPInput value={studentData.DoB} label="Date Of Birth" onChange={(e:any) => setStudentData({...studentData,DoB:e.target.value})}/></div>
        <div><CPInput value={studentData.Gender} label="Gender" onChange={(e:any) => setStudentData({...studentData,Gender:e.target.value})}/></div>
        <div><CPInput value={studentData.Address} label="Address" onChange={(e:any) => setStudentData({...studentData,Address:e.target.value})}/></div>
        <div><CPButton label="Student Register" onClick={stdR}/></div>
        </div>
    </div>
  )
}
