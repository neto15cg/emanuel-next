import styled, { css } from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';
import { rgba } from 'polished';
import { Box } from '@components/slyce/slyce';

export const HightLightContainer = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.global.gutterSpace * 4}px ${(props) => props.theme.global.gutterSpace * 8}px;

  ${device.tablet} {
    padding: ${(props) => props.theme.global.gutterSpace * 2}px ${(props) => props.theme.global.gutterSpace * 4}px;
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 2}px;
  }
`;

export const HightLightCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${device.tablet} {
    ${(props) =>
      !props.noGutterBottom &&
      css`
        padding-bottom: ${props.theme.global.gutterSpace * 2}px;
      `}

    ${(props) =>
      !props.noGutterTop &&
      css`
        padding-top: ${props.theme.global.gutterSpace * 2}px;
      `}
  }

  ${device.mobile} {
    ${(props) =>
      !props.noGutterBottom &&
      css`
        padding-bottom: ${props.theme.global.gutterSpace * 2}px;
      `}

    ${(props) =>
      !props.noGutterTop &&
      css`
        padding-top: ${props.theme.global.gutterSpace * 2}px;
      `}
  }
`;

export const HightLightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 100%;
  min-height: 330px;

  background-color: ${(props) => props.theme.colors.black0};
  padding: ${(props) => props.theme.global.gutterSpace}px;
  border-radius: ${(props) => props.theme.global.gutterSpace}px;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 6px 2px ${(props) => rgba(`${props.theme.colors.black8}`, 0.1)};
  }

  ${device.tablet} {
    margin-bottom: 40px;
    width: 300px;
  }

  ${device.mobile} {
    margin-bottom: 40px;
    width: 300px;
  }
`;

export const HightLightCardTitle = styled.h1`
  color: ${(props) => props.theme.colors.black8};
  font-size: 2.4rem;
  margin: ${(props) => props.theme.global.gutterSpace / 2}px 0;
  text-align: center;
`;

export const HightLightCardDescription = styled.p`
  color: ${(props) => props.theme.colors.black6};
  font-size: 1.6rem;
  margin: ${(props) => props.theme.global.gutterSpace / 2}px 0;
  text-align: center;
`;
