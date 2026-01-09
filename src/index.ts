export * from './array';
export * from './tw';
export * from './file';
export * from './number';
export * from './object';
export * from './string';
// export * from './time';
export * from './remeda';
export * from './defu';

/**
 * 依照枚举类型出现的键值对生成选项数组供组件使用
 *  @param map 键值对对象，例如: { 0:"Male",1:"Female" }
 *  @param keyIsNumber 返回的选项value是否为数字，默认为false
 *
 *  @return array 生成的选项数组，例如 [ { intValue: 0,label:"Male", value:"0" }...]
 *
 *  @author 作者 - Mikaisa
 * */
export const optionsMaker = (map: Record<number | string, string>, keyIsNumber?: boolean): any[] => {
  return Object.keys(map).map((key: string) => ({
    intValue: Number.parseInt(key),
    label: map[key],
    value: keyIsNumber ? Number(key) : key,
    text: map[key],
  }));
};
