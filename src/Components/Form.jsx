import React, { useState } from "react";
import FormStyles from "../Styles/Form.module.css";
import Message from "./Message";

const Form = () => {
  const [patient, setPatient] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValidate = patient.name.trim().length > 3;
    const emailValidate = emailRegex.test(patient.email);
    if (emailValidate && nameValidate) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {show ? (
        <Message patient={patient} />
      ) : (
        <form className={FormStyles.formContainer} onSubmit={handleSubmit}>
          <div className={FormStyles.formGroup}>
            <label className={FormStyles.label}>Nombre:</label>
            <input
              className={FormStyles.formInput}
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChange}
            />
          </div>
          <div className={FormStyles.formGroup}>
            <label className={FormStyles.label}>Direccion:</label>
            <input
              className={FormStyles.formInput}
              type="text"
              name="email"
              value={patient.email}
              onChange={handleChange}
            />
          </div>
          <button className={FormStyles.formButton}>Enviar</button>
        </form>
      )}
      {error ? (
        <h4 style={{ color: "red" }}>Verifique bien la información</h4>
      ) : null}
    </div>
  );
};

export default Form;
