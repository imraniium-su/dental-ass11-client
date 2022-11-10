import Main from "../layout/Main/Main";
import AddService from "../pages/AddService/AddService";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import ServiceViesDetails from "../pages/Home/Services/ServiceViewDetails/ServiceViesDetails";
import Review from "../pages/Review/Review";
import Blog from "../pages/share/Blog/Blog";
import Footer from "../pages/share/Footer/Footer";
import Login from "../pages/share/login/Login";
import Signup from "../pages/share/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/servicesDetails/:id', element: <PrivateRoute><ServiceViesDetails></ServiceViesDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-dental-server.vercel.app/services/${params.id}`)

            },
            {
                path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/review', element: <PrivateRoute><Review></Review></PrivateRoute>
            }

        ]
    },
    { path: '*', element: 'This router is not found' }
]);

export default router;