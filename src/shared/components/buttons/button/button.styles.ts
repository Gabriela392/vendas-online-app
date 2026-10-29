import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonAntd = styled(Button)`
  width: 100%;
  height: 52px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;

  &.ant-btn-primary {
    background-color: #006397;
    box-shadow: none;

    &:hover:not(:disabled) {
      background-color: #00507a;
    }
  }

  &.ant-btn-default {
    background-color: #ffffff;
    border-color: #e4e6e8;
    color: #1a1a1a;

    &:hover:not(:disabled) {
      border-color: #006397;
      color: #006397;
    }
  }
`;
