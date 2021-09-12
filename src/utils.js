import { message } from 'antd'

message.config({
    duration: 1,
    maxCount: 1,
})

const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}

const replaceUnderScroreWithSpace = (str) => str.split('_').join(' ')

const showSuccessToast = (msg) => message.success(msg)

const copyUrlAndShowToast = () => {
    copyToClipboard(window.location.href)
    showSuccessToast('Link copied to clipboard')
}

const encodeUrI = (str) => encodeURIComponent(str)

const constructUrl = (date, from, to) => `?ts=${date}&from=${encodeUrI(from)}&to=${encodeUrI(to)}`

export { copyToClipboard, replaceUnderScroreWithSpace, showSuccessToast, copyUrlAndShowToast, encodeUrI, constructUrl }
