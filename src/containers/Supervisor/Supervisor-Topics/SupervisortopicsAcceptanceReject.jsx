import React from 'react'
import Menu from '../../../components/SupervisorMenu'
import Container from '../../../components/SupervisorContainer'

function SupervisortopicsAcceptanceReject() {
  return (
    <div>
      <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
        <div className=''>
          <Menu />
        </div>
        <div className='col-span-11 mx-auto my-auto '>
          <div className='relative'>
            <Container title='Profile' width='w-[68rem] h-[24.9rem]' />
            <div className='absolute top-[10rem] left-[7rem]'>
              <div className=' grid grid-cols-2 w-[60rem]'>
                <div className='flex flex-col gap-8'>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Group ID
                    </p>
                    <p className=' font-bold text-base mb-2'>RE_GR24</p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Topic
                    </p>
                    <p className='capitalize font-bold text-base mb-8'>
                      Blockchain based smart contracts and its applications
                    </p>
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Comment
                    </p>
                    <input
                      type='text'
                      name='Comment'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[60rem] sm:w-[60rem] rounded-md text-base focus:ring-1 px-3 py-6 '
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-8'>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Interest
                    </p>
                    <p className='capitalize font-bold text-base'>
                      Distributed Systems
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex mt-[4.8rem] gap-3 ml-[51.8rem] '>
                <button className='  text-lg  px-6 py-1 bg-[#F65354] text-white border border-slate-300 focus:outline-none focus:border-[#f76d6d]-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-[#c73e3e]-active text-sm'>
                  Reject
                </button>
                <button className=' text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active text-sm'>
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupervisortopicsAcceptanceReject
