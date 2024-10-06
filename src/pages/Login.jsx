import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useNavigate } from 'react-router-dom';
import { login } from '../helper/auth';
import AuthContext from '../Context/AuthProvider';

const Login = () => {
  const navigate = useNavigate()
  const { loginHook } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true)
      // Mock login process
      console.log('email; ', email)
      const response = await login({ email, password })

      if (response.success) {
        loginHook(response.token);
        navigate('/dashboard');
      } else {
        alert('Login failed ' + response.message);
      }
    } catch (error) {
      alert('Login failed ' + error.message);
    } finally {
      setLoading(false)
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-center">Log In</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border-none rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border-none rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleClickShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm">
              Keep me signed in
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white font-medium"
            >
              {loading ? 'Loging in...' : 'Log In'}
            </button>
          </div>
        </form>

        {/* Link to navigate to the Sign-Up page */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
