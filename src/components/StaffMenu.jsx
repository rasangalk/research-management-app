import React from "react";
import logo from "../images/logo.png";
import user from "../images/user-circle.png";
import tikFile from "../images/file-tick.png";
import unorderlist from "../images/list-unordered.png";
import clipboard from "../images/clipboard-minus.png";
import chat from "../images/chat-typing.png";
import logout from "../images/logout.png";

function StaffMenu() {
	return (
		<div className='flex flex-col items-center w-[114px] bg-white h-screen rounded-tr-xl rounded-br-xl '>
			<div className='my-8 '>
				<img src={logo} alt='logo' />
			</div>
			<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
				<img
					src={user}
					alt='profile'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={tikFile}
					alt='file'
					className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
				/>
				<img
					src={unorderlist}
					alt='list'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={clipboard}
					alt='report'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={chat}
					alt='chat'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
			</div>
			<div className='cursor-pointer mt-36'>
				<img src={logout} alt='logout' />
			</div>
		</div>
	);
}

export default StaffMenu;
