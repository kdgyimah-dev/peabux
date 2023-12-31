import React from "react";
import styled from "styled-components";

const StyledSignupHeader = styled.div`
  width: 100%;
  .title {
    font-size: 90px;
    color: #6c63ff;
    margin: 20px 0;
    font-family: "Archivo Black", sans-serif;
  }
  .description {
    font-family: "Inter", sans-serif;
    color: #0000009a;
    font-weight: 500;
    font-size: 20px;
  }


  @media screen and (max-width: 991px) {
    .title {
      font-size: 32px;
    }
  }
`;
export default function SignupHeader(props: {
  title: string;
  description: string;
}) {
  return (
    <StyledSignupHeader>
      <p className="title ">{props.title} </p>
      <p className="description"> {props.description} </p>
    </StyledSignupHeader>
  );
}
