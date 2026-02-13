import React from "react";
import useUserStore from "../Stores/useStore";
import { useEffect,useState } from "react";
import axios from "axios";

function Todolist() {
  const token = useUserStore((state) => state.token)
   console.log(token) 

 useEffect(() => console.log('token', token, [token]))
  
  const [todo,setTodo] = useState([])
  
  useEffect(() => {
    if (token) {
      fetchUser()
    }
  }, [])
  async function fetchUser() {
    try {
      const res = await axios.get("https://drive-accessible-pictures-send.trycloudflare.com/todosv2",{
        
        headers: {
          Authorization: `Bearer ${token}`
        }

      })
     
      setTodo(res.data)
      console.log("res", res.data)
    } catch (error) {
      console.log(error)
    }
  }

      
  return (
    <div className=" bg-red-500 p-2 flex justify-center items-center flex-col">
      <h1 className="text-black flex justify-center text-center  text-3xl font-semibold">
        ToDoList
      </h1>
      <div className="bg-white rounded-md ">

      <form>
      <input className="border p-0.5 px-2 border-gray-500 rounded-md" id="task" placeholder="Add your text" />
      <button 
      className="bg-amber-300 border p-0.5 px-2 rounded-md cursor-pointer hover:bg-rose-400 transition-all duration-150">
          Add
        </button>
        </form>
       
      </div>

      <div className=" p-3 flex justify-center items-center flex-col "> 
      {todo.map((item)=>(
        <div>
        <input type="checkbox"></input> 
        <label key={item.id}>{item.content}</label>
        <button className="bg-amber-300  m-1 border p-0.5 px-2 rounded-md cursor-pointer hover:bg-rose-400 transition-all duration-150">Edit</button>
        
        </div>
  
      ))}
    </div>
    </div>
  );

}

export default Todolist;
