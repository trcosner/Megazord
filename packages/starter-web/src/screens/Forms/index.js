import React from 'react';
import { Formik } from 'formik';

import FormStep1 from "./components/FormStep1";

const Forms = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ email: '', color: 'red' }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
            component={FormStep1}
        />
    </div>
);

export default Forms;
