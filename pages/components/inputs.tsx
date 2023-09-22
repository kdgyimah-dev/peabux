import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 44px;
  border: 1px solid #d1d5db;
  padding: 12px 10px;
  &::placeholder {
    @include font(Inter, 400, 14px, 24px, #9ca3af);
  }
  &:focus {
    outline: none;
  }
`;
export default function Input(props: {
  type: string;
  name: string;
  value: string;
  min?: string;
  max?: string;
  step?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
}) {
  return (
    <StyledInput
      type={props.type}
      name={props.name}
      step={props.step}
      min={props.min}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
