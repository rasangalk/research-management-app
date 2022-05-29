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
import MemberDetails from "./src/containers/Admin/Members-Student/MembersStudent";
import CreateSubmission from "./src/containers/Admin/CreateSubmission/CreateSubmission";
import ViewSubmission from "./src/containers/Admin/ViewSubmission/ViewSubmission";
import MembersStudentUpdate from "./src/containers/Admin/Members-Student/MembersStudentUpdate";
import MembersCreate from "./src/containers/Admin/Members-Student/MembersStudentCreate";
import TopicRegistration from "./src/containers/Student/StudentTopicRegister/TopicRegistration";
import SupervisorProfile from "./src/containers/Supervisor/Supervisor-Profile/SupervisorProfile";
import Panels from "./src/containers/Admin/Panels/Panels";
import Groups from "./src/containers/Admin/Groups/Groups";
import Templates from "./src/containers/Admin/Templates/Templates";
import CreatePannel from "./src/containers/Admin/Panels/CreatePannel";
import EditSubmission from "./src/containers/Admin/EditSubmission/EditSubmission";
import ViewSubmissionList from "./src/containers/Admin/ViewSubmissionList/ViewSubmissionList";
import GroupManipulations from "./src/containers/Admin/Groups/GroupManipulations";
import PannelView from "./src/containers/Admin/Panels/PannelView";
import SupervisortopicsAcceptanceReject from "./src/containers/Supervisor/Supervisor-Topics/SupervisortopicsAcceptanceReject";
import AssignedTopicDetails from "./src/containers/Supervisor/Supervisor-Topics/AssignedTopicDetails";
import PanelUpdate from "./src/containers/Admin/Panels/PanelUpdate";
import Topics from "./src/containers/Supervisor/Supervisor-Topics/Topics";
import AssignedTopics from "./src/containers/Supervisor/Supervisor-Topics/AssignedTopics";
import CreateMarkingScheme from "./src/containers/Admin/MarkingScheme/CreateMarkingScheme";

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
        ////////////////////Common/////////////////////////////
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing-page" element={<LandingPage />} />
        /////////////////////Student//////////////////////////
        <Route path="/student/signup" element={<StudentRegister />} />
        <Route path="/student/submission" element={<PrivateWrapper />}>
          <Route path="/student/submission" element={<StudentSubmission />} />
        </Route>
        <Route path="/student-home" element={<PrivateWrapper />}>
          <Route path="/student-home" element={<StudentHome />} />
        </Route>
        <Route path="/r2" element={<PrivateWrapper />}>
          <Route path="/r2" element={<StudentFeedbackAccept />} />
        </Route>
        <Route path="/student/templates" element={<PrivateWrapper />}>
          <Route path="/student/templates" element={<StudentTemplateList />} />
        </Route>
        <Route path="/student/file-submission" element={<PrivateWrapper />}>
          <Route
            path="/student/file-submission"
            element={<StudentFileSubmission />}
          />
        </Route>
        <Route path="/student/topicRegistration" element={<PrivateWrapper />}>
          <Route
            path="/student/topicRegistration"
            element={<TopicRegistration />}
          />
        </Route>
        ///////////////////////Admin///////////////////////////////
        <Route path="/admin/members" element={<PrivateWrapper />}>
          <Route path="/admin/members" element={<AdminHome />} />
        </Route>
        <Route path="/admin/submissions/create" element={<PrivateWrapper />}>
          <Route
            path="/admin/submissions/create"
            element={<CreateSubmission />}
          />
        </Route>
        <Route path="/admin/submissions/view" element={<PrivateWrapper />}>
          <Route path="/admin/submissions/view" element={<ViewSubmission />} />
        </Route>
        <Route path="/admin/members/:memberId" element={<PrivateWrapper />}>
          <Route path="/admin/members/:memberId" element={<MemberDetails />} />
        </Route>
        <Route
          path="/admin/submissions/view/:submissionId"
          element={<PrivateWrapper />}
        >
          <Route
            path="/admin/submissions/view/:submissionId"
            element={<ViewSubmission />}
          />
        </Route>
        <Route path="/admin/members/:memberId" element={<PrivateWrapper />}>
          <Route path="/admin/members/:memberId" element={<MemberDetails />} />
        </Route>
        <Route
          path="/Members-Student/MemberStudentUpdate"
          element={<PrivateWrapper />}
        >
          <Route
            path="/Members-Student/MemberStudentUpdate"
            element={<MembersStudentUpdate />}
          />
        </Route>
        <Route path="/admin/member/create" element={<PrivateWrapper />}>
          <Route path="/admin/member/create" element={<MembersCreate />} />
        </Route>
        <Route path="/admin/view-groups" element={<PrivateWrapper />}>
          <Route path="/admin/view-groups" element={<Groups />} />
        </Route>
        <Route path="/admin/create-panel" element={<PrivateWrapper />}>
          <Route path="/admin/create-panel" element={<CreatePannel />} />
        </Route>
        <Route path="/admin/panels" element={<PrivateWrapper />}>
          <Route path="/admin/panels" element={<Panels />} />
        </Route>
        <Route path="/admin/submissions/edit" element={<PrivateWrapper />}>
          <Route path="/admin/submissions/edit" element={<EditSubmission />} />
        </Route>
        <Route path="/admin/view-groups/:grpId" element={<PrivateWrapper />}>
          <Route
            path="/admin/view-groups/:grpId"
            element={<GroupManipulations />}
          />
        </Route>
        <Route path="/admin/panels/:panelId" element={<PrivateWrapper />}>
          <Route path="/admin/panels/:panelId" element={<PannelView />} />
        </Route>
        <Route path="/admin/panel/update/:panelId" element={<PrivateWrapper />}>
          <Route
            path="/admin/panel/update/:panelId"
            element={<PanelUpdate />}
          />
        </Route>
        <Route path="/admin/submissions" element={<PrivateWrapper />}>
          <Route path="/admin/submissions" element={<ViewSubmissionList />} />
        </Route>
        <Route
          path="/supervisor/topics-AcceptanceReject"
          element={<AssignedTopicDetails />}
        />
        <Route path="/admin/marking-scheme/create" element={<PrivateWrapper />}>
          <Route
            path="/admin/marking-scheme/create"
            element={<CreateMarkingScheme />}
          />
        </Route>
        //////////////////////////////Supervisor////////////////////////
        <Route
          path="/Supervisor/Supervisor-Profile"
          element={<PrivateWrapper />}
        >
          <Route
            path="/Supervisor/Supervisor-Profile"
            element={<SupervisorProfile />}
          />
        </Route>
        <Route
          path="/Supervisor/Supervisor-Topics-AcceptanceReject"
          element={<SupervisortopicsAcceptanceReject />}
        />
        <Route
          path="/supervisor/assigned-topics"
          element={<AssignedTopics />}
        />
        <Route path="/supervisor/topics" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;
