import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { FaUsers, FaUser } from 'react-icons/fa';

import { Container, Input, Divisor } from './styles';

export default function InputText({ name, icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {icon}
      <Divisor />
      <Input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}
