import React from "react";
import logo from "../images/logo.png";
import user from "../images/user-circle.png";
import tikFile from "../images/file-tick.png";
import unorderlist from "../images/list-unordered.png";
import clipboard from "../images/clipboard-minus.png";
import chat from "../images/chat-typing.png";
import logout from "../images/logout.png";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function StaffMenu({ status }) {
	const activeTab = s => {
		if (s == "profile") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/staff/staff-profile'>
						<img
							src={user}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue bg-white-blue'
						/>
					</Link>

					<Link to='/staff/staff-pannel'>
						<img
							src={tikFile}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/staff/student-submissions'>
						<img
							src={unorderlist}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "main") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/staff/staff-profile'>
						<img
							src={user}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/staff/staff-pannel'>
						<img
							src={tikFile}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl bg-white-blue'
						/>
					</Link>
					<Link to='/staff/student-submissions'>
						<img
							src={unorderlist}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "list") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/staff/staff-profile'>
						<img
							src={user}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/staff/staff-pannel'>
						<img
							src={tikFile}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>
					<Link to='/staff/student-submissions'>
						<img
							src={unorderlist}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/staff/staff-profile'>
						<img
							src={user}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/staff/staff-pannel'>
						<img
							src={tikFile}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>
					<Link to='/staff/student-submissions'>
						<img
							src={unorderlist}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		}
	};

	return (
		<div className='flex flex-col items-center w-[114px] bg-white h-screen rounded-tr-xl rounded-br-xl '>
			<div className='my-8 '>
				<img src={logo} alt='logo' />
			</div>
			{activeTab(status)}
			<div className='cursor-pointer mt-36'>
				<img
					src={logout}
					alt='logout'
					onClick={() => {
						confirmAlert({
							title: "Yes to Cancel",
							message: "Are you sure to logout?",
							buttons: [
								{
									label: "Yes",
									onClick: () => {
										window.localStorage.clear();
										window.location.reload(false);
									},
								},
								{
									label: "No",
								},
							],
						});
					}}
				/>
			</div>
		</div>
	);
}

export default StaffMenu;
