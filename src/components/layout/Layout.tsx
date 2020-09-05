import React from 'react';
import { LayoutProps } from './Layout.types';

import GlobalStyle from '../../styles/global.styles';

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      {children}
      <GlobalStyle />
    </>
  );
};

export default Layout;
