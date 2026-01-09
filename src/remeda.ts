import * as R from 'remeda';

export { R };

export * from 'remeda';

/**
 * 大驼峰
 */
export const toPascalCase = (value: string) => R.capitalize(R.toCamelCase(value));
