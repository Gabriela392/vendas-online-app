import { Input, Typography } from 'antd';
import styled from 'styled-components';

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleInput = styled(Typography.Text)`
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
`;

const inputBase = `
  height: 52px;
  border-radius: 14px;
  border: 1px solid transparent;
  background-color: #f6f7f8;
  box-shadow: none;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: #f6f7f8;
    border-color: #006397;
    box-shadow: 0 0 0 3px rgba(0, 99, 151, 0.12);
  }

  input {
    background: transparent;
    font-size: 14px;
  }
`;

export const InputStyled = styled(Input)`
  ${inputBase}
`;

export const InputPasswordStyled = styled(Input.Password)`
  ${inputBase}
`;
