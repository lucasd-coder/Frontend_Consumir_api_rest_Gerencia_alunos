import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 14px;
  }

  input {
    height: 40px;
    font-size: 14px;
    border: 0;
    border-radius: 4px;
    margin-top: 5px;
    padding: 16px 24px;
    background-color: #f0f0f5;
    font-size: 16px;
    outline: none;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
