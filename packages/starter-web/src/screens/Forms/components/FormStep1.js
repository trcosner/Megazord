import React from 'react';
import { Field, Form } from 'formik';

const FormStep1 = () => (
    <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field component="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </Field>
        <button type="submit">Submit</button>
    </Form>
);

export default FormStep1;