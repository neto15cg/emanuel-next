import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useAmp } from 'next/amp';
import Layout from '@components/layout/Layout';
import { AmpProvider } from '@utils/AmpContext';
import Header from '@components/Header/Header';
import { HeaderContent, HeaderButtonsContainer, ButtonHeader, Logo, RequestBudget } from '@components/styled/Styled';
import IntroduceSection from '@components/IntroduceSection/IntroduceSection';
import HighLightSection from '@components/HighLightSection/HightLightSection';
import ServiceSection from '@components/ServiceSection/ServiceSection';
import GallerySection from '@components/GallerySection/GallerySection';
import ContactSection from '@components/ContactSection/ContactSection';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Index = () => {
  const isAmp = useAmp();
  const [scrollPosition, setScrollPosition] = useState(0);
  const introduceSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const ContactectionRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(document.documentElement.scrollTop);
  };

  const handleScrolTo = (ref: any) => () => scrollToRef(ref);

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <AmpProvider isAmp={isAmp}>
      <Head>
        <title>Emanuel Menezes - Engenheiro Civil</title>
        <meta name="Description" content="Emanuel Menezes é engenheiro civil na cidade de Capim Grosso - Bahia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.xpi.com.br/" />
        <link rel="amphtml" href="https://amp.emanuelmenezes.com.br" />
      </Head>
      <Layout>
        <main>
          <Header scrollPosition={scrollPosition}>
            <HeaderContent>
              <HeaderButtonsContainer>
                <ButtonHeader onClick={handleScrolTo(introduceSectionRef)}>Início</ButtonHeader>
                <ButtonHeader onClick={handleScrolTo(serviceSectionRef)}>Serviços</ButtonHeader>
                <ButtonHeader onClick={handleScrolTo(ContactectionRef)}>Contato</ButtonHeader>
              </HeaderButtonsContainer>
              <Logo to="/">EM</Logo>
              <RequestBudget>Solicite orçamento</RequestBudget>
            </HeaderContent>
          </Header>
          <div ref={introduceSectionRef}>
            <IntroduceSection />
          </div>
          <div>
            <HighLightSection />
          </div>
          <div ref={serviceSectionRef}>
            <ServiceSection
              show={
                scrollPosition + 700 >
                ((serviceSectionRef && serviceSectionRef.current && serviceSectionRef.current.offsetTop && serviceSectionRef.current.offsetTop) || 0)
              }
            />
          </div>

          <div ref={gallerySectionRef}>
            <GallerySection
              show={
                scrollPosition + 700 >
                ((gallerySectionRef && gallerySectionRef.current && gallerySectionRef.current.offsetTop && gallerySectionRef.current.offsetTop) || 0)
              }
            />
          </div>
          <div ref={ContactectionRef}>
            <ContactSection />
          </div>
        </main>
      </Layout>
    </AmpProvider>
  );
};

export default Index;
