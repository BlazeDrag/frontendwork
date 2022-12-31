import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Loading from './Loading'
export default function Lists(props) {
    const [collec, setcollec] = useState([])
    // const [allow, setallow] = useState(0)
    const navigate=useNavigate()
    let i=0
 useEffect(()=>{
props.load(1)
     axios.post(`${process.env.REACT_APP_URL}/forlist/`,{}).then((res)=>{
     console.log(res)   
     setcollec(res.data)})
    props.load(0)
 },[])
  // const del=(param)=>{
  //   axios.post('http://localhost:4000/forlist/',{"data":param}).then((res)=>{
  //       // console.log(res)   
  //       setcollec(res.data)
  //     })
  // }
  const all=(param)=>{
    props.collecname(param)
    navigate('/names')
  }
  return (
    <div>
     {/* {allow===1?<Loading/>:""} */}
    <table className="table table-sm table-warning">
  <thead>
    <tr>
      <th scope="col">Sl No.</th>
      <th scope="col">Event Name</th>
      <th scope="col">Date</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
  {collec&&collec.map((name)=>{
    
    if(name!="lists"){
      i=i+1
    return(
    <tr>
      <th scope="row">{i}</th>
      <td><Link >{name.event}</Link></td>
      <td>{name.date}</td>
      <td><button onClick={()=>{all(name.event)}}>See List</button></td>
    </tr>
    ) 
    }return('')}) 
    
     }
    </tbody>
    </table>
    </div>
  )
}
