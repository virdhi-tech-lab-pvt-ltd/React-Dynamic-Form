import React from 'react';
import _ from 'lodash';
import { Search, Icon } from 'semantic-ui-react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SortIcon from 'material-ui/svg-icons/content/sort';
import '../form/style/Form.css';

const IndexHeader = (props) => {
  let { name , header ,actions , app} = props;
  return(<header
          	className="header-container"
          	style={{padding: '10px', background: '#fafafa', fontSize: '1.5rem'}}>
          	<div className="item1">
              <span className="left clickable pr2" onClick={() => actions.handleResetInput()}>
                {app.index ? <Icon name='arrow left' /> : ''}
              </span>
              <span className="left" style={{paddingTop: '3px'}}>
                <span className="roboto">{app.index ? 'Sub header' : header}</span>
              </span>
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
          		      <ContentAdd
                      onClick={() => actions.handleIndex(name)}/>
          		    </FloatingActionButton>
          		</div>
          		<div className="add" style={{paddingLeft: '6%'}}>
          			<FloatingActionButton backgroundColor="#D326FF" mini={true}>
          		      <SortIcon />
          		    </FloatingActionButton>
          		</div>
          	</div>
    </header>)
}

export default IndexHeader;
