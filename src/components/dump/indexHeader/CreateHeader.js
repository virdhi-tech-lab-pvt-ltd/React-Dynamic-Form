import React from 'react';
import { Button } from 'semantic-ui-react';

const CreateHeader = ({ theme, onSave, onCancel, name, icon, id }) => <header
	className="col col-12"
	style={{ fontSize: '1.5rem' }}>
	<div className="col col-6 py1 px2">
		<span>{name}</span>
		<span style={{ padding: '1rem', color: 'blue' }}>{icon}</span>
	</div>
	<div className="col col-6 py1">
		<div className="col-12 right-align">
			<div className="right-align">
				<Button
					onClick={() => onCancel()}
					style={{ background: '#EF5350', color: '#fff', minHeight: '0px', padding: '10px 34px' }} content='Cancel' />
			</div>
			<div className="right-align">
				<Button
					onClick={() => onSave()}
					style={{ background: '#7DB7FB', color: '#fff', minHeight: '0px', padding: '10px 34px' }} content='Save' />
			</div>
		</div>
	</div>
</header>

export default CreateHeader;
