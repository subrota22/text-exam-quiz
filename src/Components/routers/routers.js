import { createBrowserRouter, NavLink } from "react-router-dom"
import MainLayout from "../../MainLayout/MainLayout"
import ChemistryExam from "../pages/ChemistryExam/ChemistryExam"
import Home from "../pages/Home/Home"
import MathExam from "../pages/MathExam/MathExam"
import PhysicsExam from "../pages/PhysicsExam/PhysicsExam"

export const routers = createBrowserRouter([
    {
        errorElement: <h2 className="errorElement">You have an error  </h2>,  children:[
            {
                path:"/" , element:<MainLayout></MainLayout> , children:[
        
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/math", element: <MathExam></MathExam>
            },
            {
                path: "/chemistry", element: <ChemistryExam></ChemistryExam>
            },
            {
                path: "/physics", element: <PhysicsExam></PhysicsExam>
            },
            {
                path: "*", element: <>
                 <div className="errorElement">
                 <h2> Page not found !! </h2>
                <h2>Go back home <NavLink to="/">Click here</NavLink></h2>
                
                 </div>
                </>
            },

        ]
     },
    ]   }
  
])