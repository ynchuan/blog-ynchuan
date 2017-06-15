import React, {Component, PropTypes} from 'react';
import TitleBar from '../widget/titleBar';
import {connect} from 'react-redux';

class Archives extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='p-archives'>
				<TitleBar title='文章'/>
				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state){
	const {slideState} = state;
	return {
		slideState
	}
}
export default connect(mapStateToProps)(Archives);