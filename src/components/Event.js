import Axios from 'axios'
import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import "./main.css"
// import {Dotenv} from 'dotenv'

import bgkol from "./bgkol.png"
export default function Event(props) {
  const navigate=useNavigate()
  // Dotenv.config()
    const [event, setevent] = useState('')
    const [code, setcode] = useState('')
    const [err, seterr] = useState('')
    // const [agree, setagree] = useState()
    const eventup=(e)=>{
        const{name,value}=e.target
        setevent(value)
    }
    
    const sendevent=async()=>{
      console.log(process.env.REACT_APP_PASSCODE)
      if(code===process.env.REACT_APP_PASSCODE){
       
       props.setDefined(1)
       console.log(event)
        // axios.post( '',event)
        // $.ajax({
        //   type:"POST",
        //   url:"http://localhost:4001/event",
        //   dataType:'json',
        //   data:x,
        //   headers:{
        //     token:""
        //   }
        // }).catch((err)=>{
        //   console.log(err)
        // })
        Axios.post(`${process.env.REACT_APP_URL}/event`,{"event":event}).then((res)=>{
          console.log(res.data)
        }).catch((err)=>{console.log(err)})
        navigate('./login')
       seterr('')
      }
        else{
       seterr(`<h5 className='error'>Invalid Admin Code!!</h5>`)
        }
        setevent('')
    }
    const codeup=(cd)=>{
     const {name,value}=cd.target
     setcode(value)
    }
  return (
    <div className='flex2'>
    <div className='flex'>
    <img  src={bgkol} alt=""></img>
    <div><input value ={code} type='password' onChange={codeup} placeholder="Enter Admin Code"/></div>
    <div className='error' dangerouslySetInnerHTML={{__html:err}}></div>
    <input value={event} onChange={eventup} placeholder="Enter the Event Name"/>
    <button onClick={sendevent} >Create Event</button>
    </div>
    </div>
  )
}
