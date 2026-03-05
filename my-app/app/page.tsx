'use client'
import Child from"../Components/Child";
import { useState } from "react";


export default function page(){
const [message,setMessage]=useState({
      id: 1,
      name: "Rahul Mehta",
      position: "Software Engineer",
      salary: 60000,
      createdAt: "2025-12-09T10:00:00Z"
    });
  return(
    <>
    <div>
    <Child users={message}/>
    </div>
    </>
  );
}