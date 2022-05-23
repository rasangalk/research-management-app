import React from "react";
import Menu from "../../../components/StudentMenu";
import Container from "../../../components/StudentContainer";

function FeedbackAccepted() {
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeedbackAccepted;
