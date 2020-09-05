import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import path from 'path';
import { SvgIconProps } from './SvgIcon.types';

const CustomSvg = styled(SVG)`
  width: ${(props) => props.width || '16px'};
  height: ${(props) => props.height || '16px'};
  max-width: ${(props) => props.maxwidth || '100%'};
  min-width: ${(props) => (props.minwidth ? `${props.minwidth}` : 'auto')};
  flex: 0 0 ${(props) => props.width || '16px'};

  ${(props) => (props.fill ? `fill: ${props.theme.colors[props.fill]};` : '')}
`;

export const SvgIcon = (props: SvgIconProps) => {
  const { src, width, height, maxwidth, maxheight, minwidth, fill, className, testId } = props;
  const [isIE, setIsIE] = useState(false);

  useEffect(() => {
    const isIE11 = !!window.MSInputMethodContext && !!(document as any).documentMode;
    if (isIE11) {
      setIsIE(true);
    }
  }, []);

  if (isIE) {
    return (
      <CustomSvg
        data-testid={testId}
        as="img"
        src={path.resolve(src)}
        width={width}
        height={height}
        maxwidth={maxwidth}
        maxheight={maxheight}
        minwidth={minwidth}
        alt="Icon"
        className={className}
      />
    );
  }

  return (
    <CustomSvg
      data-testid={testId}
      src={path.resolve(src)}
      width={width}
      height={height}
      maxwidth={maxwidth}
      maxheight={maxheight}
      minwidth={minwidth}
      fill={fill}
      className={className}
    />
  );
};

export default SvgIcon;
