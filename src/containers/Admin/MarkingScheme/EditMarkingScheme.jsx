import React from 'react'
import Menu from '../../../components/AdminMenu'
import back from '../../../images/arrow-left.png'

function EditMarkingScheme() {
  return (
    <div>
      <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
        <div>
          <Menu />
        </div>
        <div className='col-span-11 mx-auto my-auto'>
          <div class='relative'>
            <div className='bg-white drop-shadow-xl w-[74rem] h-[37rem] rounded-xl '>
              <div className='flex flex-row items-center pt-4 pl-10'>
                <img src={back} className='cursor-pointer mr-2' />
                <h2 className='capitalize font-bold ml-5 pt-2 text-xl'>
                  marking schemes
                </h2>
              </div>
              <div className='mt-8 ml-12'>
                <p>Assignment Name:</p>
              </div>
              <div>
                <h2 className='capitalize font-bold ml-[2.9rem] pt-2 text-lg '>
                  Topic Details Evaluation
                </h2>
              </div>
              <div
                className={`border-2 border-[#E2E8F0] w-[68rem] h-[19rem] rounded-xl mt-6 mx-auto`}
              >
                <div className='overflow-auto h-[17rem] mr-6 mt-6'>
                  <table className='border-collapse w-full '>
                    <thead>
                      <tr>
                        <th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
                          guildline
                        </th>
                        <th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
                          marks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
                        <td className='capitalize py-2 px-2'></td>
                        <td className=' py-2 px-2'></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=' mt-[2rem]  ml-[66rem] '>
                <button className=' text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active  text-sm'>
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

export default EditMarkingScheme
