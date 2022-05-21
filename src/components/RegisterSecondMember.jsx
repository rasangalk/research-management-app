import React from "react";

function RegisterSecondMember({
  secondMemberFormData,
  setSecondMemberFormData,
}) {
  return (
    <div>
      <h1 className="font-bold text-xl font-Nunito font-bold text-xl text-black mt-14 mb-4">
        Member Details
      </h1>
      <span className="text-base text-slate-700 font-normal font-Nunito after:content-['*'] after:ml-0.5 after:text-red-500 ">
        Name with Initials
      </span>
      <input
        type="text"
        name="username"
        value={secondMemberFormData.nameWithInitials}
        onChange={(e) =>
          setSecondMemberFormData({
            ...secondMemberFormData,
            nameWithInitials: e.target.value,
          })
        }
        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
      />

      <span className="font-normal font-Nunito mt-3 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Student ID
      </span>
      <input
        type="text"
        name="studentID"
        value={secondMemberFormData.studentId}
        onChange={(e) =>
          setSecondMemberFormData({
            ...secondMemberFormData,
            studentId: e.target.value,
          })
        }
        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
      />

      <span className="font-normal font-Nunito mt-3 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Phone
      </span>
      <input
        type="tel"
        name="phone"
        value={secondMemberFormData.phone}
        onChange={(e) =>
          setSecondMemberFormData({
            ...secondMemberFormData,
            phone: e.target.value,
          })
        }
        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
      />

      <span className="font-normal font-Nunito mt-3 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Email
      </span>
      <input
        type="email"
        name="email"
        value={secondMemberFormData.email}
        onChange={(e) =>
          setSecondMemberFormData({
            ...secondMemberFormData,
            email: e.target.value,
          })
        }
        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
      />

      <span className="font-normal font-Nunito mt-3 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Specialization
      </span>
      <select
        name="specialization"
        value={secondMemberFormData.specialization}
        onChange={(e) =>
          setSecondMemberFormData({
            ...secondMemberFormData,
            specialization: e.target.value,
          })
        }
        className="font-Nunito font-semibold hover:bg-sky-700 mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
      >
        <option value="" disabled selected hidden>
          Select your specialization
        </option>
        <option value="SE">SE</option>
        <option value="CSNE">CSNE</option>
        <option value="DS">DS</option>
        <option value="ISE">ISE</option>
        <option value="ISE">CS</option>
      </select>
    </div>
  );
}

export default RegisterSecondMember;
