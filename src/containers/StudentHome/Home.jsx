import React from "react";
import Menu from "../../components/StudentMenu";
import chart from "../../images/del-chart.png";
import done from "../../images/done-icon.png";

function Home() {
  return (
    <div className="bg-bk-white h-screen w-screen">
      <div className="grid grid-cols-12 h-full w-full grid-rows-2">
        <div className="h-full w-[10px]">
          <Menu />
        </div>
        <div className="col-span-3 mx-auto mt-12">
          <img src={chart} alt="" className="w-[14em]" />
        </div>
        <div className="col-span-8 mx-auto  my-auto mt-12">
          <div className="w-[45rem] h-[17rem] bg-white rounded-xl">
            <h2 className="text-xl font-bold ml-5 pt-2">Progress</h2>
            <div className="grid grid-cols-2 grid-rows-5">
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">topic registration</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">topic evaluation</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">supervisor approval</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">feedback</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">co-supervisor selection</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">presentation evaluation</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">co-supervisor approval</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">thesis evaluation</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">topic details submission</p>
              </div>
              <div className="flex items-center gap-2 mt-3 ml-8">
                <img src={done} alt="done-icon" className="h-5" />
                <p className="uppercase">complete</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-11 h-[18rem] w-[67rem] mx-auto bg-white col-start-2 rounded-xl">
          <h2 className="capitalize text-xl font-bold ml-5 pt-2">group</h2>
          <div className="grid grid-cols-7 mx-8 mt-4">
            <div className="uppercase col-span-2 font-bold mb-2">name</div>
            <div className="uppercase font-bold">id</div>
            <div className="uppercase col-span-2 font-bold">email</div>
            <div className="uppercase font-bold">phone</div>
            <div className="uppercase font-bold">specialization</div>

            <div className="capitalize col-span-2 ">
              kariyawasam k. g. p. c.
            </div>
            <div className="uppercase ">it20172978</div>
            <div className="capiatalize col-span-2 ">
              it20172978@my.sliit.lk
            </div>
            <div className="uppercase ">0771543736</div>
            <div className="uppercase ">se</div>

            <div className="capitalize col-span-2 ">lakshith g. p. r.</div>
            <div className="uppercase ">it20165666</div>
            <div className="capiatalize col-span-2 ">
              it20165666@my.sliit.lk
            </div>
            <div className="uppercase ">0701864774</div>
            <div className="uppercase ">se</div>

            <div className="capitalize col-span-2 ">
              muthukumarana m. w. a. n. c.
            </div>
            <div className="uppercase ">it20227890</div>
            <div className="capiatalize col-span-2 ">
              it20227890@my.sliit.lk
            </div>
            <div className="uppercase ">0771543736</div>
            <div className="uppercase ">se</div>

            <div className="capitalize col-span-2 ">perera h. a. n. s.</div>
            <div className="uppercase ">it20166106</div>
            <div className="capiatalize col-span-2 ">
              it20166106@my.sliit.lk
            </div>
            <div className="uppercase ">0771543736</div>
            <div className="uppercase ">se</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
