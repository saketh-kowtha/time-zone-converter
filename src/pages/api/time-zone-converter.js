import moment from 'moment-timezone'

function isValidTimeZone(tz) {
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
        throw new Error('Time zones are not available in this environment')
    }

    try {
        Intl.DateTimeFormat(undefined, { timeZone: tz })
        return true
    } catch (ex) {
        return false
    }
}

export default (req, res) => {
    let { ts, from, to, format } = req.query
    from = from.toLocaleLowerCase()
    to = to.toLocaleLowerCase()

    const dateFormat = format || moment().format()

    if (!ts) ts = new Date().getTime()
    if (!from || !to) {
        res.statusCode = 401
        return res.send({ error: `Invalid Query params` })
    }

    if (!isValidTimeZone(from)) {
        res.statusCode = 404
        return res.send({ error: `Unable to find ${from} in timezone list` })
    }

    if (!isValidTimeZone(to)) {
        res.statusCode = 404
        return res.send({ error: `Unable to find ${to} in timezone list` })
    }

    const iso = new Date(Number(ts)).toISOString()
    const _from = moment(iso, from)
    const result = _from.clone().tz(to)
    res.send({
        ts,
        fromTz: from,
        toTz: to,
        [from]: _from.format(dateFormat),
        [to]: result.format(dateFormat),
        ISODate: iso,
        format: dateFormat,
    })
}
