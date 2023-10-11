import React, { useEffect, useState } from 'react'
import { fbGet } from '../../config/firebaseMethods';

export default function InstituteAd() {
  const [instData , setInstData ] = useState<any>([]);
  
  const getData = () => {
    fbGet("InstitutteForm")
    .then((res : any) => {
      console.log(res);
      setInstData([...res])
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
        <div className="header">INSTITUTE LIST</div>
        <div className="container">
      {instData.map((x:any, i:any) => (
        <div className="item">
        <img  key={i} src={x.Image} alt='Logo link is not work'/>
        <p>Name: <span id='title'>{x.InstituteName}</span></p>
        <p>No Of Campus: <span id='title'>{x.NoOfCampus}</span></p>
        <p>Active/InActive: <span id='title'>{x.Active}</span></p>
      {/* <button onClick={() => clickCard(x.id)} className="btn1">BUY NOW</button> */}
        </div>
))}
        </div>
      </div>
    </div>
  )
}
