import React, {Component,PropType} from 'react';
import {clickTitleBtn} from '../provide/action/actions';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

class Slider extends Component{
	constructor(props){
		super(props);
		this.clickLink = this.clickLink.bind(this);
	}
	clickLink(url){
		const {dispatch} = this.props;
		dispatch(push(url));
		dispatch(clickTitleBtn(false));
	}
	render(){
		const {status} = this.props;
		const classes = status? 'c-slider slideOut':'c-slider';
		return (
			<div className={classes}>
				<ul>
					<li onClick={()=>this.clickLink('/')}>Home</li>
					<li onClick={()=>this.clickLink('/archives')}>Archives</li>
					<li onClick={()=>this.clickLink('/about')}>About</li>
				</ul>
			</div>
		);
	}
}

export default connect(state=>{
	const {titleBtnStatus} = state;
	return {
		status: titleBtnStatus.slideState
	};
})(Slider)