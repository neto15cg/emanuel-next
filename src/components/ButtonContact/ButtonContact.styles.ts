import styled, { css } from 'styled-components';

export const ButtonContactWebStyled = styled.button`
  display: flex;
  background: none;
  align-items: center;
  justify-content: center;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: ${(props) => props.theme.colors.black8};
  border-radius: 2px;
  padding: 0 ${(props) => props.theme.global.gutterSpace * 1.5}px;
  color: ${(props) => props.theme.colors.black0};
  font-size: 1.4rem;
  font-weight: 500;
  display: block;
  text-decoration: none;

  ${(props) =>
    props.onlyIcon &&
    css`
      background-color: transparent;
      padding: ${props.theme.global.gutterSpace / 2}px;
    `}
`;

export const ButtonClose = styled.button`
  display: flex;
  background: none;
  align-items: center;
  justify-content: center;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: transparent;
  border-radius: 2px;
  padding: ${(props) => props.theme.global.gutterSpace / 2}px;
  color: ${(props) => props.theme.colors.black0};
  font-size: 1.4rem;
  font-weight: 500;
`;

export const LinkContactWebStyled = styled.a`
  display: flex;
  position: relative;
  background: none;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline: inherit;
  background-color: transparent;
  border-radius: 2px;
  font-size: 1.6rem;
  font-weight: 600;
  padding: ${(props) => props.theme.global.gutterSpace / 4}px;
  margin-bottom: ${(props) => props.theme.global.gutterSpace / 2}px;
  color: ${(props) => props.theme.colors.green};

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.green};
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
