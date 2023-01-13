import React from "react";

const Form = (props) => {
  const { handleChange, submitDisable, handleSubmit } = props;
  const { name, email, password, terms } = props.member;
  return (
    <div>
      <form data-cy="test-submit" onSubmit={handleSubmit}>
        <label htmlFor="name">
          İsim Soyisim:
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={name}
            type="text"
            data-cy="test-name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
            type="email"
            data-cy="test-email"
          />
        </label>
        <label htmlFor="password">
          Şifre
          <input
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
            data-cy="test-password"
          />
        </label>
        <label htmlFor="terms">
          <input
            id="terms"
            name="terms"
            onChange={handleChange}
            value={terms}
            type="checkbox"
            data-cy="test-terms"
          />
          Kullanım şartlarını kabul ediyorum.
        </label>
        <input
          type="submit"
          value="Kaydet"
          disabled={submitDisable}
          data-cy="test-button"
        />
      </form>
    </div>
  );
};

export default Form;
