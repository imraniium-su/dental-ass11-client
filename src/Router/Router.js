import Main from "../layout/Main/Main";
import AddService from "../pages/AddService/AddService";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import ServiceViesDetails from "../pages/Home/Services/ServiceViewDetails/ServiceViesDetails";
import Blog from "../pages/share/Blog/Blog";
import Footer from "../pages/share/Footer/Footer";
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
            },
            {
                path: '/servicesDetails/:id', element: <ServiceViesDetails></ServiceViesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/addservice', element: <AddService></AddService>
            },

        ]
    }
]);

export default router;