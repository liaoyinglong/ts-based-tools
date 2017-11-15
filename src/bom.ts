export interface obj {
  [key: string]: string
}
/**
 * 获取浏览器类型和版本
 */
export function getExplore(): string {
  let sys: obj = {}
  let ua: string = navigator.userAgent.toLowerCase()
  let s
  ;(s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
      ? (sys.ie = s[1])
      : (s = ua.match(/edge\/([\d\.]+)/))
        ? (sys.edge = s[1])
        : (s = ua.match(/firefox\/([\d\.]+)/))
          ? (sys.firefox = s[1])
          : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
            ? (sys.opera = s[1])
            : (s = ua.match(/chrome\/([\d\.]+)/)) ? (sys.chrome = s[1]) : (s = ua.match(/version\/([\d\.]+).*safari/)) ? (sys.safari = s[1]) : 0
  // 根据关系进行判断
  if (sys.ie) return 'IE: ' + sys.ie
  if (sys.edge) return 'EDGE: ' + sys.edge
  if (sys.firefox) return 'Firefox: ' + sys.firefox
  if (sys.chrome) return 'Chrome: ' + sys.chrome
  if (sys.opera) return 'Opera: ' + sys.opera
  if (sys.safari) return 'Safari: ' + sys.safari
  return 'Unkonwn'
}
/**
 * 获取滚动条到顶部的距离
 */
export function getScrollTop(): number {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
}

export interface offset {
  left: number
  top: number
}
/**
 * 获取元素距离文档顶部的高，类似JQ中的offset()
 */
export function offset(el: HTMLElement): offset {
  let pos: offset = {
    left: 0,
    top: 0,
  }
  while (el) {
    pos.left += el.offsetLeft
    pos.top = el.offsetTop
    el = el.offsetParent as HTMLElement
  }
  return pos
}
