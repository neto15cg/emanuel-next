import { Colors } from '@styles/theme/colors';

export interface SvgIconProps {
  src: string;
  width?: string;
  height?: string;
  maxwidth?: string;
  minwidth?: string;
  maxheight?: string;
  fill?: Colors;
  className?: string;
  testId?: string;
}
