const SHOW_LIST_FORM = 'SHOW_LIST_FORM'
export const showListForm = () => ({
	type:SHOW_LIST_FORM
})

const HIDE_LIST_FORM = 'HIDE_LIST_FORM'
export const hideListForm = () => ({
	type: HIDE_LIST_FORM
})

const ADD_LIST = 'ADD_LIST'
export const addList = (title) => ({
	type:ADD_LIST,
	title
})