import moment from 'moment-timezone'

export default (req, res) => {
    const format = 'MMMM Do YYYY, dddd, h:mm:ss A'

    const { from, to } = req.query
    if (!ts) ts = new Date().getTime()
    if (!from || !to) {
        res.statusCode = 401
        return res.send(`Error:Invalid Query params`)
    }

    const _from = moment(new Date(Number(ts)).toISOString(), from)
    const result = _from.clone().tz(to)
    res.send({
        fromTz: from,
        toTz: to,
        [from]: _from.format(format),
        [to]: result.format(format),
    })
}
