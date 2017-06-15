/**
* 对于webpack打包的文件，主要是将该文件中require的文件打成一个包，没有依赖的文件会被忽略。可以通过bundle-loader单独打包文件 
*/
import './static/app.less';
import 'babel-core/polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configuireStore from './provide/store/configuireStore';
import App from './page/app';
import Home from './page/home';
import Archives from './page/archives';
import ArchivesHome from './page/archivesHome';
import ArchivePage from './page/archivePage';

const store = configuireStore();
const history = syncHistoryWithStore(hashHistory, store);

history.listen(location => {
	console.log(location);
});
// const loadPageAsync = pageName => (location, cb) => {
// 	let bundle = require('bundle?lazy!./page/' + pageName);
// 	bundle(compontent => {
// 		cb(null, compontent);
// 	});
// };// <Route path='about' getComponent={loadPageAsync('About')} />
				// <Route path='archives' getComponent={loadPageAsync('Archives')} >
				// 	<IndexRoute getComponent={loadPageAsync('ArchivesHome')} />
				// 	<Route path=':name' getComponent={loadPageAsync('ArchivePage')} />
				// </Route>

				

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} /> 
				<Route path='archives' component={Archives} >
					<IndexRoute component={ArchivesHome} />
					<Route path=":name" component={ArchivePage}/>
				</Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
