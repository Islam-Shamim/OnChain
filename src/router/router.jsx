import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
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