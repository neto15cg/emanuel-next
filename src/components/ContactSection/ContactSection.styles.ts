import styled from 'styled-components';
import { Box } from '@components/slyce/slyce';
import { device } from '@styles/tools/breakpoints.styles';

export const Contact = styled(Box)`
  background-color: ${(props) => props.theme.colors.black0};
  padding: ${(props) => props.theme.global.gutterSpace * 4}px ${(props) => props.theme.global.gutterSpace * 8}px;
  margin: 0;

  ${device.tablet} {
    padding: ${(props) => props.theme.global.gutterSpace * 2}px ${(props) => props.theme.global.gutterSpace * 4}px;
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 2}px;
  }
`;

export const LinkSocialnetwork = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.global.gutterSpace / 2}px;
`;
