const initialState = {
	showListForm: false,
	lists: [ 
		{
    		title: 'To Do',
    		cards: [{
    		text: 'Schedule interview with Christopher'
    		}]
		}, 
		{ 
			title: 'Done',
    		cards: [{
    		text: 'Read unoriginal cover letters'
    	},
    	{
    		text: 'Send rejection letters'
    	}]
		},
	]}



const Reducer = (state = initialState, action) => {
	switch(action.type) {

		case 'ADD_LIST':
		return {
			...state,
			lists: [...state.lists, action.title]
		}

		case 'SHOW_LIST_FORM':
		return {
			...state,
			showListForm: true
		}

		case 'HIDE_LIST_FORM':
		return {
			...state,
			showListForm: false
		}
		default:
			return state
	}
} 

export default Reducer;