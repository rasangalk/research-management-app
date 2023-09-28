import React, { useState } from "react";
import * as Yup from "yup"; // Import Yup for validation

function RegisterPageOne({ loginInfo, setLoginInfo, setIsValid }) {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "User name must be at least 3 characters long"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    rePassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleBlur = async () => {
    try {
      await validationSchema.validate(loginInfo, { abortEarly: false });
      setValidationErrors({});
      setIsValid(true);
    } catch (error) {
      const errors = {};
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
      setIsValid(false);
    }
  };

  return (
    <div>
      <h1 className='font-bold text-xl font-Nunito font-bold text-xl text-black mt-14 mb-4'>
        Register
      </h1>
      {/* Username */}
      <span className="font-normal font-Nunito mt-20 text-lg text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Username
      </span>
      <input
        type='text'
        name='username'
        value={loginInfo.username}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`font-Nunito font-semibold mt-1 px-3 py-2 bg-white border ${
          validationErrors.username
            ? "border-red-500" // Add red border for validation error
            : "border-slate-300"
        } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1`}
      />
      {validationErrors.username && (
        <div className='text-red-500'>{validationErrors.username}</div>
      )}

      {/* Password */}
      <span className="font-normal font-Nunito mt-4 text-lg text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Password
      </span>
      <input
        type='password'
        name='password'
        value={loginInfo.password}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`font-Nunito font-semibold mt-1 px-3 py-2 bg-white border ${
          validationErrors.password
            ? "border-red-500" // Add red border for validation error
            : "border-slate-300"
        } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1`}
      />
      {validationErrors.password && (
        <div className='text-red-500'>{validationErrors.password}</div>
      )}

      {/* Re-Password */}
      <span className="font-normal font-Nunito mt-4 text-lg text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Re-Password
      </span>
      <input
        type='password'
        name='rePassword'
        value={loginInfo.rePassword}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`font-Nunito font-semibold mt-1 px-3 py-2 bg-white border ${
          validationErrors.rePassword
            ? "border-red-500" // Add red border for validation error
            : "border-slate-300"
        } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1`}
      />
      {validationErrors.rePassword && (
        <div className='text-red-500'>{validationErrors.rePassword}</div>
      )}
    </div>
  );
}

export default RegisterPageOne;
