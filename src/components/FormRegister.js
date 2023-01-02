import React from "react";
import { useFormik } from "formik";

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
        validate: (values) => {
            let error = {};
            if (!values.name) {
                error.name = "Name is required";
            }
            if (!values.motivation) {
                error.motivation = "Motivation is required";
            }
            return error;
        },
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
                    />
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
