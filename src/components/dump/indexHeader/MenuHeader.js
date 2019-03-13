import React from 'react';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SortIcon from 'material-ui/svg-icons/content/sort';
import './style/Form.css';

const MenuHeader = ({ theme, onAdd, name }) => <header
	className="col col-12"
	style={{ padding: '10px', fontSize: '1.5rem' }}>
	<div className="col col-6 py1">
		{name}
	</div>
	<div className="col col-6 pl4">
		<div className="add right col-2">
			<FloatingActionButton
				onClick={() => onAdd()}
				backgroundColor="#FF8687" >
				<ContentAdd />
			</FloatingActionButton>
		</div>
		<div className="add right px2 col-3" style={{ paddingLeft: '6%' }}>
			<FloatingActionButton backgroundColor="#D326FF" >
				<SortIcon />
			</FloatingActionButton>
		</div>
	</div>
</header>

export default MenuHeader;
