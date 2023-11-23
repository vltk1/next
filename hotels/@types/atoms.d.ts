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
  label: string;
  size: number;
  line: number;
  bold: number;
  color?: string;
  className?: string;
  customs: any;
  tag: any;
}
interface Button {
  label: string;
  active?: boolean;
  width: number;
  height: number;
  radius?: number;
  color: string;
  border?: string;
  bgcolor: string;
  className?: string;
}
interface Figure {
    src: string;
    alt?: string;
    width: number;
    height?: number;
    caption?: string;
    className?: string;
}
interface Card {
  src: string;
  width: number;
  price?: number;
  name: string;
  currency?: string;
  description?: string;
  className?: string;
}