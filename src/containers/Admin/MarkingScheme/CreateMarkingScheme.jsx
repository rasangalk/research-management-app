import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { getSubmissions } from "../../../actions/submissions.action";
import back from "../../../images/arrow-left.png";
import deleteIcon from "../../../images/delete.png";
import { CreateMarkingSchemes } from "../../../actions/markingscheme.action";

function CreateMarkingScheme() {
  const navigate = useNavigate();
  const submissions = useSelector((state) => state.submissions);
  const dispatch = useDispatch();
  const [marksField, setMarksField] = useState([{ markName: "", marks: "" }]);
  const [assignment, setAssignment] = useState("");

  useEffect(() => {
    dispatch(getSubmissions());
  }, []);

  const getTemplateList = () => {
    setMarksField([...marksField, { markName: "", marks: "" }]);
  };

  const handleDelete = (index) => {
    const list = [...marksField];
    list.splice(index, 1);
    setMarksField(list);
  };

  const handleMarkNameChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...marksField];
    list[index][name] = value;
    setMarksField(list);
  };

  const addSubmission = () => {
    const markingSchema = {
      assignmentName: assignment,
      markingScheme: marksField,
    };

    dispatch(CreateMarkingSchemes(markingSchema));
  };

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
                  className=" border-2 w-[24rem] rounded-md py-1 px-2 mt-1
                outline-0"
                  onChange={(e) => setAssignment(e.target.value)}
                >
                  <option value="" selected disabled hidden>
                    Choose an assignment
                  </option>
                  {Object.keys(submissions.submissions).map((element) => (
                    <option
                      key={element}
                      value={submissions.submissions[element].caption}
                      onChange={(e) => setAssignment(e.target.value)}
                    >
                      {submissions.submissions[element].caption}
                    </option>
                  ))}
                </select>

                <button
                  className=" float-right capitalize bg-regal-blue hover:bg-greenish-blue-active px-4 py-1 text-sm rounded-md font-medium text-white mt-1 mr-12"
                  onClick={getTemplateList}
                >
                  add new row
                </button>
              </div>
              <div
                className={`border-2 border-[#E2E8F0] w-[68rem] h-[18rem] rounded-xl mt-6 mx-auto`}
              >
                <div className="flex flex-col gap-2 my-4 overflow-y-scroll h-[16rem]">
                  {marksField.map((singleMarkField, index) => (
                    <div className="mx-auto" key={index}>
                      <input
                        className=" border-2 w-[44rem] rounded-md px-4 py-1 mt-1 outline-0 focus:border-slate-300"
                        type="text"
                        name="markName"
                        value={singleMarkField.markName}
                        onChange={(e) => handleMarkNameChange(e, index)}
                      />

                      <input
                        className=" border-2 w-[8rem] rounded-md px-4 py-1 mt-1 ml-12 outline-0 focus:border-slate-300"
                        type="text"
                        value={singleMarkField.marks}
                        name="marks"
                        onChange={(e) => handleMarkNameChange(e, index)}
                      />

                      <img
                        src={deleteIcon}
                        className="h-5 cursor-pointer float-right ml-8 my-2.5"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                className=" float-right capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-6 py-2 text-sm rounded-md font-bold text-white mr-12 mt-8"
                onClick={addSubmission}
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
