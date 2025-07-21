import React, { useState } from 'react'

function Q1() {

    const [count,setCount] = useState(0);

      return (
    <div className='main'>
        {/* details */}
      <div
    style={{
        fontSize:'10px',
        textAlign:'left'
    }}> 
      <h1>Name: Krish Dave</h1>
      <h1>Enrollment No: 015</h1>
      <h1>Course: Data Management and Visual Insight</h1>
      <h1>Semester: 4</h1>
      <h1>Subject: Web Application Framework Development</h1>
      <h1>Date: 16th April, 2025</h1>
      <h1>Type:Mid-term Examination</h1>
      <h1 style={{textDecoration:'underline'}}>Q1:Increase and Decrease</h1>
    </div>

<div style={{
  backgroundColor:'orangered',
  display:'flex',
  justifyContent:'center',
  margin:'50px',
  padding:'110px'
}}>

    <h2
    style={{
      textAlign:'center'
    }}>Increment-Decrement: </h2>

    <input
    style={{
      fontSize:'20px'
    }}
    type="text"
    value={count}
    placeholder='Enter a number'
    onChange={(e)=>setCount(e.target.value)}
    
    />

    <br />
    <br />
    <button 
    style={{
      backgroundColor:'green',
      color:'white',
      cursor:'pointer',
      fontSize:'20px'
    }}
    onClick={()=>setCount((count)=>count + 1)}>Increment</button>
    <br />
    <br />
    <button 
        style={{
          backgroundColor:'red',
          color:'white',
          cursor:'pointer',
          fontSize:'20px'
        }}
    onClick={()=>setCount((count)=>count - 1)}>Decrement</button>


</div>
    </div>
  )
}

export default Q1;
