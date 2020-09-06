import styled from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a:not(:last-child) {
    margin-right: 30px;
  }

  ${device.mobile} {
    display: none;
  }
`;

export const ButtonHeader = styled.a`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black8};
  font-style: normal;
  font-weight: normal;
  border: none;
  border-radius: 0;
  font-size: 1.4rem;
  white-space: nowrap;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.black5};
    width: 0%;
    transition: width 150ms linear;
  }

  &:hover {
    &:after {
      content: '';
      width: 100%;
    }
  }
`;

export const Logo = styled.a`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black8};
  font-style: normal;
  font-weight: normal;
  border: none;
  border-radius: 0;
  white-space: nowrap;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
`;
