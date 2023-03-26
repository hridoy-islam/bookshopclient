import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Books from "../pages/Books";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Admin from "../layouts/Admin";
import Dashboard from "../pages/admin/Dashboard";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import AllBooks from "../pages/admin/books/AllBooks";
import Authors from "../pages/admin/authors/Authors";
import EditBook from "../pages/admin/books/EditBook";
import EditAuthor from "../pages/admin/authors/EditAuthor";
import AllPublisher from "../pages/admin/publisher/AllPublisher";
import EditPublisher from "../pages/admin/publisher/EditPublisher";
import PrivateRoute from "./PrivateRoute";
import SingleBook from "../pages/SingleBook";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/books',
            element: <Books />
        },
        {
            path: '/books/:id',
            element: <SingleBook />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Signup />
        },
        {
            path: '/cart',
            element: <Cart />,
        },
        {
            path: '/checkout',
            element: <Checkout />
        },
        {
            path: '/contact',
            element: <Contact />,
        }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Admin /></PrivateRoute>,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />,
        },
        {
            path: '/dashboard/books',
            element: <AllBooks />
        },
        {
            path: '/dashboard/books/edit/:id',
            element: <EditBook />
        },
        {
            path: '/dashboard/authors',
            element: <Authors />
        },
        {
            path: '/dashboard/authors/edit/:id',
            element: <EditAuthor />
        },
        {
            path: '/dashboard/publisher',
            element: <AllPublisher />
        },
        {
            path: '/dashboard/publisher/edit/:id',
            element: <EditPublisher />
        },
    ],
  }
])

export default router;
