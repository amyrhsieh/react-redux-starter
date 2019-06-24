import React from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2));
}

const EntryForm = () => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ firstName: 'Amy' }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <button
            type="button"
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
