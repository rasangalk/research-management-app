import React from "react";
import { useGoogleLogin } from '@react-oauth/google';

function RegisterPageOne({ loginInfo, setLoginInfo, page, setPage }) {
	const googleLogin = useGoogleLogin({
		onSuccess: async ({ code }) => {
			setLoginInfo({ ...loginInfo, code: code });
			setPage(page + 1);
		},
		flow: 'auth-code',
		onError: errorResponse => console.log(errorResponse),
	});

	return (
		<div>
			<h1 className='font-bold text-xl font-Nunito font-bold text-xl text-black mt-14 mb-4'>
				Register
			</h1>
			<span className="font-normal font-Nunito mt-20 text-lg text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
				Username
			</span>
			<input
				type='text'
				name='username'
				value={loginInfo.username}
				onChange={e => setLoginInfo({ ...loginInfo, username: e.target.value })}
				className='font-Nunito font-semibold mt-1 px-3 py-2 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
			/>

			<span className="font-normal font-Nunito mt-4 text-lg text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
				Password
			</span>
			<input
				type='password'
				value={loginInfo.password}
				onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
				className='font-Nunito font-semibold mt-1 px-3 py-2 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'
			/>

			<span
				className="font-normal font-Nunito mt-4 text-lg text-slate-700
            after:content-['*'] after:ml-0.5 after:text-red-500 block">
				Re-Password
			</span>
			<input
				type='password'
				value={loginInfo.rePassword}
				onChange={e =>
					setLoginInfo({ ...loginInfo, rePassword: e.target.value })
				}
				className='font-Nunito font-semibold mt-1 px-3 py-2 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'
			/>

			<p className="font-Nunito mt-2">
				<button className="font-Nunito font-bold hover:underline hover:underline-offset-1" onClick={() => googleLogin()}>
					Or Click Here to Sign Up with Google
				</button>
			</p>
		</div>
	);
}

export default RegisterPageOne;
