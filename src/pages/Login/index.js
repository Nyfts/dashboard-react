import React, { useState } from "react";
import { useLoading, Puff } from '@agney/react-loading';
import { FaUsers, FaUser, FaKey } from 'react-icons/fa';

import TextInput from '../../components/form/TextInput';
import Button from '../../components/form/Button';

import { fakeLoginRequest } from '../../helper/fakeApi';

import { Container, Form, LoginFormContainer, IconContainer, Footer, Bold, LoadingSection, InnerContainer } from "./styles";

import { primaryDark } from '../../styles/colors';

function Login() {

  const [loading, setLoading] = useState(false);
  const { containerProps, indicatorEl } = useLoading({
    loading: loading,
    loaderProps: {
      valueText: 'Carregando',
    },
    indicator: <Puff width="100" />,
  });

  const submitForm = async () => {
    setLoading(true);
    await fakeLoginRequest({
      username: 'luan.jesus'
    }).then((res) => {
      setLoading(false);
      console.log(res);
    })
  };

  return (
    <>
      <Container>
        <LoginFormContainer>
            <LoadingSection {...containerProps}>
              {indicatorEl}
            </LoadingSection>
            <InnerContainer loading={loading}>
              <IconContainer>
                <FaUsers size={64} color={primaryDark} />
              </IconContainer>
              <Form onSubmit={submitForm}>
                <TextInput name="username" type="text" placeholder="Usuário" icon={<FaUser size={12} color={primaryDark} />} />
                <TextInput name="password" type="password" placeholder="Senha" icon={<FaKey size={12} color={primaryDark} />} />
                <Button label="Entrar" loading={false} />
              </Form>
            </InnerContainer>
          </LoginFormContainer>
      </Container>
      <Footer><Bold>Nome da empresa</Bold> © Copyright 2020</Footer>
    </>
  );
}

export default Login;
