import styled, { css } from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const GalelerySectionContainer = styled.section`
  width: 100%;

  padding: ${(props) => props.theme.global.gutterSpace * 4}px ${(props) => props.theme.global.gutterSpace * 8}px;

  ${device.tablet} {
    padding: ${(props) => props.theme.global.gutterSpace * 2}px ${(props) => props.theme.global.gutterSpace * 4}px;
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 2}px;
  }
`;

export const AnimatedDivRight = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 500ms ease-in;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;
