import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 730px;
  border-radius: 8px;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 0;
    border-radius: 8px;
    padding: 16px 24px;
    background-color: #f0f0f5;
    font-size: 16px;
    outline: none;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  .CaixaNome {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 20px;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
