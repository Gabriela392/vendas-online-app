import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #05295f;
  width: 240px;
  -webkit-box-shadow: 1px 0px 8px 0px rgba(17, 14, 1, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(8, 0, 0, 0.71);
`;

export const MenuContainerLogoName = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  
   -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71)
`;

export const MenuLogo = styled.img`
  width: 50px;
  height: 50px;
  margin: 0px 16px;
`;

export const NameCompany = styled(Text)`
  color: white;
`;