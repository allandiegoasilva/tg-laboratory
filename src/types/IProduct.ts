import { IColors } from "./IColors";

export interface IProduct {
  title: string;
  image: any;
  color: string;
  price: number;
  description: string;
  selected?: boolean;
  discount: number;
  type: string;
  colors: IColors,
  onClick?: () => void;
}