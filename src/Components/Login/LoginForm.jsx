import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" />
        <Input label="Senha" type="password" name="password" />
      </form>

      <Button>Entrar</Button>

      <Link to="/login/criar">Cadastro </Link>
    </section>
  );
};

export default LoginForm;
