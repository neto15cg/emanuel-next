import React from 'react';
import { Container, Row, Col } from '@components/slyce/slyce';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { theme } from '@styles/theme/theme';
import { HightLightContainer, HightLightCard, HightLightCardTitle, HightLightCardDescription, HightLightCardContainer } from './HightLightSection.styles';

const HighLightSection = () => (
  <section>
    <HightLightContainer as={Container}>
      <Row>
        <Col small={24} medium={24} large={8}>
          <HightLightCardContainer>
            <HightLightCard>
              <SvgIcon src="/static/assets/icons/parceria.svg" width="80px" height="80px" fill={theme.colors.black8} />
              <HightLightCardTitle>Parceria</HightLightCardTitle>
              <HightLightCardDescription>
                Somos parceiros dos nossos clientes e estamos atentos para que cada detalhe saia como sonhado
              </HightLightCardDescription>
            </HightLightCard>
          </HightLightCardContainer>
        </Col>
        <Col small={24} medium={24} large={8}>
          <HightLightCardContainer noGutterTop>
            <HightLightCard>
              <SvgIcon src="/static/assets/icons/seguranca.svg" width="80px" height="80px" fill={theme.colors.black8} />
              <HightLightCardTitle>Segurança</HightLightCardTitle>
              <HightLightCardDescription>
                Temos registro ativo no CREA com o número 123123 e fazemos tudo de acordo com a legislação vigente
              </HightLightCardDescription>
            </HightLightCard>
          </HightLightCardContainer>
        </Col>
        <Col small={24} medium={24} large={8}>
          <HightLightCardContainer noGutterbottom>
            <HightLightCard>
              <SvgIcon src="/static/assets/icons/agilidade.svg" width="80px" height="80px" fill={theme.colors.black8} />
              <HightLightCardTitle>Agilidade</HightLightCardTitle>
              <HightLightCardDescription>Nossos processos ágeis e eficazes para que seu sonho seja realizado o quanto antes</HightLightCardDescription>
            </HightLightCard>
          </HightLightCardContainer>
        </Col>
      </Row>
    </HightLightContainer>
  </section>
);

export default HighLightSection;
