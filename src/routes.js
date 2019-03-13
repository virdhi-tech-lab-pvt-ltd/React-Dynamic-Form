import React from 'react';
import {routePath} from 'app/utils/routePath';
import Layout from 'app/views/Layout';
import * as SignUp from 'pages/signUp';
import * as HomePage from 'pages/home';
import OtpLayout from 'app/views/OtpLayout';
import HomeLayout from 'app/views/HomeLayout';
import NotFoundPage from 'views/NotFoundPage.js';
import SignUpLayout from 'app/views/SignUpLayout';
import { Route, IndexRoute} from 'react-router';

export default (
<Route path={routePath.rootRoute} component={Layout}>
	<IndexRoute component={SignUp.Login}/>
	<Route path={routePath.otpRoute} component={SignUp.Otp}/>
	<Route path={routePath.forgotPasswordRoute} component={SignUp.ForgotPassword}/>
	<Route path={routePath.signUpRoute} component={SignUpLayout}>
		<IndexRoute component={SignUp.HomePage}/>
		<Route path={routePath.organisationRoute} component={SignUp.Organisation} />
		<Route path={routePath.inviteTeamsRoute} component={SignUp.InviteTeam} />
		<Route path={routePath.linkMembersRoute} component={SignUp.LinkMembers} />
	</Route>
	<Route path={routePath.dashboardRoute} component={HomeLayout}>
	<IndexRoute component={HomePage.DashBoard}/>
		<Route path={routePath.settingsRoute} component={HomePage.Setting} />
		<Route path={routePath.departmentsRoute} component={HomePage.Department} />
	</Route>
	<Route path='*' component={NotFoundPage}/>
</Route>
);


// <Route path={routePath.rootRoute} component={Layout}>
// 	<IndexRoute component={SignUp.Login}/>
// 	<Route path={routePath.signUpRoute} component={SignUpLayout}>
// 		<IndexRoute component={SignUp.HomePage}/>
// 		<Route path={routePath.organisationRoute} component={SignUp.Organisation} />
// 		<Route path={routePath.inviteTeamsRoute} component={SignUp.InviteTeam} />
// 		<Route path={routePath.linkMembersRoute} component={SignUp.LinkMembers} />
// 	</Route>
// 	<Route path={routePath.otpRoute} component={OtpLayout}>
// 		<IndexRoute component={SignUp.Otp}/>
// 	</Route>
// 	<Route path={routePath.dashboardRoute} component={HomeLayout}>
// 	<IndexRoute component={HomePage.DashBoard}/>
// 		<Route path={routePath.settingsRoute} component={HomePage.Setting} />
// 		<Route path={routePath.departmentsRoute} component={HomePage.Department} />
// 	</Route>
// 	<Route path='*' component={NotFoundPage}/>
// </Route>
