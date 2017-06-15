import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticle} from '../provide/action/actions';

class ArchivePage extends Component{
	constructor(props){
		super(props); 
	}
	componentWillMount(){
		let articleName = this.props.params.name;
		const {dispatch} = this.props;
		fetchArticle(articleName,dispatch);
	}
	render(){ 
		let article = this.props.article;
		return (
			<div className="d-article">
				<div className='d-article-content' dangerouslySetInnerHTML={{__html: article}}></div>	
			</div>
		);
	}
}

function mapStateToProps(state){
	const {article} = state; 
	return {article};
}

export default connect(mapStateToProps)(ArchivePage);