import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Slider from '../widget/slider';
import TitleBtn from '../widget/titleBtn';

class App extends Component {
	constructor(props){
		super(props);
	} 
	render(){
		const {slideState} =  this.props;
		return (
			<div>
				<Slider/>
				<section className={slideState?'slideOut sec-main':'sec-main'}>
					<TitleBtn/>
					{this.props.children}
				</section>
			</div>
		);
	}
	componentWillUpdate(){
		console.log('update app');
	}
}


App.propTypes = {
    slideState: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    const {titleBtnStatus} = state
    return {
        slideState: titleBtnStatus.slideState
    }
}

export default connect(mapStateToProps)(App)