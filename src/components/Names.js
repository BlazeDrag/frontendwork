import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Names(props) {
    const [listofnames, setlistofnames] = useState()
    let i=0
    useEffect(()=>{
      if(props.name){
     axios.post(`${process.env.REACT_APP_URL}/names`,{"data":props.name}).then((res)=>{
 setlistofnames(res.data)
    })}
    },[])
  return (
    <div>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Sl No.</th>
      <th scope="col">Name</th>
      <th scope="col">Its</th>
      <th scope="col">Group</th>
    </tr>
  </thead>
  <tbody>
  {listofnames&&listofnames.map((element)=>{
 i=i+1
    return(
        <tr>
      <th scope="row">{i}</th>
      <td>{element.name}</td>
      <td>{element.its}</td>
      <td>{element.group}</td>
    </tr>)
  })}
    </tbody>
    </table>
    </div>
  )
}
