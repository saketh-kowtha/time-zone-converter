// import { TIME_ZONE_CODES } from '../../constants'
// import { pipe, not } from 'ramda'
// import { isValid } from 'date-fns'

// const { parseFromTimeZone, formatToTimeZone } = require('date-fns-timezone')

// export default (req, res) => {
//     const { ts, from, to } = req.query
//     if (inValidTimeZone(to) || inValidTimeZone(from)) {
//         res.statusCode = 401
//         return res.send(`Error:Invalid Query params`)
//     }

//     const _ts = isValidTimeStramp(Number(ts)) ? Number(ts) : getTimeStrampFromDate(new Date())
//     const utcFromZoned = zoneToUtc(_ts, from)
//     const zonedFromUtc = utcToZoned(utcFromZoned, to)

//     res.statusCode = 200
//     res.json({
//         ts: getTimeStrampFromDate(new Date(zonedFromUtc)),
//         from: {
//             time: utcFromZoned,
//             timeZone: from,
//         },
//         to: { time: zonedFromUtc, timeZone: to },
//     })
// }

// const validTimeZone = (tz) =>
//     TIME_ZONE_CODES.find((_tz) => {
//         return _tz === tz
//     })

// const inValidTimeZone = pipe(validTimeZone, not)

// const isValidTimeStramp = (ts) => isValid(new Date(ts))

// const getTimeStrampFromDate = (date) => date.getTime()

// const zoneToUtc = (ts, timeZone) => parseFromTimeZone(ts, { timeZone })

// const utcToZoned = (date, timeZone) =>
//     formatToTimeZone(date, 'MM/DD/YYYY HH:mm:ss.SSS [GMT]Z (z)', {
//         timeZone,
//     })
