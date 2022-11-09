import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllServices from "../../pages/AllServices/AllServices";
import Block from "../../pages/Block/Block";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import AddService from "../../pages/AddService/AddService";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import PriviteRoute from "../PriviteRoute";
import ReviewEdit from "../../pages/ReviewEdit/ReviewEdit";

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
                loader: ({params})=> fetch(`https://module-70-server.vercel.app/service/${params.id}`)
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
                path:'/addService',
                element:<PriviteRoute><AddService/></PriviteRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/block',
                element:<Block/>
            },
            {
                path:'/reviewEdit/:id',
                element:<ReviewEdit/>,
                loader: async ({params})=> fetch(`https://module-70-server.vercel.app/reviewEdit/${params.id}`)
            }
        ]
    }
])