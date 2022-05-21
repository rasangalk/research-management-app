import React from "react";
import SigninCover from "../../images/student.jpg";
import RegisterPageLeader from "../../components/RegisterPageLeader";
import LayoutRight from "../../components/LayoutRight";

const Signin = props => {
	return (
		<div className='grid grid-cols-2 h-screen lg:grid-cols-2 sm:grid-cols-1'>
			<div className='h-full'>
				<div className='ml-32 mr-8'>
					<RegisterPageLeader />
					<button className='mt-5 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active'>
						Next
					</button>
					<button className='mt-2 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active'>
						Previous
					</button>
				</div>
			</div>
			<LayoutRight />
		</div>
	);
};

export default Signin;
