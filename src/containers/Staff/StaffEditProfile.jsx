import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/StaffMenu";
import Container from "../../components/StaffContainer";
import { useNavigate } from "react-router-dom";
import { getMember, UpdateMemberDetails } from "../../actions/members.action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function StaffEditProfile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [sliitId, setSliitId] = useState("");
	//   const [sliitId, setUsername] = useState('');
	const [fullName, setFullName] = useState("");

	//   const auth = useSelector((state) => state.auth);
	const user = window.localStorage.getItem("user");
	const memberId = JSON.parse(user)._id;
	const member = useSelector(state => state.members);

	useEffect(() => {
		dispatch(getMember(memberId));
		setFullName(member.member.fullName);
		setUsername(member.member.username);
		setPhone(member.member.phone);
		setEmail(member.member.email);
		setSliitId(member.member.sliitId);
	}, []);

	const updateMember = () => {
		const mem = {
			memberId: member.member._id,
			fullName: fullName,
			username: username,
			email: email,
			phone: phone,
			sliit_id: sliitId,
		};
		dispatch(UpdateMemberDetails(mem));

		navigate("/staff/staff-profile");
	};

	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div className='relative'>
						<Container title='Edit Profile' width='w-[68rem] h-[24.9rem]' />
						<div className='absolute top-[10rem] left-[7rem]'>
							<div className='grid grid-cols-2 gap-16 w-[60rem]'>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										Username:
									</p>
									<input
										type='text'
										name='username'
										defaultValue={member.member.username}
										onChange={e => setUsername(e.target.value)}
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										phone:
									</p>
									<input
										type='number'
										defaultValue={member.member.phone}
										onChange={e => setPhone(e.target.value)}
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										name:
									</p>
									<input
										type='text'
										defaultValue={member.member.fullName}
										onChange={e => setFullName(e.target.value)}
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>

								<div className=''>
									<p className='uppercase text-slate-700 text-sm mb-1'>id:</p>
									<input
										type='text'
										defaultValue={member.member.sliit_id}
										onChange={e => setSliitId(e.target.value)}
										disabled
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										email:
									</p>
									<input
										type='email'
										defaultValue={member.member.email}
										onChange={e => setEmail(e.target.value)}
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
							</div>
							<div className=' mt-[4rem]  ml-[51rem] '>
								<div className='flex flex-row gap-4'>
									<button
										className='capitalize text-lg  px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right  text-sm'
										onClick={() => {
											navigate("/staff/staff-profile");
										}}>
										cancel
									</button>
									<button
										className='capitalize text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm'
										onClick={() => {
											confirmAlert({
												title: "Yes to Cancel",
												message: "Are you sure to update profile?.",
												buttons: [
													{
														label: "Yes",
														onClick: () => {
															updateMember();
														},
													},
													{
														label: "No",
													},
												],
											});
										}}>
										update
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StaffEditProfile;
