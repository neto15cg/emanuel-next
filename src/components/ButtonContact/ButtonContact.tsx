import React, { useState } from 'react';
import Modal from 'react-modal';
import { Box } from '@components/slyce/slyce';
import { theme } from '@styles/theme/theme';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { ButtonContactWebStyled, ButtonClose, LinkContactWebStyled } from './ButtonContact.styles';
import { ButtonContactProps } from './ButtonContact.types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 300ms ease-in-out',
  },
};

const ButtonContact = (props: ButtonContactProps) => {
  const { onlyIcon } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => setModalIsOpen(!modalIsOpen);

  const size = onlyIcon ? `${theme.global.gutterSpace}px` : '16px';

  return (
    <>
      <ButtonContactWebStyled onClick={handleModal} onlyIcon={onlyIcon}>
        <Box display="flex" alignItems="center" justifyContent="center" textAlign="center" height="100%">
          <SvgIcon src="/static/assets/icons/whatsapp.svg" height={size} width={size} fill={onlyIcon ? theme.colors.black8 : theme.colors.black0} />
          {!onlyIcon && (
            <Box as="span" ml={`${theme.global.gutterSpace / 2}px`} fontSize="1.6rem">
              Entre em contato
            </Box>
          )}
        </Box>
      </ButtonContactWebStyled>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Contato">
        <Box padding={`${theme.global.gutterSpace / 2}px ${theme.global.gutterSpace}`} maxWidth="400px">
          <Box display="flex" justifyContent="space-between">
            <Box as="h2" color={theme.colors.black8}>
              Contato
            </Box>
            <ButtonClose onClick={handleModal}>
              <SvgIcon src="/static/assets/icons/fechar.svg" height="16px" width="16px" fill={theme.colors.black8} />
            </ButtonClose>
          </Box>

          <Box padding={`${theme.global.gutterSpace / 2}px 0`} display="flex" alignItems="center" flexDirection="column">
            <img src="/static/assets/images/qrcode.png" width="100%" alt="QRCODE do Whatsapp" />
            <LinkContactWebStyled target="_blank" href="https://wa.link/kcw2u5" onlyIcon={onlyIcon}>
              <SvgIcon src="/static/assets/icons/whatsapp.svg" height="20px" width="20px" fill={theme.colors.green} />
              <Box as="p" ml="10px">
                (99) 9999-9999
              </Box>
            </LinkContactWebStyled>
            <Box as="p" color={theme.colors.black6}>
              Se preferir pode nos enviar um email para <strong>contato@contato.com</strong> que iremos entrar em contato o mais breve possível.
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ButtonContact;
