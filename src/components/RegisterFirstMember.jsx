import React, { useState } from "react";
import * as Yup from "yup"; // Import Yup for validation

function RegisterFirstMember({ firstMemberFormData, setFirstMemberFormData }) {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    nameWithInitials: Yup.string().required("Name with initials is required"),
    studentId: Yup.string()
      .required("Student ID is required")
      .length(10, "Student ID must be exactly 10 characters long"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only numeric digits")
      .length(10, "Phone number must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    specialization: Yup.string().required("Specialization is required"),
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstMemberFormData({ ...firstMemberFormData, [name]: value });
  };

  const handleBlur = async () => {
    try {
      await validationSchema.validate(firstMemberFormData, {
        abortEarly: false,
      });
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
        Member Details
      </h1>
      {/* Name with Initials */}
      <div className='mb-3'>
        <span className='text-base text-slate-700 font-normal font-Nunito after:content-["*"] after:ml-0.5 after:text-red-500 '>
          Name with Initials
        </span>
        <input
          type='text'
          name='nameWithInitials'
          value={firstMemberFormData?.nameWithInitials}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`font-Nunito font-semibold mt-1 px-3 py-1 bg-white border ${
            validationErrors.nameWithInitials
              ? "border-red-500"
              : "border-slate-300"
          } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1`}
        />
        {validationErrors.nameWithInitials && (
          <div className='text-red-500'>
            {validationErrors.nameWithInitials}
          </div>
        )}
      </div>

      {/* Student ID */}
      <div className='mb-3'>
        <span className='text-base text-slate-700 font-normal font-Nunito after:content-["*"] after:ml-0.5 after:text-red-500 '>
          Student ID
        </span>
        <input
          type='text'
          name='studentId'
          value={firstMemberFormData?.studentId}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`font-Nunito font-semibold mt-1 px-3 py-1 bg-white border ${
            validationErrors.studentId ? "border-red-500" : "border-slate-300"
          } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1`}
        />
        {validationErrors.studentId && (
          <div className='text-red-500'>{validationErrors.studentId}</div>
        )}
      </div>

      {/* Phone */}
      <div className='mb-3'>
        <span className='text-base text-slate-700 font-normal font-Nunito after:content-["*"] after:ml-0.5 after:text-red-500 '>
          Phone
        </span>
        <input
          type='tel'
          name='phone'
          value={firstMemberFormData?.phone}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`font-Nunito font-semibold mt-1 px-3 py-1 bg-white border ${
            validationErrors.phone ? "border-red-500" : "border-slate-300"
          } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1`}
        />
        {validationErrors.phone && (
          <div className='text-red-500'>{validationErrors.phone}</div>
        )}
      </div>

      {/* Email */}
      <div className='mb-3'>
        <span className='text-base text-slate-700 font-normal font-Nunito after:content-["*"] after:ml-0.5 after:text-red-500 '>
          Email
        </span>
        <input
          type='email'
          name='email'
          value={firstMemberFormData?.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`font-Nunito font-semibold mt-1 px-3 py-1 bg-white border ${
            validationErrors.email ? "border-red-500" : "border-slate-300"
          } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1`}
        />
        {validationErrors.email && (
          <div className='text-red-500'>{validationErrors.email}</div>
        )}
      </div>

      {/* Specialization */}
      <div className='mb-3'>
        <span className='text-base text-slate-700 font-normal font-Nunito after:content-["*"] after:ml-0.5 after:text-red-500 '>
          Specialization
        </span>
        <select
          name='specialization'
          value={firstMemberFormData?.specialization}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`font-Nunito font-semibold hover:bg-sky-700 mt-1 px-3 py-1 bg-white border ${
            validationErrors.specialization
              ? "border-red-500"
              : "border-slate-300"
          } focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1`}
        >
          <option value='' disabled>
            Select your specialization
          </option>
          <option value='SE'>SE</option>
          <option value='CSNE'>CSNE</option>
          <option value='DS'>DS</option>
          <option value='ISE'>ISE</option>
          <option value='CS'>CS</option>
        </select>
        {validationErrors.specialization && (
          <div className='text-red-500'>{validationErrors.specialization}</div>
        )}
      </div>
    </div>
  );
}

export default RegisterFirstMember;
