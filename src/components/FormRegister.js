import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function FormRegister() {
    const initialValues = {
        name: "",
        email: "",
        motivation: "",
    };
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
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
                .min("Motivation must be longer than 25 characters")
                .trim(),
        }),
    });
    return (
        <div className="container-form">
            <h2>Bootcamp Register</h2>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name..."
                        className="input"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name ? (
                        <span className="input-error">
                            {formik.errors.name}
                        </span>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail..."
                        className="input"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.motivation && formik.touched.email ? (
                        <span className="input-error">
                            {formik.errors.email}
                        </span>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="motivation">Motivation</label>
                    <textarea
                        name="motivation"
                        id="motivation"
                        cols="30"
                        rows="10"
                        placeholder="Motivation..."
                        className="input"
                        value={formik.values.motivation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.errors.motivation && formik.touched.motivation ? (
                        <span className="input-error">
                            {formik.errors.motivation}
                        </span>
                    ) : null}
                </div>
                <button type="submit" className="btn">
                    Register
                </button>
            </form>
        </div>
    );
}

export default FormRegister;
