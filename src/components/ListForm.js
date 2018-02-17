import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { hideListForm, showCardForm } from '../actions/index';
import {required, nonEmpty} from '../validators';
import './ListForm.css';

export class ListForm extends Component {
    onSubmit(values) {
        let newItem = {
            showCardForm: false,
            title: values.listTitle, 
            cards: []
        };
        const array = this.props.lists;

        let newArray = JSON.parse(JSON.stringify(array));
            newArray.push(newItem);
            this.props.dispatch(showCardForm(newArray));
            this.props.dispatch(hideListForm());
    }

    closeNewList(e) {
      this.props.dispatch(hideListForm());
    }

    render() {
      let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                autoComplete="off"
                className="list-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="listTitle"aria-labelledby="New List"/>
                <Field
                    component={Input}
                    type="text"
                    name="listTitle"
                    id="listTitle"
                    validate={[required, nonEmpty]}
                />

                <button className={'list-submit'} disabled={this.props.pristine || this.props.submitting}>
                    Save
                </button>
                <button className={'close-btn'} onClick={(e) => this.closeNewList(e)}><i className="fas fa-times"></i></button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'ListForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('ListForm', 'listTitle'))
})(ListForm);
