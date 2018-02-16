const SHOW_LIST_FORM = 'SHOW_LIST_FORM'
export const showListForm = () => ({
	type:SHOW_LIST_FORM
})

const HIDE_LIST_FORM = 'HIDE_LIST_FORM'
export const hideListForm = () => ({
	type: HIDE_LIST_FORM
})

const SHOW_CARD_FORM = 'SHOW_CARD_FORM'
export const showCardForm = (list) => ({
	type:SHOW_CARD_FORM,
	list
})

const HIDE_CARD_FORM = 'HIDE_CARD_FORM'
export const hideCardForm = () => ({
	type:HIDE_CARD_FORM
})

const ADD_LIST = 'ADD_LIST'
export const addList = (title) => ({
	type:ADD_LIST,
	title
})

const ADD_CARD = 'ADD_CARD'
export const addCard = (text) => ({
	type:ADD_CARD,
	text
})