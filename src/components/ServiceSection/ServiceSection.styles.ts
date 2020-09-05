import styled, { css } from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const AnimatedSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black0};
  border-top-left-radius: 150px;
  border-bottom-right-radius: 150px;
  opacity: 0;
  transition: opacity 500ms ease-in;

  padding: ${(props) => props.theme.global.gutterSpace * 4}px ${(props) => props.theme.global.gutterSpace * 8}px;

  ${device.tablet} {
    padding: ${(props) => props.theme.global.gutterSpace * 2}px ${(props) => props.theme.global.gutterSpace * 4}px;
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 2}px;
  }

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

export const ServiceTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.global.gutterSpace * 2}px;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.black8};
  text-decoration: underline;
`;

export const ServiceContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => props.theme.global.gutterSpace * 2}px;

  ${device.desktop} {
    margin: ${(props) => props.theme.global.gutterSpace}px 0;
    padding: 0 ${(props) => props.theme.global.gutterSpace}px;
  }
`;

export const ServiceCardTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.black8};
  margin: ${(props) => props.theme.global.gutterSpace}px 0;
  text-align: center;
`;

export const ServiceDescrption = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.black6};
`;
