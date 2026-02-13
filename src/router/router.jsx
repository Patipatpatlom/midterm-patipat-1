import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todolist from "../pages/Todolist";



const router = createBrowserRouter ([
    {
        path:"/",
        element: <MainLayout />,
        children:[
            {
                index:true,
                element:<Home />,
            },
            {
                path:"register",
                element:<Register />,
            },
            {
                 path:"login",
                element:<Login />,
            },
            {
                 path:"todolist",
                element:<Todolist />,
            },
            
        ]
    },
]);

export default router;