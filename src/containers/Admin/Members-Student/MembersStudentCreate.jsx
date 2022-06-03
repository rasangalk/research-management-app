import React, { useState } from "react";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/StudentContainer";
import { useDispatch } from "react-redux";
import { memberReg } from "../../../actions/user.actions";
import { useNavigate } from "react-router-dom";

function MembersCreate() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [username, setUsername] = useState("");
	const [sliit_id, setSliitId] = useState("");
	const [password, setPassword] = useState("");
	const [re_hash_password, setRePassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const memberRegister = e => {
		// e.preventDefault();
		const user = {
			fullName,
			email,
			phone,
			username,
			sliit_id,
			password,
			re_hash_password,
		};
		console.log(user);
		dispatch(memberReg(user));
		navigate("/admin/members");
	};
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div className='relative'>
						<Container title='members' width='w-[68rem] h-[10rem]' />
						<div className='absolute top-[10rem] left-[7rem]'>
							<div className=' grid grid-cols-2  w-[60rem] '>
								<div className='flex flex-col gap-12'>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Name
										</p>
										<input
											type='text'
											name='Name'
											value={fullName}
											onChange={e => setFullName(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Email
										</p>
										<input
											type='text'
											name='Email'
											value={email}
											onChange={e => setEmail(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Username
										</p>
										<input
											type='text'
											name='Username'
											value={username}
											onChange={e => setUsername(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Re-Password
										</p>
										<input
											type='Password'
											name='Re-Password'
											value={re_hash_password}
											onChange={e => setRePassword(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
								</div>
								<div className='flex flex-col gap-12'>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											ID number
										</p>
										<input
											type='text'
											name='ID number'
											value={sliit_id}
											onChange={e => setSliitId(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Phone
										</p>
										<input
											type='text'
											name='Phone'
											value={phone}
											onChange={e => setPhone(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Password
										</p>
										<input
											type='Password'
											name='Password'
											value={password}
											onChange={e => setPassword(e.target.value)}
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
										/>
									</div>
								</div>
							</div>
							<div className='mt-[0.2rem]  ml-[58.3rem] '>
								<button
									className=' text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm'
									onClick={() => {
										memberRegister();
									}}>
									Create
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MembersCreate;
