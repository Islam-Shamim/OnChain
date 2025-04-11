import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Transactions from "../pages/Transactions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div className="text-5xl text-center mt-20">Oops! Something went wrong.</div>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/form',
                element:<Form></Form>
            },
            {
                path:'/asset',
                element:<Transactions></Transactions>
            }
        ]
    },
]);

export default router;