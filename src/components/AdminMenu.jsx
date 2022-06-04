import React from "react";
import { Link } from "react-router-dom";
import Members from "../images/users.png";
import AddMember from "../images/user-plus.png";
import Groups from "../images/group-chat.png";
import Doc from "../images/text-document-alt.png";
import report from "../images/clipboard-minus.png";
import upload from "../images/upload.png";
import logout from "../images/logout.png";
import logo from "../images/logo.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function AdminMenu({ status }) {
	const activeTab = () => {
		if (status == "members") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue bg-white-blue'
						/>
					</Link>
					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>
				</div>
			);
		} else if (status == "groups") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='bg-white-blue cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
				</div>
			);
		} else if (status == "panels") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='bg-white-blue cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
				</div>
			);
		} else if (status == "templates") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='bg-white-blue cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
				</div>
			);
		} else if (status == "markings") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='bg-white-blue cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
				</div>
			);
		} else if (status == "submissions") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='bg-white-blue cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
				</div>
			);
		} else {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/admin/view-groups'>
						<img
							src={Groups}
							alt='home'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/panels'>
						<img
							src={AddMember}
							alt='book'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl '
						/>
					</Link>

					<Link to='/admin/members'>
						<img
							src={Members}
							alt='document'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/view-templates'>
						<img
							src={Doc}
							alt='users'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
					<Link to='/admin/marking-scheme'>
						<img
							src={report}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/admin/submissions'>
						<img
							src={upload}
							alt='chat'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>
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
			{/* <div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
				<img
					src={Groups}
					alt='home'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={AddMember}
					alt='book'
					className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
				/>

				<img
					src={Members}
					alt='document'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>

				<img
					src={Doc}
					alt='users'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={report}
					alt='chat'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={upload}
					alt='chat'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
			</div> */}
			<div className='cursor-pointer mt-36'>
				<img
					src={logout}
					alt='logout'
					onClick={() => {
						confirmAlert({
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

export default AdminMenu;
