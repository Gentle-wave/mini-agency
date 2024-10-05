// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleClickShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const handleSubmit = () => {
//     // Handle sign-up logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 shadow-md rounded-lg">
//         <h2 className="text-3xl font-semibold text-center">Sign Up</h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border-none rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 required
//                 className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border-none rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               />
//               <button
//                 type="button"
//                 onClick={handleClickShowPassword}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>

//           <div>
//             <label htmlFor="confirm-password" className="block text-sm font-medium">
//               Confirm Password
//             </label>
//             <div className="relative">
//               <input
//                 id="confirm-password"
//                 name="confirm-password"
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 required
//                 className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border-none rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               />
//               <button
//                 type="button"
//                 onClick={handleClickShowConfirmPassword}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
//               >
//                 {showConfirmPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white font-medium"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>

//         {/* Link to navigate to the Login page */}
//         <div className="mt-4 text-center">
//           <p className="text-sm">
//             Already have an account?{' '}
//             <Link to="/" className="text-indigo-400 hover:text-indigo-300">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [role, setRole] = useState('agency');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting the form
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="agency">Agency</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="w-full p-2 bg-indigo-600 text-white rounded mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?{' '}
          <Link to="/" className="text-indigo-400">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
