interface Font {
  tag: string;
  color?: string;
  children: any;
  xs: number[];
  md?: number[];
  variant?: string;
  className?: string;
}
interface Typography {
  children: any;
  size: number;
  line: number;
  bold: number;
  align: string[];
  color?: string;
  className?: string;
  bgcolor?: string;
  tag: any;
}
interface TitleChildren {
  children: any;
  tag: string;
}
interface Button {
  label: ReactElement;
  active?: boolean;
  fontSize: number;
  weight?: string | number;
  width: number | string;
  height: number | string;
  radius?: number;
  color: string;
  border?: string;
  bgcolor: string;
  className?: string;
}
interface Card {
  src: string;
  width: number;
  height: number;
  price?: number;
  name: string;
  currency?: string;
  description?: string;
  className?: string;
}
interface Thumbnail{
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string | ReactElement;
  className?: string;
}