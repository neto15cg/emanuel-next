import styled from 'styled-components';
import { Box } from '@components/slyce/slyce';
import { device } from '@styles/tools/breakpoints.styles';

export const Introduce = styled(Box)`
  background-color: ${(props) => props.theme.colors.black0};
  border-bottom-right-radius: 150px;
  padding: ${(props) => props.theme.global.gutterSpace * 4}px ${(props) => props.theme.global.gutterSpace * 8}px;

  ${device.tablet} {
    padding: ${(props) => props.theme.global.gutterSpace * 2}px ${(props) => props.theme.global.gutterSpace * 4}px;
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.global.gutterSpace}px ${(props) => props.theme.global.gutterSpace * 2}px;
  }
`;

export const TitleIntroduce = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.black8};
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: ${(props) => props.theme.global.gutterSpace}px;
`;

export const DescriptionIntroduce = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.black6};
  flex-wrap: wrap;

  ${device.desktop} {
    padding: 0 ${(props) => props.theme.global.gutterSpace}px;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 30px;
`;
