/**
 * 将数字或字符串转换为固定小数位数的数字
 */
export const numberToFixed = (value: string | number, fixed: number) => {
  if (value == null) {
    return null;
  }

  if (typeof value === "number") {
    return Number.isInteger(value) ? value : value.toFixed(fixed);
  }

  return value;
};
