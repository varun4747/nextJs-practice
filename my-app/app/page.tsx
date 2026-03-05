'use client'
import Child from"../Components/Child";
import { useState } from "react";
export default function page(){
const [message,setMessage]=useState("");


  const handleChange=((info:string)=>{
    setMessage(info);
  })
  return(
    <>
    <div>
      <h3>messege from child : {message}</h3>
      <Child sendMessage={handleChange} />
    </div>
    </>
  );
}