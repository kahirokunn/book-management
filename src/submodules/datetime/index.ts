import Moment from 'moment'

Moment.locale('ja', {
  weekdays: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ],
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
})

export function toDate(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  // なんかエラーが出てうざかった。許してくれ。。。
  const castedMoment: any = Moment
  const m = new castedMoment(date)
  if (m.isValid() === true) {
    return m.format('YYYY/MM/DD')
  }
  return ''
}

export function toDatetime(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  // なんかエラーが出てうざかった。許してくれ。。。
  const castedMoment: any = Moment
  const m = new castedMoment(date)
  if (m.isValid() === true) {
    return m.format('YYYY/MM/DD HH:mm')
  }
  return ''
}
