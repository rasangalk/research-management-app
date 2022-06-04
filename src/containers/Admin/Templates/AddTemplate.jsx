import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { addTemplates } from "../../../actions/template.action";
import { useNavigate } from "react-router-dom";

function UploadTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submissionArray, setSubmissionArray] = useState([]);
  const [caption, setCaption] = useState("");

  const addSubmission = () => {
    let form = new FormData();
    form.append("caption", caption);

    for (let file of submissionArray) {
      form.append("researchTemplate", file);
    }

    dispatch(addTemplates(form));
    navigate("/admin/view-templates");
  };

  const handleFile = (e) => {
    setSubmissionArray([e.target.files[0]]);
  };

  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div>
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="Templates" width="w-[68rem] h-[25rem]" />
            <div className="absolute top-[10rem] left-[5.5rem]">
              <div>
                <p className="capitalize text-base text-slate-700 text-sm mb-1 mr-10">
                  Caption
                </p>
                <input
                  type="text"
                  name="Caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1 mb-20"
                />
                <div>
                  <input type="file" name="Choose File" onChange={handleFile} />
                </div>
              </div>
              <div className="flex mt-[12.5rem] gap-3 ml-[53rem] ">
                <button className="  text-lg  px-6 py-1 bg-[#BBBABF] text-white border border-slate-300 focus:outline-none focus:border-[#BBBABF]-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-[#BBBABF]-active text-sm">
                  Cancel
                </button>
                <button
                  className=" text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active text-sm"
                  onClick={() => {
                    addSubmission();
                  }}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadTemplate;
