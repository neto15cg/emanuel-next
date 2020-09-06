import React from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { theme } from '@styles/theme/theme';
import { Box } from '@components/slyce/slyce';
import { Logo } from '@components/styled/Styled';
import ButtonContact from '@components/ButtonContact/ButtonContact';
import { Contact, LinkSocialnetwork } from './ContactSection.styles';

const ContactSection = () => {
  return (
    <Contact display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Box pb={theme.global.gutterSpace}>
        <Logo>EM</Logo>
      </Box>
      <Box display="flex">
        <LinkSocialnetwork target="_blank" href="https://www.instagram.com/emg.01">
          <SvgIcon src="/static/assets/icons/instagram.svg" height="20px" width="20px" fill={theme.colors.black8} />
        </LinkSocialnetwork>
        <ButtonContact onlyIcon />
        {/* <LinkSocialnetwork href="/">
          <SvgIcon src="/static/assets/icons/linkedin.svg" height="20px" width="20px" fill={theme.colors.black8} />
        </LinkSocialnetwork> */}
      </Box>
      <Box as="span" fontSize="1.2rem" pt={theme.global.gutterSpace * 2}>
        © 2020 Direitos Reservado - Created by &nbsp;
        <a target="_blank" href="https://www.linkedin.com/in/eliezer-marques-623b95124/">
          Eliezer Marques
        </a>
      </Box>
    </Contact>
  );
};

export default ContactSection;
