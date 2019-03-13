import React from 'react';
import _ from 'lodash';
import { Search, Grid, Header, Icon } from 'semantic-ui-react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SortIcon from 'material-ui/svg-icons/content/sort';
import './style/Form.css';

const FormHeader = ({theme}) => <header
	className="header-container"
	style={{padding: '10px', background: 'white', fontSize: '1.5rem'}}>
	<div className="item1">
		Forms
	</div>
	<div className="item2">
		 <Search
		 	className="search"
            onResultSelect={() => {}}
            icon={"search"}
            onSearchChange={_.debounce(() => {}, 500, { leading: true })}
          />
	</div>
	<div className="item3">
		<div className="add">
			<FloatingActionButton backgroundColor="#FF8687" mini={true}>
		      <ContentAdd />
		    </FloatingActionButton>
		</div>
		<div className="add" style={{paddingLeft: '6%'}}>
			<FloatingActionButton backgroundColor="#D326FF" mini={true}>
		      <SortIcon />
		    </FloatingActionButton>
		</div>
	</div>
</header>

export default FormHeader;
