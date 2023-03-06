import { StaticImageData } from 'next/image';

export interface IProfitItem {
  id?: string;
  icon: string | StaticImageData;
  alt: string;
  title?: string;
  descr?: string;
}
export interface IFeatureItem {
  icon: string | StaticImageData;
  alt: string;
  title?: string;
  descr?: string;
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
