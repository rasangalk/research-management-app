import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/auth.actions";
import { Navigate } from "react-router";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "../helpers/axios";
import { authConstants } from "../actions/constants";

function RegisterPageOne() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    const user = {
      username,
      password,
    };
    console.log(user);
    dispatch(login(user));
  };

  if (auth.authenticate) {
    const user = window.localStorage.getItem("user");
    const userRole = JSON.parse(user).role;
    const userName = JSON.parse(user).username;

    if (userRole == "supervisor" && userName == "randika.m") {
      return <Navigate to={"/coSupervisor/topics"} />;
    } else if (userRole == "supervisor") {
      return <Navigate to={"/supervisor/topics"} />;
    } else if (userRole == "student") {
      return <Navigate to={"/student-home"} />;
    } else if (userRole == "admin") {
      return <Navigate to={"/admin/members"} />;
    } else if (userRole == "staff") {
      return <Navigate to={"/staff/staff-pannel"} />;
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      dispatch({ type: authConstants.LOGIN_REQUEST });

      const response = await axios.post('/auth/google/signin', {
        code,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (response.status === 400) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: response.data.error },
          });
        }
      }
    },
    flow: 'auth-code',
    onError: errorResponse => console.log(errorResponse),
  });

  return (
    <div>
      <h1 className="font-bold text-xl font-Nunito font-bold text-xl text-black mt-32 mb-4">
        Login
      </h1>
      <span
        className="text-lg text-slate-700 font-normal font-Nunito
             after:content-['*'] after:ml-0.5 after:text-red-500 "
      >
        Username
      </span>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="font-Nunito font-semibold mt-1 px-3 py-2 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
      />

      <span className="font-normal font-Nunito mt-4 text-lg text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
        Password
      </span>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="font-Nunito font-semibold mt-1 px-3 py-2 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
      />

      <button
        className="mt-5 font-normal text-lg mt-1 px-3 py-2 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active"
        onClick={() => {
          userLogin();
        }}
      >
        Login
      </button>
      <p className="font-Nunito mt-2">
        Don't have an account?
        <button className="font-Nunito font-bold ml-2 hover:underline hover:underline-offset-1">
          Register
        </button>
      </p>
      <p className="font-Nunito mt-2">
        <button className="font-Nunito font-bold hover:underline hover:underline-offset-1" onClick={() => googleLogin()}>
          Click Here to Sign In with Google
        </button>
      </p>
    </div>
  );
}

export default RegisterPageOne;
