import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Login() {
    const [user, setuser] = useState('')
    const [add, setadd] = useState('')
    const [error, seterror] = useState()
    const  send=()=>{
    const its=user
    
    axios.post(`${process.env.REACT_APP_URL}/info`,{"its":its})
    .then((res)=>
    {
      if(res.data){
     seterror()
    setadd(add+`<h6>${res.data}</h6>`)
   }
   
   else{
    console.log('not found')
  seterror('<h8>User Not Found</h8>')
   }
  }
    )
    setuser('')
    }
    const handlechange=(e)=>{
        const {name,value}=e.target
        setuser(value)
    }
  return (
    <div>
      <input name='it' type='text' id='itsid' value={user} onChange={handlechange}/>
      <button onClick={send}>Enter</button>
      <div dangerouslySetInnerHTML={{__html:add}}></div>
      {error&&<div className='error' dangerouslySetInnerHTML={{__html:error}}></div>}
    </div>
  )
}
