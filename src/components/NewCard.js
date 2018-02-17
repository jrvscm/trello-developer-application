import React, { Component } from 'react';
import {Field, reduxForm, focus, reset} from 'redux-form';
import Input from './input';
import {  showCardForm } from '../actions/index';
import {required, nonEmpty} from '../validators';
import './NewCard.css';

export class CardForm extends Component {

    onSubmit(values) {
        const list = this.props.list;
        const array = this.props.lists;
        let newArray = JSON.parse(JSON.stringify(array));
        let newList = JSON.parse(JSON.stringify(list));
        let ind = this.props.cardindex.split('').slice(5);
            ind = parseInt(ind, 10);
            newList.cards.push({text: values.newCard}); 
            newArray[ind].cards = newList.cards;
            newArray[ind].showCardForm = false;
            this.props.dispatch(showCardForm(newArray))
            this.props.dispatch(reset('CardForm'))
        }

    closeNewCard(e) {
        let ind = this.props.cardindex.split('').slice(5);
        ind = parseInt(ind, 10);

        const array = this.props.lists;
        let newArray = JSON.parse(JSON.stringify(array));
            //toggle to close the current addcard form
        newArray[ind].showCardForm = false;
        this.props.dispatch(showCardForm(newArray))
        this.props.dispatch(reset('CardForm'))
    }

    render() {
    let isShown = this.props.list.showCardForm;
      let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
        <div className={isShown ? 'shown' : 'hidden'}>
            <form
                autocomplete="off"
                className="CardForm"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="newCard"aria-labelledby="New Card" />
                <Field
                    component={Input}
                    type="text"
                    name="newCard"
                    id="newCard"
                    validate={[required, nonEmpty]}
                />

                <button className={'card-submit'} disabled={this.props.pristine || this.props.submitting}>
                    Save
                </button>
                <button index={this.props.cardindex} className={'close-btn'}
                    onClick={(e) => this.closeNewCard(e)}>
                        <i className="fas fa-times"></i>
                </button>
            </form>
        </div>
        );
    }
}

export default reduxForm({
    form: 'CardForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('CardForm', 'newCard'))
})(CardForm);