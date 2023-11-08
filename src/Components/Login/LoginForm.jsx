import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.PreventDefault();
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </form>
      <button>Entrar</button>
      <Link to="/login/criar">Cadastro </Link>
    </section>
  );
};

export default LoginForm;
