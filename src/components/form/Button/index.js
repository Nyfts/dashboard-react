import React from "react";

import { useLoading, Puff } from '@agney/react-loading';

import { ButtonInput, Label, LoadingSection } from "./styles";

function Button({ label, loading }) {
  const { containerProps, indicatorEl } = useLoading({
    loading: loading,
    loaderProps: {
      valueText: 'Carregando',
    },
    indicator: <Puff width="30" />,
  });

  return (
    <ButtonInput loading={loading} disabled={loading}>
      {loading ? (
        <LoadingSection {...containerProps}>
          {indicatorEl}
        </LoadingSection> ) : (
          <Label>{label}</Label>
        )}      
    </ButtonInput>
  );
}

export default Button;
