/**
 * 为 true 时返回数组，否则返回空数组
 */
export const optional = <T>(arr: T[], flag: boolean) => (flag ? arr : []);

// 定义树形数据的返回类型，包含原始数据和 children 属性
type TreeDataEntity<T> = T & { children: TreeDataEntity<T>[] };

/**
 * 将一个带有fatherId的列表转换成由children属性主导的树形结构
 *
 * @param list 数据列表
 * @param fatherId 父级id的字段名，默认fatherId
 *
 * @returns 将原数据类型加上children属性，并制作成属性列表返回
 *
 * @author 作者 - Mikaisa
 */
export const buildTreeDataListByFatherId = <T>(list: T[], fatherId: string = 'fatherId'): TreeDataEntity<T>[] => {
  const map = new Map();

  const rootNodes: TreeDataEntity<T>[] = [];

  // 初始化Map
  list.forEach((item: any) => {
    if (!map.has(item.id)) {
      map.set(item.id, { ...item, children: [] });
    }
    map.set(item.id, { ...map.get(item.id), ...item, children: map.get(item.id).children || [] });
  });

  // 构建层次结构
  list.forEach((item: any) => {
    const parent = item[fatherId] && map.get(item[fatherId]);
    if (parent) {
      parent.children.push(map.get(item.id));
      // parent.hasChildren = true;
    } else {
      rootNodes.push(map.get(item.id));
    }
  });

  return rootNodes;
};

/// 确保 obj[prop] 是数组
export const arrayGuard = (obj: any, prop: string | number | symbol) => {
  if (!Array.isArray(obj?.[prop])) {
    obj[prop] = [];
  }
};
