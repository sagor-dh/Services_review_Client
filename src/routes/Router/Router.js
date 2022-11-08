import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllServices from "../../pages/AllServices/AllServices";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import MyService from "../../pages/MyService/MyService";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import PriviteRoute from "../PriviteRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/allServices',
                element:<AllServices/>
            },
            {
                path:'/myreview',
                element:<PriviteRoute><MyReview/></PriviteRoute>
            },
            {
                path:'/myService',
                element:<PriviteRoute><MyService/></PriviteRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])