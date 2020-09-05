import React from 'react';
import { Box, Row, Col, Container } from '@components/slyce/slyce';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { TitleIntroduce, DescriptionIntroduce, Introduce } from './IntroduceSection.styles';

const IntroduceSection = () => (
  <section>
    <Introduce as={Container}>
      <Row>
        <Col small={24} medium={24} large={12}>
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" height="100%" width="100%">
            <TitleIntroduce>Emanuel Menezes</TitleIntroduce>
            <DescriptionIntroduce>
              Engenheiro Civil (CREA-1234) com vasta experiência nas áreas X, Y e Z. (AQUI DEVE-SE COLOCAR UMA BREVE DESCRIÇÃO QUE EU AINDA NÃO SEI QUAL).
            </DescriptionIntroduce>
            <DescriptionIntroduce>
              Engenheiro Civil (CREA-1234) com vasta experiência nas áreas X, Y e Z. (AQUI DEVE-SE COLOCAR UMA BREVE DESCRIÇÃO QUE EU AINDA NÃO SEI QUAL).
            </DescriptionIntroduce>
            <DescriptionIntroduce>
              Engenheiro Civil (CREA-1234) com vasta experiência nas áreas X, Y e Z. (AQUI DEVE-SE COLOCAR UMA BREVE DESCRIÇÃO QUE EU AINDA NÃO SEI QUAL).
            </DescriptionIntroduce>
          </Box>
        </Col>
        <Col small={24} medium={24} large={12}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
            <SvgIcon src="/static/assets/images/engineer.svg" width="100%" height="100%" maxwidth="400px" />
          </Box>
        </Col>
      </Row>
    </Introduce>
  </section>
);

export default IntroduceSection;
