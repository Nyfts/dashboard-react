import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Container, Input } from './styles';

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
      <Input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}
