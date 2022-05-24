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
        <Route path="/r" element={<StudentSubmission />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/student/signup" element={<StudentRegister />} />
        <Route path="/student-home" element={<PrivateWrapper />}>
          <Route path="/student-home" element={<StudentHome />} />
        </Route>
        <Route path="/r2" element={<StudentFeedbackAccept />} />
        <Route path="/student/templates" element={<StudentTemplateList />} />
        <Route path="/student/file-submission" element={<PrivateWrapper />}>
          <Route
            path="/student/file-submission"
            element={<StudentFileSubmission />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
