import { Paper, Button } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled(Paper)`
  padding: 2rem;
  .MuiTextField-root {
    margin: 0.7rem;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FileInputStyled = styled.div`
  width: 97%;
  margin: 10px 0;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 10px;
`;
