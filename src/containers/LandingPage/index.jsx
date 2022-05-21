import React from "react";
import LayoutRight from "../../components/LayoutRight";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LandingPage() {
	return (
		<div className='grid grid-cols-2 h-screen lg:grid-cols-2 sm:grid-cols-1'>
			<div className='h-full'>
				<div className='ml-32 mr-8'>
					<Link to='/student/signup'>
						<button className='mt-5 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active'>
							Student
						</button>
					</Link>

					<Link to='/supervisor/signup'>
						<button className='mt-2 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active'>
							Supervisor
						</button>
					</Link>

					<Link to='/co-supervisor/signup'>
						<button className='mt-2 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active'>
							Co-Supervisor
						</button>
					</Link>

					<Link to='/staff/signup'>
						<button className='mt-2 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active'>
							Staff
						</button>
					</Link>
				</div>
			</div>
			<LayoutRight />
		</div>
	);
}

export default LandingPage;
