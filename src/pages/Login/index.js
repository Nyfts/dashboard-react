import React from "react";
import { FaUsers, FaUser, FaKey } from 'react-icons/fa';

import TextInput from '../../components/form/TextInput';
import Button from '../../components/form/Button';

import { Container, Form, LoginFormContainer, IconContainer, Footer, Bold } from "./styles";

function Login() {
  const submitForm = () => {
    alert("submit form");
  };

  return (
    <Container>
      <LoginFormContainer>
        <IconContainer>
          <FaUsers size={64} />
        </IconContainer>
        <Form onSubmit={submitForm}>
          <TextInput name="username" type="text" placeholder="Usuário" icon={<FaUser size={16} />} />
          <TextInput name="password" type="password" placeholder="Senha" icon={<FaKey size={14} />} />
          <Button label="Entrar" />
        </Form>
      </LoginFormContainer>
      <Footer><Bold>Nome da empresa</Bold> © Copyright 2020</Footer>
    </Container>
  );
}

export default Login;
