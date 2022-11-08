import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
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
            }
        ]
    }
])