import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import home from "../images/home.png";
import book from "../images/book.png";
import document from "../images/documents.png";
import users from "../images/users.png";
import chat from "../images/chat-typing.png";
import logout from "../images/logout.png";

function StudentMenu({ status }) {
	console.log("lkasa", status);

	const activePage = s => {
		if (s == "home") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/student-home'>
						<img
							src={home}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue bg-white-blue'
						/>
					</Link>
					<Link to='/student/templates'>
						<img
							src={book}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/student/submission'>
						<img
							src={document}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>
					<img
						src={users}
						alt='users'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "template") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/student-home'>
						<img
							src={home}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/student/templates'>
						<img
							src={book}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl bg-white-blue'
						/>
					</Link>

					<Link to='/student/submission'>
						<img
							src={document}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>
					<img
						src={users}
						alt='users'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "submission") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/student-home'>
						<img
							src={home}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue'
						/>
					</Link>
					<Link to='/student/templates'>
						<img
							src={book}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/student/submission'>
						<img
							src={document}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue bg-white-blue'
						/>
					</Link>
					<img
						src={users}
						alt='users'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
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
					<Link to='/student-home'>
						<img
							src={home}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue'
						/>
					</Link>
					<Link to='/student/templates'>
						<img
							src={book}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/student/submission'>
						<img
							src={document}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue '
						/>
					</Link>
					<img
						src={users}
						alt='users'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
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

			{activePage(status)}
			{/* <div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
				<img
					src={home}
					alt='home'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={book}
					alt='book'
					className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
				/>
				<Link to='/student/templates'>
					<img
						src={document}
						alt='document'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
					/>
				</Link>
				<img
					src={users}
					alt='users'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={chat}
					alt='chat'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
			</div> */}
			<div className='cursor-pointer mt-36'>
				<img
					src={logout}
					alt='logout'
					onClick={() => {
						window.localStorage.clear();

						window.location.reload(false);
					}}
				/>
			</div>
		</div>
	);
}

export default StudentMenu;
