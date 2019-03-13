import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'app/views/Layout';
import NotFound from 'app/views/NotFound';
import { routePaths } from 'app/utils/routePath';
import * as SmartComponents from 'components/smart';

import 'styles/app.css';

export const App = () => (
	<Layout>
		<Switch>
			<Route exact path='/' component={SmartComponents.Form} />
			<Route exact path='*' component={NotFound} />
		</Switch>
	</Layout>
);
