import React from 'react'
import Menu from '../../../components/SupervisorMenu'
import Container from '../../../components/SupervisorContainer'

function SupervisorProfile() {
  return (
    <div>
      <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
        <div className=''>
          <Menu />
        </div>
        <div className='col-span-11 mx-auto my-auto '>
          <div className='relative'>
            <Container title='Profile' width='w-[68rem] h-[25rem]' />
            <div className='absolute top-[10rem] left-[7rem]'>
              <div className=' grid grid-cols-2 w-[60rem]'>
                <div className='flex flex-col gap-8'>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Username:
                    </p>
                    <p className=' font-bold text-base'>kasthuri.r</p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      ID:
                    </p>
                    <p className='capitalize font-bold text-base'>EMP21786</p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Phone:
                    </p>
                    <p className='capitalize font-bold text-base'>0771245789</p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Email:
                    </p>
                    <p className=' font-bold text-base'>emp21786@my.sliit.lk</p>
                  </div>
                </div>
                <div className='flex flex-col gap-8'>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Name:
                    </p>
                    <p className='capitalize font-bold text-base'>
                      Silva A. B. T
                    </p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Role:
                    </p>
                    <p className='capitalize font-bold text-base'>Supervisor</p>
                  </div>
                  <div>
                    <p className='capitalize text-slate-700 text-sm mb-1'>
                      Research Interests:
                    </p>
                    <p className='capitalize font-bold text-base'>
                      Artfial Interlligence Machine Learning IoT
                    </p>
                    <p className='capitalize font-bold text-base'>
                      Machine Learning
                    </p>
                    <p className='capitalize font-bold text-base'>IoT</p>
                  </div>
                </div>
              </div>
              <div className=' mt-[7rem]  ml-[59.5rem] '>
                <button className=' text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm'>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupervisorProfile
