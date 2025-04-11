import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div className="">Oops! Something went wrong.</div>,
        children:[
            {
                path:'/',
                element: <div>This is home.</div>,
            }
        ]
    },
]);

export default router;