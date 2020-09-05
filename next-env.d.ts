/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '@*';

declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': any;
    'amp-iframe': any;
    'amp-youtube': any;
    'amp-carousel': any;
    'amp-analytics': any;
    'amp-accordion': any;
  }
}

declare module NodeJS {
  interface Global {
    expect: any;
  }
}
