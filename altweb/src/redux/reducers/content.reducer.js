import ContentList from '../classes/content.class'

const content = (state = [], action) => {
	switch (action.type) {
		case 'GET_CONTENT':
			let content = new ContentList(action.payload)			
			return content.parsedList;
		default:
			return state;
	}
};


export default content