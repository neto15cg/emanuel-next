import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { GallerySectionProps } from './GallerySection.types';
import { GalelerySectionContainer, AnimatedDivRight } from './GallerySection.styles';

const photos = [
  {
    src: '/static/assets/images/image1.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/static/assets/images/image2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/static/assets/images/image3.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/static/assets/images/image4.jpg',
    width: 1,
    height: 1,
  },
];

const GallerySection = (props: GallerySectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { show } = props;

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <GalelerySectionContainer>
      <AnimatedDivRight show={show}>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </AnimatedDivRight>
    </GalelerySectionContainer>
  );
};

export default GallerySection;
