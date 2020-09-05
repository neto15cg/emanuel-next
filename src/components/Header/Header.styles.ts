import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { device } from '@styles/tools/breakpoints.styles';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 8}px;
  transition: box-shadow 300ms ease-in-out, background-color 300ms linear;

  ${(props) =>
    props.fixed &&
    css`
      border-bottom: 1px solid ${rgba(`${props.theme.colors.black8}`, 0.1)};
      background-color: ${props.theme.colors.black0};
    `}

  :hover {
    box-shadow: 1px 2px 4px 1px ${(props) => rgba(`${props.theme.colors.black8}`, 0.1)};
  }

  ${device.tablet} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 4}px;
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 2}px;
  }
`;
