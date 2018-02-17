import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { addList, hideListForm } from '../actions/index';
import {required, nonEmpty} from '../validators';
import './ListForm.css';

export class ListForm extends Component {
    onSubmit(values) {
      let newItem = {title: values.listTitle, cards: []};
      this.props.dispatch(addList(newItem));
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
                autocomplete="off"
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
