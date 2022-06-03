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
import StudentNewSubmission from "./src/containers/Student/StudentSubmission/StudentSubmission";
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
import ViewMarkingSchemaList from "./src/containers/Admin/MarkingScheme/ViewMarkingSchemaList";
import TopicSubmission from "./src/containers/Supervisor/StudentSubmissions/TopicSubmission";
import Markings from "./src/containers/Supervisor/MarkingSchemes-Submissions";
import StudentSubmission from "./src/containers/Supervisor/StudentSubmissions/Submissions";
import ViewMarkingSchemaList from "./src/containers/Admin/MarkingScheme/ViewMarkingSchemaList";
import EditMarkingScheme from "./src/containers/Admin/MarkingScheme/EditMarkingScheme";
import ViewMarkingSchemaByID from "./src/containers/Admin/MarkingScheme/ViewMarkingSchemaByID";
import StaffPannel from "./src/containers/Staff/StaffPannel";
import StudentSubmissions from "./src/containers/Staff/StudentSubmissions";
import StudentTopicSubmission from "./src/containers/Staff/StudentTopicSubmission";
import StaffProfile from "./src/containers/Staff/StaffProfile";
import StaffEditProfile from "./src/containers/Staff/StaffEditProfile";
import CoMarkings from "./src/containers/Co-Supervisor/MarkingSchemes-Submissions/index";
import CoSubmissions from "./src/containers/Co-Supervisor/StudentSubmissions/Submissions";
import CoTopicSubmission from "./src/containers/Co-Supervisor/StudentSubmissions/TopicSubmission";
import CoSupervisorProfile from "./src/containers/Co-Supervisor/Co-Supervisor-Profile/CoSupervisorProfile";
import CoAssignedTopicDetails from "./src/containers/Co-Supervisor/Co-Supervisor-Topics/AssignedTopicDetails";
import CoAssignedTopics from "./src/containers/Co-Supervisor/Co-Supervisor-Topics/AssignedTopics";
import CoSupervisortopicsAcceptanceReject from "./src/containers/Co-Supervisor/Co-Supervisor-Topics/CoSupervisortopicsAcceptanceReject";
import CoTopics from "./src/containers/Co-Supervisor/Co-Supervisor-Topics/Topics";
import StudentGroup from "./src/containers/Student/StudentGroup/StudentGroup";
import SupervisorProfileEdit from "./src/containers/Supervisor/Supervisor-Profile-Edit/SupervisorProfileEdit";
import MarkingSchemaByID from "./src/containers/Supervisor/MarkingSchemes-Submissions/Marking";

function App() {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	}, [auth.authenticate]);

	return (
		<div className='App'>
			<Routes>
				////////////////////Common/////////////////////////////
				<Route path='/' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/landing-page' element={<LandingPage />} />
				/////////////////////Student//////////////////////////
				<Route path='/student/signup' element={<StudentRegister />} />
				<Route path='/student/submission' element={<PrivateWrapper />}>
					<Route
						path='/student/submission'
						element={<StudentNewSubmission />}
					/>
				</Route>
				<Route path='/student-home' element={<PrivateWrapper />}>
					<Route path='/student-home' element={<StudentHome />} />
				</Route>
				<Route path='/student/topic/accepted' element={<PrivateWrapper />}>
					<Route
						path='/student/topic/accepted/:id'
						element={<StudentFeedbackAccept />}
					/>
				</Route>
				<Route path='/student/templates' element={<PrivateWrapper />}>
					<Route path='/student/templates' element={<StudentTemplateList />} />
				</Route>
				<Route path='/student/file-submission/:id' element={<PrivateWrapper />}>
					<Route
						path='/student/file-submission/:id'
						element={<StudentFileSubmission />}
					/>
				</Route>
				<Route path='/student/topicRegistration' element={<PrivateWrapper />}>
					<Route
						path='/student/topicRegistration'
						element={<TopicRegistration />}
					/>
				</Route>
				<Route path='/student/group' element={<PrivateWrapper />}>
					<Route path='/student/group' element={<StudentGroup />} />
				</Route>
				///////////////////////Admin///////////////////////////////
				<Route path='/admin/members' element={<PrivateWrapper />}>
					<Route path='/admin/members' element={<AdminHome />} />
				</Route>
				<Route path='/admin/submissions/create' element={<PrivateWrapper />}>
					<Route
						path='/admin/submissions/create'
						element={<CreateSubmission />}
					/>
				</Route>
				<Route path='/admin/submissions/view' element={<PrivateWrapper />}>
					<Route path='/admin/submissions/view' element={<ViewSubmission />} />
				</Route>
				<Route path='/admin/members/:memberId' element={<PrivateWrapper />}>
					<Route path='/admin/members/:memberId' element={<MemberDetails />} />
				</Route>
				<Route
					path='/admin/submissions/view/:submissionId'
					element={<PrivateWrapper />}>
					<Route
						path='/admin/submissions/view/:submissionId'
						element={<ViewSubmission />}
					/>
				</Route>
				<Route path='/admin/members/:memberId' element={<PrivateWrapper />}>
					<Route path='/admin/members/:memberId' element={<MemberDetails />} />
				</Route>
				<Route path='/admin/member/update/:id' element={<PrivateWrapper />}>
					<Route
						path='/admin/member/update/:id'
						element={<MembersStudentUpdate />}
					/>
				</Route>
				<Route path='/admin/member/create' element={<PrivateWrapper />}>
					<Route path='/admin/member/create' element={<MembersCreate />} />
				</Route>
				<Route path='/admin/view-groups' element={<PrivateWrapper />}>
					<Route path='/admin/view-groups' element={<Groups />} />
				</Route>
				<Route path='/admin/create-panel' element={<PrivateWrapper />}>
					<Route path='/admin/create-panel' element={<CreatePannel />} />
				</Route>
				<Route path='/admin/panels' element={<PrivateWrapper />}>
					<Route path='/admin/panels' element={<Panels />} />
				</Route>
				<Route path='/admin/submissions/edit' element={<PrivateWrapper />}>
					<Route path='/admin/submissions/edit' element={<EditSubmission />} />
				</Route>
				<Route path='/admin/view-groups/:grpId' element={<PrivateWrapper />}>
					<Route
						path='/admin/view-groups/:grpId'
						element={<GroupManipulations />}
					/>
				</Route>
				<Route path='/admin/panels/:panelId' element={<PrivateWrapper />}>
					<Route path='/admin/panels/:panelId' element={<PannelView />} />
				</Route>
				<Route path='/admin/panel/update/:panelId' element={<PrivateWrapper />}>
					<Route
						path='/admin/panel/update/:panelId'
						element={<PanelUpdate />}
					/>
				</Route>
				<Route path='/admin/submissions' element={<PrivateWrapper />}>
					<Route path='/admin/submissions' element={<ViewSubmissionList />} />
				</Route>
				<Route
					path='/supervisor/topics-AcceptanceReject'
					element={<PrivateWrapper />}>
					<Route
						path='/supervisor/topics-AcceptanceReject'
						element={<AssignedTopicDetails />}
					/>
				</Route>
				<Route path='/admin/marking-scheme/create' element={<PrivateWrapper />}>
					<Route
						path='/admin/marking-scheme/create'
						element={<CreateMarkingScheme />}
					/>
				</Route>
				<Route path='/admin/view-templates' element={<PrivateWrapper />}>
					<Route path='/admin/view-templates' element={<Templates />} />
				</Route>
				<Route path='/admin/marking-scheme' element={<PrivateWrapper />}>
					<Route
						path='/admin/marking-scheme'
						element={<ViewMarkingSchemaList />}
					/>
				</Route>
				<Route path='/admin/marking-scheme/Edit' element={<PrivateWrapper />}>
					<Route
						path='/admin/marking-scheme/Edit'
						element={<EditMarkingScheme />}
					/>
				</Route>
				<Route
					path='/admin/marking-scheme/view/:schemaId'
					element={<PrivateWrapper />}>
					<Route
						path='/admin/marking-scheme/view/:schemaId'
						element={<ViewMarkingSchemaByID />}
					/>
				</Route>
				//////////////////////////////Supervisor////////////////////////
				<Route
					path='/Supervisor/Supervisor-Profile'
					element={<PrivateWrapper />}>
					<Route
						path='/Supervisor/Supervisor-Profile'
						element={<SupervisorProfile />}
					/>
				</Route>
				<Route
					path='/supervisor/marking-scheme/view/:schemaId'
					element={<PrivateWrapper />}>
					<Route
						path='/supervisor/marking-scheme/view/:schemaId'
						element={<MarkingSchemaByID />}
					/>
				</Route>
				<Route
					path='/Supervisor/Supervisor-Topics-AcceptanceReject/:id'
					element={<PrivateWrapper />}>
					<Route
						path='/Supervisor/Supervisor-Topics-AcceptanceReject/:id'
						element={<SupervisortopicsAcceptanceReject />}
					/>
				</Route>
				<Route path='/supervisor/assigned-topics' element={<PrivateWrapper />}>
					<Route
						path='/supervisor/assigned-topics'
						element={<AssignedTopics />}
					/>
				</Route>
				<Route path='/supervisor/topics' element={<PrivateWrapper />}>
					<Route path='/supervisor/topics' element={<Topics />} />
				</Route>
				<Route
					path='/supervisor/assigned-topic/:id'
					element={<PrivateWrapper />}>
					<Route
						path='/supervisor/assigned-topic/:id'
						element={<AssignedTopicDetails />}
					/>
				</Route>
				<Route path='/r11/:assignmentName' element={<PrivateWrapper />}>
					<Route path='/r11/:assignmentName' element={<TopicSubmission />} />
				</Route>
				<Route
					path='/supervisor/markings-submissions'
					element={<PrivateWrapper />}>
					<Route
						path='/supervisor/markings-submissions'
						element={<Markings />}
					/>
				</Route>
				<Route path='/r13/:submission' element={<PrivateWrapper />}>
					<Route path='/r13/:submission' element={<StudentSubmission />} />
				</Route>
				<Route path='/supervisor/profile/edit' element={<PrivateWrapper />}>
					<Route
						path='/supervisor/profile/edit'
						element={<SupervisorProfileEdit />}
					/>
				</Route>
				//////////////////////////////Co-Supervisor////////////////////////
				<Route
					path='/coSupervisor/coSupervisor-Profile'
					element={<PrivateWrapper />}>
					<Route
						path='/coSupervisor/coSupervisor-Profile'
						element={<CoSupervisorProfile />}
					/>
				</Route>
				<Route
					path='/coSupervisor/coSupervisor-Topics-AcceptanceReject/:id'
					element={<PrivateWrapper />}>
					<Route
						path='/coSupervisor/coSupervisor-Topics-AcceptanceReject/:id'
						element={<CoSupervisortopicsAcceptanceReject />}
					/>
				</Route>
				<Route path='/supervisor/assigned-topics' element={<PrivateWrapper />}>
					<Route
						path='/supervisor/assigned-topics'
						element={<AssignedTopics />}
					/>
				</Route>
				<Route path='/coSupervisor/topics' element={<PrivateWrapper />}>
					<Route path='/coSupervisor/topics' element={<CoTopics />} />
				</Route>
				<Route
					path='/coSupervisor/assigned-topic/:id'
					element={<PrivateWrapper />}>
					<Route
						path='/coSupervisor/assigned-topic/:id'
						element={<CoAssignedTopicDetails />}
					/>
				</Route>
				<Route path='/r17' element={<PrivateWrapper />}>
					<Route path='/r17' element={<CoTopicSubmission />} />
				</Route>
				<Route
					path='/coSupervisor/markings-submissions'
					element={<PrivateWrapper />}>
					<Route
						path='/coSupervisor/markings-submissions'
						element={<CoMarkings />}
					/>
				</Route>
				<Route path='/r13' element={<PrivateWrapper />}>
					<Route path='/r13' element={<StudentSubmission />} />
				</Route>
				//////////////////////////////Staff////////////////////////
				<Route path='/r25' element={<PrivateWrapper />}>
					<Route path='/r25' element={<StaffEditProfile />} />
				</Route>
				<Route path='/staff/staff-pannel' element={<PrivateWrapper />}>
					<Route path='/staff/staff-pannel' element={<StaffPannel />} />
				</Route>
				<Route path='/staff/student-submissions' element={<PrivateWrapper />}>
					<Route
						path='/staff/student-submissions'
						element={<StudentSubmissions />}
					/>
				</Route>
				<Route
					path='/staff/student-topic-submission/:submission'
					element={<PrivateWrapper />}>
					<Route
						path='/staff/student-topic-submission/:submission'
						element={<StudentTopicSubmission />}
					/>
				</Route>
				<Route path='/staff/staff-profile' element={<PrivateWrapper />}>
					<Route path='/staff/staff-profile' element={<StaffProfile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
