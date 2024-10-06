import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import { getDashboardProfile } from "./helper/auth";

const dashboardLoader = async ({ request }) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If token is not available, redirect to login page
      return { redirect: '/' };
    }
    const response = await getDashboardProfile(token)
  
    if (response.success) {
      return { dashboardData: response.user };
    } else {
      throw new Response('Failed to load dashboard data', { status: 500 });
    }
  };


 const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      loader: dashboardLoader
    },
  ])

export default router