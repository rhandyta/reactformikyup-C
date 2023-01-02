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
                    />
                    {/* <span className="input-error">Error</span> */}
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
                    {/* <span className="input-error">Error</span> */}
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
                    ></textarea>
                    {/* <span className="input-error">Error</span> */}
                </div>
                <button type="submit" className="btn">
                    Register
                </button>
            </form>
        </div>
    );
}

export default FormRegister;
