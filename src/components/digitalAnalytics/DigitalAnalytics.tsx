import React from 'react';

import { DigitalAnalyticsProps } from './DigitalAnalytics.types';

export default (props: DigitalAnalyticsProps) => {
  const { useAmp, gaId, gtmId, ampGtmId, optimizeId } = props;

  if (useAmp() && ampGtmId) {
    return <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />;
  }
  return (
    <>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || [];' }} />
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '.async-hide { opacity: 0 !important' }} />
      {gtmId && (
        <script
          async
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
            (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
            h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
            })(window,document.documentElement,'async-hide','dataLayer',4000,{'${optimizeId}':true});
        
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','xpi_ga');

            xpi_ga('create', '${gaId}', 'auto');
            xpi_ga('require', '${optimizeId}');
          
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
        `,
          }}
        />
      )}
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const DigitalAnalyticsAmp = ({ ampGtmId, useAmp }) => {
  if (useAmp() && ampGtmId) {
    return <amp-analytics config={`https://www.googletagmanager.com/amp.json?id=${ampGtmId}&gtm.url=SOURCE_URL`} data-credentials="include" />;
  }
  return null;
};
