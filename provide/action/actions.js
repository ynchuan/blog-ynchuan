export const CLICK_TITLEBTN = 'CLICK_TITLEBTN';
export const OUTPUT_ARTICLE = 'OUTPUT_ARTICLE';
const contents = {'react-router-redux':12};

export function clickTitleBtn(slideState, isBack) {
	return {
		type: CLICK_TITLEBTN,
		slideState,
		isBack
	}
}

export function fetchArticle(articleName, dispatch) {
	setTimeout(function() {
		dispatch({
			type: OUTPUT_ARTICLE,
			contents: contents,
			articleName: articleName
		});
	}, 1000);
	
}