/**
 * 判断元素是否有某个类名
 */
export function hasClass(el: HTMLElement, className: string): boolean {
  return new RegExp(`(\\s|^)${className}(\\s|$)`).test(el.className)
}
/**
 * 为元素添加某个类名
 */
export function addClass(el: HTMLElement, className: string): void {
  if (!hasClass(el, className)) {
    el.className += className
  }
}
/**
 * 移除元素某个类名
 */
export function removeClass(el: HTMLElement, className: string): void {
  if (hasClass(el, className)) {
    const reg: RegExp = new RegExp(`(\\s|^)${className}(\\s|$)`)
    el.className = el.className.replace(reg, ' ')
  }
}
