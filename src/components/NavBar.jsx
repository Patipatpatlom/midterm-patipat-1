import React from "react";
import { NavLink } from "react-router";

function NavBar() {
    return (
        <div className="bg-amber-300 h-12 px-8 flex justify-center items-center shadow-md">
            <div className="flex gap-6 font-semibold">
            <NavLink to="/" className="hover:text-rose-300">Home</NavLink>
            <NavLink to="login" className="hover:text-rose-300">Login</NavLink>
            <NavLink to="register" className="hover:text-rose-300">Resgister</NavLink>
            <NavLink to="todolist" className="hover:text-rose-300">Todolist</NavLink>
            
            </div>
        </div>
    )

}

export default NavBar;