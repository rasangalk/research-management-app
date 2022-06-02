import React from "react";
import back from "../images/arrow-left.png";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function StudentContainer({ title, width }) {
	//   const history = useHistory();
	let navigate = useNavigate();
	return (
		<div className='bg-white drop-shadow-xl w-[74rem] h-[37rem] rounded-xl '>
			<div className='flex flex-row items-center pt-4 pl-10'>
				<img
					src={back}
					onClick={() => navigate(-1)}
					className='cursor-pointer mr-2'
				/>
				<h2 className='capitalize text-xl font-bold ml-5 pt-2'>{title}</h2>
			</div>
			<div
				className={`border-2 border-[#E2E8F0] ${width}  rounded-xl mt-6 mx-auto`}></div>
		</div>
	);
}

export default StudentContainer;
