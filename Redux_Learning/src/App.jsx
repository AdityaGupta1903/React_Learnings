import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from './Store/Slices/Item';
import { Adduser } from './Store/Slices/User';

function App() {
  
 const CurrentUser = useSelector((state)=>state.User);
 console.log(CurrentUser);

 const CurrentItem = useSelector((state)=>state.Item);
 console.log(CurrentItem);
 
  return (
   <div>
       
      <button onClick={()=>{
       
      }}>Increment</button>

     </div>

  )
}

export default App
