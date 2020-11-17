import React from "react";

import { ButtonInput, Label } from "./styles";

function Button({ label }) {
  return (
    <ButtonInput>
      <Label>{label}</Label>
    </ButtonInput>
  );
}

export default Button;
