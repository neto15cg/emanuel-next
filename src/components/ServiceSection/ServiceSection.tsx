import React from 'react';
import { Container, Row, Col } from '@components/slyce/slyce';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { theme } from '@styles/theme/theme';
import { ServiceSectionProps } from './ServiceSection.types';
import { ServiceCardTitle, ServiceDescrption, ServiceContainerCard, ServiceTitle, AnimatedSection } from './ServiceSection.styles';

const SERVICES = [
  {
    title: 'Projetos',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
    img: '/static/assets/icons/projeto.svg',
  },
  {
    title: 'Planejamento de Obras',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
    img: '/static/assets/icons/planejamento.svg',
  },
  {
    title: 'Legalização e Regularização',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
    img: '/static/assets/icons/lei.svg',
  },

  {
    title: 'Consultoria e Laudos Técnicos',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
    img: '/static/assets/icons/consultoria.svg',
  },
];

const ServiceSection = (props: ServiceSectionProps) => {
  const { show } = props;
  return (
    <AnimatedSection show={show}>
      <Container>
        <Row>
          <Col small={24} medium={24} large={24}>
            <ServiceTitle>Serviços</ServiceTitle>
          </Col>
        </Row>
        <Row>
          {SERVICES.map((service) => (
            <Col key={service.title} small={24} medium={24} large={12} noGutter>
              <ServiceContainerCard>
                <SvgIcon src={service.img} width="100px" height="100px" fill={theme.colors.black8} />
                <ServiceCardTitle>{service.title}</ServiceCardTitle>
                <ServiceDescrption>{service.description}</ServiceDescrption>
              </ServiceContainerCard>
            </Col>
          ))}
        </Row>
      </Container>
    </AnimatedSection>
  );
};

export default ServiceSection;
