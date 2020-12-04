import { compile } from 'path-to-regexp';

export const compileUrl = (
  link: string,
  params?: { [x: string]: string | number } | undefined,
): string => {
  const url = compile(link)(params);
  return url.toString();
};
