import React from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';

import styles from 'Styles/form.scss';

const EntryForm = ({onSubmit}) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit} className="standard-form">
        <div>
          <label className="formLabel">New Entry</label>
          <Field
            name="content"
            component="textarea"
            placeholder="Write your blog entry here"
          />
        </div>
        <div className="buttons">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting || pristine}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);

export default EntryForm;
