import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from './Store/Slices/Item';
import { Adduser } from './Store/Slices/User';

function App() {
  const dispatch = useDispatch();

 
const CurrentUsers = useSelector((state)=>state.User)

 console.log(CurrentUsers)
  return (
   <div>
      
      <button onClick={()=>{
       dispatch(Adduser("avdkkdsvkds"))
 
      }}>Increment</button>
          
     </div>

  )
}

export default App
