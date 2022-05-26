import React from 'react'
import Menu from '../../../components/SupervisorMenu'
import Container from '../../../components/SupervisorContainer'

function AssignedTopicDetails() {
  return (
    <div>
      <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
        <div className=''>
          <Menu />
        </div>
        <div className='col-span-11 mx-auto my-auto '>
          <div className='relative'>
            <Container title='Topics' width='w-[68rem] h-[24.9rem]' />
            <div className='absolute top-[10rem] left-[7rem]'>
              <div className=' grid grid-cols-2 w-[60rem]'>
                <div className='flex flex-col gap-8'>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Group ID:
                    </p>
                    <p className=' font-bold text-base mb-2'>RE_GR24</p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Topic:
                    </p>
                    <p className='capitalize font-bold text-base mb-8'>
                      Blockchain based smart contracts and its applications
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-8'>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Interest:
                    </p>
                    <p className='capitalize font-bold text-base'>
                      Distributed Systems
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className='capitalize text-base text-slate-700 text-sm mb-1 mt-4'>
                  Comment:
                </p>
                <p className='capitalize font-semibold text-sm mb-8 col-span-2'>
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
  )
}

export default AssignedTopicDetails
