import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Form from "../pages/Form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div className="">Oops! Something went wrong.</div>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/form',
                element:<Form></Form>
            }
        ]
    },
]);

export default router;