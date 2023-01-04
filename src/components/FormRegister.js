import React from "react";
import { Field, Form, Formik, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

function FormRegister() {
    const initialValues = {
        name: "",
        email: "",
        motivation: "",
        gender: "",
        handphone: [""],
        classRoom: "",
        masteredLanguages: [],
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
        gender: yup.string().required("Gender is required"),
        classRoom: yup.string().required("Class Room is required"),
        masteredLanguages: yup
            .array()
            .min(1, "Mastered Languages must be than 1 Items"),
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
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <Field
                            as="select"
                            name="gender"
                            id="gender"
                            className="input"
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Class Room</label>
                        <label htmlFor="ReactJS">
                            <Field
                                name="classRoom"
                                id="ReactJS"
                                className="input"
                                value="ReactJS"
                                type="radio"
                            />
                            React JS
                        </label>
                        <label htmlFor="VueJS">
                            <Field
                                type="radio"
                                name="classRoom"
                                id="VueJS"
                                className="input"
                                value="VueJS"
                            />
                            Vue JS
                        </label>
                        <ErrorMessage name="classRoom">
                            {(error) => (
                                <span className="input-error">{error}</span>
                            )}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="masteredLanguages">
                            Mastered Languages
                        </label>
                        <label htmlFor="Java">
                            <Field
                                name="masteredLanguages"
                                id="Java"
                                className="input"
                                value="Java"
                                type="checkbox"
                            />
                            Java
                        </label>
                        <label htmlFor="PHP">
                            <Field
                                type="checkbox"
                                name="masteredLanguages"
                                id="PHP"
                                className="input"
                                value="PHP"
                            />
                            PHP
                        </label>
                        <label htmlFor="Python">
                            <Field
                                type="checkbox"
                                name="masteredLanguages"
                                id="Python"
                                className="input"
                                value="Python"
                            />
                            Python
                        </label>
                        <ErrorMessage name="masteredLanguages">
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
