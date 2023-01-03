import React from "react";
import { Field, Form, Formik, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

function FormRegister() {
    const initialValues = {
        name: "",
        email: "",
        motivation: "",
        handphone: [""],
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const validationSchema = yup.object({
        name: yup
            .string()
            .required("Name is required")
            .min(5, "Name must be longer than 5 characters")
            .trim(),
        email: yup
            .string()
            .required("Email is required")
            .email("Enter e-mail format")
            .trim(),
        motivation: yup
            .string()
            .required("Motivation is required")
            .min(25, "Motivation must be longer than 25 characters")
            .trim(),
    });

    return (
        <div className="container-form">
            <h2>Bootcamp Register</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name..."
                            className="input"
                        />
                        <ErrorMessage name="name">
                            {(error) => (
                                <span className="input-error">{error}</span>
                            )}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail..."
                            className="input"
                        />
                        <ErrorMessage name="email">
                            {(error) => (
                                <span className="input-error">{error}</span>
                            )}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="handphone">Phone Number</label>
                        <FieldArray name="handphone">
                            {(props) => {
                                const { form, push, remove } = props;
                                const { values } = form;
                                const { handphone } = values;

                                return handphone.map((number, i) => {
                                    return (
                                        <div key={i}>
                                            <Field
                                                name={`handphone[${i}]`}
                                                className="input"
                                            />
                                            <button
                                                type="button"
                                                style={{ padding: ".3rem" }}
                                                onClick={() => push("")}
                                            >
                                                +
                                            </button>
                                            {i > 0 && (
                                                <button
                                                    type="button"
                                                    style={{ padding: ".3rem" }}
                                                    onClick={() => remove()}
                                                >
                                                    -
                                                </button>
                                            )}
                                        </div>
                                    );
                                });
                            }}
                        </FieldArray>
                    </div>
                    <div className="form-group">
                        <label htmlFor="motivation">Motivation</label>
                        <Field
                            as="textarea"
                            name="motivation"
                            id="motivation"
                            cols="30"
                            rows="10"
                            placeholder="Motivation..."
                            className="input"
                        />
                        <ErrorMessage name="motivation">
                            {(error) => (
                                <span className="input-error">{error}</span>
                            )}
                        </ErrorMessage>
                    </div>
                    <button type="submit" className="btn">
                        Register
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormRegister;
