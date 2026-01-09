import * as R from 'remeda';
import { EMPTY_STRING } from './string';

/**
 * 反转对象的键和值
 */
export const reverseObj = <T extends Record<string, string | number>>(obj: T) => {
  return R.mapToObj(Object.entries(obj), R.reverse());
};

/** 根据 path 返回对象的值 */
export const getPropByPath = <T extends {}>(obj: T, path: string, defaultValue: any = EMPTY_STRING) => {
  if (!path) return defaultValue;

  const value = R.pathOr(obj, R.stringToPath(path) as any, defaultValue as any);
  return value != null ? value : defaultValue;
};
