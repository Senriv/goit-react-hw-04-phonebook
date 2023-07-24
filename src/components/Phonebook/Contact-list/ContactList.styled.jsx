import styled from '@emotion/styled';

export const Contacts = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactName = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const ContactBtnDelete = styled.button`
  margin-left: 15px;
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
