import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllServices from "../../pages/AllServices/AllServices";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Home/Services/Services";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";

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
            }
        ]
    }
])