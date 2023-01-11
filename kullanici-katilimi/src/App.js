import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import Error from "./components/Error";
import axios from "axios";

let formSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "isim soyisim en az 5 karakter olmalı")
    .required("isim soyisim doldurulmalıdır."),

  email: Yup.string()
    .email("Geçerli bir e posta adresi giriniz.")
    .required("Eposta zorunludur"),

  password: Yup.string()
    .min(3, "En az 3 karakter olmalıdır.")
    .required("Şifre zorunludur."),

  terms: Yup.boolean().oneOf([true], "Kabul şartlarını kabul etmediniz."),
});

const dummyForm = { name: "", email: "", password: "", terms: false };
const dummyError = { name: "", email: "", password: "", terms: "" };
function App() {
  const [registerMember, setRegisterMember] = useState(dummyForm);
  const [form, setForm] = useState(dummyForm);
  const [errors, setErrors] = useState(dummyError);
  const [submitDisable, setSubmitDisable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => setRegisterMember(response.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { value, name, checked, type } = event.target;
    let newValue = type === "checkbox" ? checked : value;
    checkForm(name, newValue);
    setForm({ ...form, [name]: newValue });
  };
  const checkForm = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(form).then((response) => setSubmitDisable(!response));
  }, [form]);

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        member={form}
        submitDisable={submitDisable}
      />
      <Error errors={errors} />
      {registerMember.name !== "" && (
        <p>
          {registerMember.id} numaralı {registerMember.name} adlı müşterimiz
          kaydedilmiştir.
        </p>
      )}
    </div>
  );
}

export default App;
