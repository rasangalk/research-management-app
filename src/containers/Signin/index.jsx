import React, { useState } from "react";
import RegisterPageOne from "../../components/RegisterPageOne";
import LoginPage from "../../components/LoginPage";
import LayoutRight from "../../components/LayoutRight";
const Signup = (props) => {
  return (
    <div className="grid grid-cols-2 h-screen lg:grid-cols-2 sm:grid-cols-1 sm:gap-4">
      <div className="h-full">
        <div className="ml-32 mr-8">
          <LoginPage />
        </div>
      </div>
      <LayoutRight />
    </div>
  );
};

export default Signup;
