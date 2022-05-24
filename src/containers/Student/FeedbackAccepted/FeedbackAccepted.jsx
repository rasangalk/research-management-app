import React, { useState } from "react";
import Menu from "../../../components/StudentMenu";
import Container from "../../../components/StudentContainer";

function FeedbackAccepted() {
	const [reject, setReject] = useState(false);

	const showBtn = () => {
		if (reject === true) {
			return (
				<div className=''>
					<button className='font-bold capitalize mt-[1.5rem] text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right mr-[5.5rem] text-sm'>
						re-submit topic
					</button>
				</div>
			);
		} else {
			return <div className=''></div>;
		}
	};

	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div class='relative'>
						<Container title='feedback' width='w-[68rem]' />
						<div class='absolute left-[5rem] top-[9rem]'>
							<div className='flex flex-col gap-8'>
								<div className=''>
									<p className='capitalize'>status:</p>
									<p className='capitalize font-bold text-lg'>topic accepted</p>
								</div>
								<div className=''>
									<p className='capitalize'>date:</p>
									<p className='capitalize font-bold text-lg'>22/04/2022</p>
								</div>
								<div className=''>
									<p className='capitalize'>evaluated by:</p>
									<p className='capitalize font-bold text-lg'>
										dr. darshana kasthuriratne
									</p>
								</div>
								<div className=''>
									<p className='capitalize'>comment:</p>
									<p className='capitalize font-bold text-lg pr-24'>
										Your topic has been accepted. continue the project with the
										members. Contact the supervisor when it is requiered. Thank
										you!
									</p>
								</div>
							</div>
							{showBtn()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeedbackAccepted;
