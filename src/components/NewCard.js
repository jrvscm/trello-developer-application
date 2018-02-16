import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { addCard, hideCardForm, showCardForm} from '../actions/index';
import {required, nonEmpty} from '../validators';
import './NewCard.css';

export class CardForm extends Component {
    onSubmit(values) {
        this.props.dispatch(addCard(values.newCard));
        this.props.dispatch(hideCardForm());
    }

    closeNewCard(e) {
        const array = this.props.lists;
        let newArray = JSON.parse(JSON.stringify(array));
    
        //newArray[e.target.id].showCardForm = false;
        console.log(this.props.list)
        //this.props.dispatch(showCardForm(newArray))
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
                <button className={'close-btn'} onClick={(e) => this.closeNewCard(e)}><i className="fas fa-times"></i></button>
            </form>
        </div>
        );
    }
}

export default reduxForm({
    form: 'CardForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('CardForm', 'newCard'))
})(CardForm);