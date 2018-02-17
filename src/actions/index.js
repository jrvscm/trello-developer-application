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

const SHOW_ADDCARD_BTN = 'SHOW_ADDCARD_BTN'
export const showAddCardBtn = (id) => ({
	type: SHOW_ADDCARD_BTN,
	id
})

const UPDATE_CURRENT_CLICKED = 'UPDATE_CURRENT_CLICKED'
export const updateCurrentClicked = (id) => ({
	type:UPDATE_CURRENT_CLICKED,
	id
})

const SET_MODAL_SHOW = 'SET_MODAL_SHOW'
export const setModalShow = () => ({
	type: SET_MODAL_SHOW,
	show: true
})

const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL'
export const setCloseModal = () => ({
	type: SET_CLOSE_MODAL,
	show: false
})


