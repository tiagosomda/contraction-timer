import { color, fontSize, pxToRem, spacing } from '../../../theme/helpers/theme.helpers';
import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.13);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const StyledContraction = styled.li`
  display: flex;
  position: relative;
  height: ${pxToRem(20)};
  padding-left: ${spacing('xl')};
  line-height: ${pxToRem(20)};

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: 50%;
    background-color: ${color('neutralMin75')};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: ${pxToRem(3)};
    left: ${pxToRem(3)};
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    border-radius: 50%;
    background-color: ${color('contraction')};
    animation: ${pulsate} 1.8s infinite; 
  }  
`;

export const StyledDuration = styled.div`
  flex-grow: 1;
  font-size: ${fontSize('l')};
  font-weight: bold;
`;

export const StyledDate = styled.div`
  font-size: ${fontSize('s')};
`;
