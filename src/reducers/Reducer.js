const initialState = {
	show: false,
	showListForm: false,
	currAddCardClickedBtn: null, 
	lists: [ 
		{	
			showCardForm: false,
    		title: 'To Do',
    		cards: [{
    		text: 'Schedule interview with Christopher'
    		}]
		}, 
		{ 	
			showCardForm: false,
			title: 'Done',
    		cards: [{
    		text: 'Read unoriginal cover letters'
    	},
    	{
    		text: 'Send rejection letters'
    	}]
		},
	]
}



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

		case 'SHOW_CARD_FORM':
		return {
			...state,
			lists: action.list
		}

		case 'UPDATE_CURRENT_CLICKED':
		return {
			...state,
			currAddCardClickedBtn: action.id, 
		}

		case 'SET_MODAL_SHOW':
		return {
			...state,
			show: action.show
		}

		case 'SET_CLOSE_MODAL':
		return {
			...state,
			show: action.show
		}

		default:
			return state
	}
} 

export default Reducer;