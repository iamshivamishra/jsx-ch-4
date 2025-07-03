import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import College from './College.jsx'
import Student from './Student.jsx'

function App() {
  const [count, setCount] = useState(0)

    let name = "shivam mishra";
    let age = 19
    let email = "alwayshivamishra@gmail.com";

    let userobj1={
      name: "shivam",
      age: 19,
      email: "alwayshivamishra@gmail.com"
    }

    let userobj2={
      name: "Peter",
      age: 29,
      email: "peter@gmail.com"
    }
    let userobj3={
      name: "kunal",
      age: 19,
      email: "kunal@gmail.com"
    }

    let collegeNames = ['MIT','IIT','NIT','SIBT','DTU','NSUT','IET','DU']

    let [student,setStudent] = useState("")
  return (
    <>
     {/* 
     =====> Props in React js
     1) What is props?
     2) Make Component
     3) Pass data bewteen components
      .var, object, array  
     4) Receive and Display Data
     5) Pass data in component with click
     6) interview Question
     */}

      {student && <Student name = {student}/>}
      <button onClick={()=>setStudent("Sahil")}>Update Student name</button>

      <College collegeNames = {collegeNames[0]}/>
      <College collegeNames = {collegeNames[1]}/>
      <College collegeNames = {collegeNames[2]}/>
      <College collegeNames = {collegeNames[3]}/>
     
     <div>
      <h1>Props in React js</h1>
      {/* <User name ={name} age = {age} email = {email}/> */}
      <User user = {userobj1}/>
      <User user = {userobj2}/>
      <User user = {userobj3}/>
     </div>
    </>
  )
}

export default App
