import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
padding: 8px;
display: flex;
flex-direction: column;
max-width: 300px;
border: 1px solid black;
`;

export const StyledField = styled(Field)`
border-radius: 8px;
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;