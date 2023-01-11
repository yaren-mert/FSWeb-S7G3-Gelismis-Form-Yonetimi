import React from "react";

const Form = (props) => {
  const { handlechange, submitDisable, handleSubmit } = props;
  const { name, email, password, terms } = props.member;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          İsim Soyisim:
          <input
            id="name"
            name="name"
            onChange={handlechange}
            value={name}
            type="text"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={handlechange}
            value={email}
            type="email"
          />
        </label>
        <label htmlFor="password">
          Şifre
          <input
            id="password"
            name="password"
            onChange={handlechange}
            value={password}
            type="password"
          />
        </label>
        <label htmlFor="terms">
          <input
            id="terms"
            name="terms"
            onChange={handlechange}
            value={terms}
            type="checkbox"
          />
          Kullanım şartlarını kabul ediyorum.
        </label>
        <input type="submit" value="Kaydet" disabled={submitDisable} />
      </form>
    </div>
  );
};

export default Form;
