import { StaticImageData } from 'next/image';

export interface INavLink {
  path: string;
  name: string;
}
export interface IProfitItem {
  id?: string;
  icon: string | StaticImageData;
  alt: string;
  title?: string;
  descr?: string;
}
export interface IHeroTitle {
  children?: React.ReactNode;
}
export interface IHeroSubTitle {
  children?: React.ReactNode;
}
export interface IFeatureItem {
  icon: string | StaticImageData;
  alt: string;
  title?: string;
  descr?: string;
  imgURL?: string | StaticImageData;
  idx: number;
  current: number;
  onClick: Function;
}
export interface IIntegrationItem {
  icon: string | StaticImageData;
  alt: string;
  descr?: string;
}
export interface IFAQItem {
  title: string;
  descr: string;
}
export interface ISvgIcons {
  icon?: { path: React.ReactNode; viewbox: string };
  width?: string;
  height?: string;
  style?: object;
  size?: string;
}
export interface ISvgIcon {
  iconId?: string;
  style?: object;
  size?: string;
  width?: string;
  height?: string;
}
