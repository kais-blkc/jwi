import { EImgSizes } from '../config';
import { BASE_URL, IMG_URL } from '../config';

export const getQueryStr = (query: string, lang = 'language=ru'): string => {
  let url = `${BASE_URL}${query}`;
  if (lang) url += `?${lang}`;
  return url;
};

export const getImgPath = (
  query: string | undefined,
  size: EImgSizes = EImgSizes.small
): string => {
  return query ? `${IMG_URL}w${size}${query}` : '';
};
