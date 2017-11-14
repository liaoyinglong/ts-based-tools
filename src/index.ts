/**
 * 格式化时间，默认格式为 yyyy-MM-dd hh:mm:ss
 */
export function formatDate(date: Date, fmt: string): string
export function formatDate(date: string, fmt: string): string
export function formatDate(date: number, fmt: string): string
export function formatDate(date: any, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string {
  if (!isDate(date)) {
    date = new Date(date) as Date
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  interface o {
    [key: string]: number
  }
  let o: o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  for (const k in o) {
    if (o.hasOwnProperty(k)) {
      let str: string = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }

  return fmt
}
/**
 * 补0
 */
export function padLeftZero(str: string): string {
  return ('00' + str).substr(str.length)
}
/**
 * 判断是否时间类型数据
 */
export function isDate(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Date]'
}
