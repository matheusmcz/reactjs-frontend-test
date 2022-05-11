import React, { useState } from "react";
import jwt from "jsonwebtoken";
import {
  Container,
  Content,
  Title,
  Text,
  ErrorMessage,
  InputLogin,
} from "./styles";
import Cookies from "universal-cookie";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const SECRET = "maceiosecret";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const login = () => {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
    const cookie = new Cookies();
    cookie.set("token", token, { path: "/" });
    window.location.href = "/webinar";
  };

  const emailValidation = () => {
    if (email === "") {
      setIsEmailInvalid(true);
      return true;
    }
    return false;
  };

  const passwordValidation = () => {
    if (password === "") {
      setIsPasswordInvalid(true);
      return true;
    }
    return false;
  };

  const handleLogin = () => {
    if (emailValidation() && passwordValidation()) {
      return;
    } else if (!isEmailInvalid && !isPasswordInvalid) {
      login();
    }
  };

  const emailProvided = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setIsEmailInvalid(false);
    setEmail(event.target.value);
  };

  const passwordProvided = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setIsPasswordInvalid(false);
    setPassword(event.target.value);
  };

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <Text>Insira seu e-mail e senha</Text>
        {(isEmailInvalid || isPasswordInvalid) && (
          <ErrorMessage>Campos obrigatórios</ErrorMessage>
        )}
        <InputLogin>
          <TextField
            className="textInput"
            error={isEmailInvalid}
            label="E-mail"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => emailProvided(e)}
          />
          <TextField
            className="textInput"
            error={isPasswordInvalid}
            label="Senha"
            variant="outlined"
            type="password"
            size="small"
            value={password}
            onChange={(e) => passwordProvided(e)}
          />
        </InputLogin>

        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          className="enterBtn"
        >
          Entrar
        </Button>
      </Content>
    </Container>
  );
};

export default SignIn;
