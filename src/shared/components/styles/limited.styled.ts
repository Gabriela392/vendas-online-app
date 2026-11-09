import styled from "styled-components";

interface LImitedContainerProps { 
    width: number;
    margin?: string;
}

export const LimitedContainer = styled.div<LImitedContainerProps>`
  width: ${props => props.width}px;
  margin: ${props => props.margin || '0 auto'};
  `;