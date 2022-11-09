import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import Blog from "../pages/share/Blog/Blog";
import Login from "../pages/share/login/Login";
import Signup from "../pages/share/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/services', element: <Services></Services>

            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
            {
                path: '/blog', element: <Blog></Blog>
            }
        ]
    }
]);

export default router;