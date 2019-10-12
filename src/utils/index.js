// path去除多余'/'和添加'/'正则
export function pathReg(path) {
  return path.replace(/^(?!\/)|(\/{2,})/g, '/')
}
