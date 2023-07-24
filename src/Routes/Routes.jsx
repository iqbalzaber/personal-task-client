import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../components/Admission/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Colleges from "../Pages/AllColleges/Colleges";
import User from "../Pages/User/User";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children:[
        {
            path: '/',
            element:<Home />
        },
        {
            path: '/register',
            element:<Register />
        },
        {
            path: '/login',
            element:< Login/>
        },
        {
            path: '/details/:id',
            element:< CollegeDetails/>,
            loader: ({ params }) =>
            fetch(`http://localhost:5000/admission/${params.id}`),

        },
        
        {
            path: '/admission',
            element:< Admission/>
        },
        {
            path: '/colleges',
            element:< Colleges/>
        },
        {
            path: '/user',
            element:< User/>
        },
        {
            path: '/my-college',
            element:< MyCollege/>,
            
        },
        {
            path: '/admission-form/:id',
            element:< AdmissionForm/>,
            loader: ({ params }) =>
            fetch(`http://localhost:5000/admission/${params.id}`),
        },
       
      ]
    },
  ]);
  export default router;