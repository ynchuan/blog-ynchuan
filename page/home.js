import React, {Component} from 'react';

class Home extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div className="p-home"></div>);
	}
	componentWillUnmount(){
		console.log('unmount')
	}
}

export default Home