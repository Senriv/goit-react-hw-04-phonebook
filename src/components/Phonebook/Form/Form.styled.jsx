import styled from '@emotion/styled';

export const FormEl = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormLable = styled.label`
  margin-right: 10px;
`;

export const FormInput = styled.input`
  margin-left: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

export const FormBtn = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
