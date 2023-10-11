import React from 'react'
import CPSelect from '../../component/CPselect'
import CPInput from '../../component/CPinput'
import { useState } from "react";
import { fbSignUp } from '../../config/firebaseMethods';
import CPButton from '../../component/CPbutton';

export default function UserReg() {
  const [instList , setInstList] = useState<any>({})

  const userR = () => {
    fbSignUp(instList).then((res:any) => {
      console.log(...res)
    }) .catch((err:any) =>{
      console.log(err)
    } )

  }
  return (
    <div>
     <div className='Inform'>
         <div><CPInput value={instList.name} label="Name" onChange={(e:any) => setInstList({...instList,name:e.target.value})}/></div>
        <div><CPInput value={instList.email} label="Email" onChange={(e:any) => setInstList({...instList,email:e.target.value})}/></div>
        <div><CPInput value={instList.password} label="Password" type="password" onChange={(e:any) => setInstList({...instList,password:e.target.value})}/></div>
        <div><CPInput value={instList.CNIC} label="CNIC" onChange={(e:any) => setInstList({...instList,CNIC:e.target.value})}/></div>
        <div><CPSelect value={instList.usertype}
        options={[
          {       
           displayName: "none"
         },
         {
           value: "admin",
           displayName: "Admin",
         },
         {
           value: "student",
           displayName: "Student",
         },
         {
           value: "teacher",
           displayName: "Teacher",
         },
         {
           value: "institute",
           displayName: "Institute",
         },
       ]} label="User Type" onChange={(e:any) => setInstList({...instList,usertype:e.target.value})}/></div>
       <div className='userbtn'><CPButton label="Register" onClick={userR}/></div>
       
      </div>    
      </div>
  )
}
