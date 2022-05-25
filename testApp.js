import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./src/actions/auth.actions";
import PrivateWrapper from "./src/components/HOC/PrivateRoute";
import Signin from "./src/containers/Signin";
import Signup from "./src/containers/Register";
import LandingPage from "./src/containers/LandingPage";
import StudentRegister from "./src/containers/Student/StudentRegister";
import StudentHome from "./src/containers/Student/StudentHome/Home";
import StudentSubmission from "./src/containers/Student/StudentSubmission/StudentSubmission";
import StudentFeedbackAccept from "./src/containers/Student/FeedbackAccepted/FeedbackAccepted";
import StudentTemplateList from "./src/containers/Student/StudentTemplateList";
import StudentFileSubmission from "./src/containers/Student/StudentFileSubmission/StudentFileSubmission";
import AdminHome from "./src/containers/Admin/Members/Members";
import MembersStudent from "./src/containers/Admin/Members-Student/MembersStudent";
import MembersStudentUpdate from "./src/containers/Admin/Members-Student/MembersStudentUpdate";
import MembersStudentCreate from "./src/containers/Admin/Members-Student/MembersStudentCreate";
import TopicRegistration from "./src/containers/Student/StudentTopicRegister/TopicRegistration";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/student-home" element={<PrivateWrapper />}>
          <Route path="/student-home" element={<StudentHome />} />
        </Route>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/student/signup" element={<StudentRegister />} />

        <Route path="/student/submission" element={<PrivateWrapper />}>
          <Route path="/student/submission" element={<StudentSubmission />} />
        </Route>
        <Route path="/r2" element={<StudentFeedbackAccept />} />
        <Route path="/r3" element={<AdminHome />} />
        <Route path="/student/templates" element={<StudentTemplateList />} />
        <Route path="/student/file-submission" element={<PrivateWrapper />}>
          <Route
            path="/student/file-submission"
            element={<StudentFileSubmission />}
          />
        </Route>
        <Route
          path="/Members-Student/MembersStudent"
          element={<MembersStudent />}
        />
        <Route
          path="/Members-Student/MemberStudentUpdate"
          element={<MembersStudentUpdate />}
        />
        <Route
          path="/Members-Student/MemberStudentCreate"
          element={<MembersStudentCreate />}
        />
        <Route path="/student/topicRegistration" element={<PrivateWrapper />}>
          <Route
            path="/student/topicRegistration"
            element={<TopicRegistration />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
