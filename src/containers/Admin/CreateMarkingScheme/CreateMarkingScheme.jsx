import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { CreateSubmissions } from "../../../actions/submissions.action";
import back from "../../../images/arrow-left.png";

function CreateMarkingScheme() {
  const navigate = useNavigate();

  //   const [caption, setCaption] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");

  const dispatch = useDispatch();

  //   const addSubmission = () => {
  //     const submissionData = {
  //       caption: caption,
  //       description: description,
  //       deadlineDate: date,
  //       deadlineTime: time,
  //     };

  //     dispatch(CreateSubmissions(submissionData));
  //     navigate("/admin/submissions");
  //   };

  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div>
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto">
          <div class="relative">
            <div className="bg-white drop-shadow-xl w-[74rem] h-[37rem] rounded-xl ">
              <div className="flex flex-row items-center pt-4 pl-10">
                <img
                  src={back}
                  onClick={() => navigate(-1)}
                  className="cursor-pointer mr-2"
                />
                <h2 className="capitalize text-xl font-bold ml-5 pt-2">
                  marking schemes
                </h2>
              </div>
              <div className="mt-8 ml-12">
                <p>Assignment</p>
                <select
                  name="cars"
                  className=" border-2 w-[24rem] rounded-md py-1 px-2 mt-1
                outline-0"
                  id="cars"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>

                <button className=" float-right capitalize bg-greenish-blue hover:bg-greenish-blue-active mx-auto px-4 py-1 text-sm rounded-md font-medium text-white mt-1 mr-12">
                  add new row
                </button>
              </div>
              <div
                className={`border-2 border-[#E2E8F0] w-[68rem] h-[18rem] rounded-xl mt-6 mx-auto`}
              >
                <div class="flex flex-row">
                  <div>01</div>
                  <div>02</div>
                </div>
              </div>
              <button
                className=" float-right capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-6 py-2 text-sm rounded-md font-bold text-white mr-12 mt-8"
                //   onClick={addSubmission}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMarkingScheme;
