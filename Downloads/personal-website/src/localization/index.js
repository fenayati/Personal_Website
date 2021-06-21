import fa_tr from './fa'
import en_tr from './en'

var regex = /^\/fa/i
const lang = regex.test(window.location.pathname) ? "fa" : "en"
export { lang }
const directions = {
    fa: "rtl",
    en: "ltr",
}
function getDirection() {
    return directions[lang]
}
export { getDirection }

const translate = {
    fa: fa_tr,
    en: en_tr,
}
function getTranslate() {
    return translate[lang]
}
export { getTranslate }

const fonts = {
    fa: "IRANSans",
    en: "Muli",
}
function getFont() {
    return fonts[lang]
}
export { getFont }

