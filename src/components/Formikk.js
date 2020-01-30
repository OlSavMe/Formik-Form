import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Formikk = () => {
    return (
        <div>
            <h1>Sign up form</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={SignupSchema}
                onSubmit={values => { console.log(values) }}

            >
                {({ values, errors, touched }) => (
                    <Form>
                        <div >
                            <Field name="firtsName" placeholder="First Name"></Field>
                            {errors.firstName && touched.firstName ? (<div className="errors">{errors.firstName}</div>) : null}
                        </div>
                        <div className="errors">
                            <Field name="lastName" placeholder="Last Name"></Field>
                        </div>
                        <div className="errors">
                            <Field name="email" type="email" placeholder="Email"></Field>
                        </div>
                        <div >
                            <Field name="password" type="password" placeholder="Password"></Field>
                            {errors.password && touched.password ? (<div className="errors">{errors.password}</div>) : null}
                        </div>
                        <div className="errors">
                            <Field name="confirmPassword" type="password" placeholder="Confirm Password"></Field>
                        </div>
                        <button type="submit">Submit</button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>

                    </Form>
                )

                }




            </Formik>
        </div >
    );
}

const SignupSchema = Yup.object().shape(
    {
        firstName: Yup.string()
            .min(2, "Too short")
            .max(50, "Too Long"),
        // .required("Required"),
        email: Yup.string()
            .email("Invalid email")
            .required("required"),
        password: Yup.string()
            .min(4, "minmum 4 chars")
            .max(50, "too lomg")
            .required("required"),

    });

export default Formikk;