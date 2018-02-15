const initialState = {
	lists: [ 
	{
    title: 'To Do',
    cards: [{
    	text: 'Sample Card'
    	}]
	}, 
	{ 
		title: 'Done',
    	cards: [{
    	text: 'Schedule Chris an interview'
    	}]
	}
]}



const Reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_LIST':
		return {
			...state
		}

		default:
			return state
	}
} 

export default Reducer;