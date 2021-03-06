export interface anyObject {
  [key: string]: any
  [key: number]: any
}
interface o {
  [key: string]: number
}

/**
 * 判断是否时间类型数据
 */
export function isDate(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Date]'
}
/**
 * 格式化时间，默认格式为 yyyy-MM-dd hh:mm:ss
 * 返回格式好的时间字符串
 */
export function formatDate(date: Date, fmt: string): string
export function formatDate(date: string, fmt: string): string
export function formatDate(date: number, fmt: string): string
export function formatDate(date: any, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string {
  let time: Date = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  let o: o = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
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
 * 格式化开始时间距现在已过的时间
 */
function formatPassTime(startTime: number): string
function formatPassTime(startTime: string): string
function formatPassTime(startTime: Date): string
function formatPassTime(startTime: any) {
  let startDate = new Date(startTime).getTime()
  let currentTime: number = new Date().getTime()
  let time = currentTime - startDate
  let day = Math.floor(time / (1000 * 60 * 60 * 24))
  let hour = Math.floor(time / (1000 * 60 * 60))
  let min = Math.floor(time / (1000 * 60))
  let month = Math.floor(day / 30)
  let year = Math.floor(month / 12)
  if (year) return year + '年前'
  if (month) return month + '个月前'
  if (day) return day + '天前'
  if (hour) return hour + '小时前'
  if (min) return min + '分钟前'
  return '刚刚'
}
/**
 *  格式化现在距结束时间的剩余时间
 */
function formatRemainTime(endTime: number): string
function formatRemainTime(endTime: string): string
function formatRemainTime(endTime: Date): string
function formatRemainTime(endTime: any): string {
  let startDate = new Date() //开始时间
  let endDate = new Date(endTime) //结束时间
  let t = endDate.getTime() - startDate.getTime() //时间差
  let d = 0
  let h = 0
  let m = 0
  let s = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor((t / 1000 / 60 / 60) % 24)
    m = Math.floor((t / 1000 / 60) % 60)
    s = Math.floor((t / 1000) % 60)
  }
  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒'
}
/**
 * 判断两个数组是否相等
 */
export function isArrayEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1 === arr2) return true
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

/**
 * 判断是否为空对象
 */
export function isEmptyObject(obj: anyObject): boolean {
  return !Object.keys(obj).length
}
/**
 * 返回指定范围的随机数
 */
export function randomNum(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min))
}
