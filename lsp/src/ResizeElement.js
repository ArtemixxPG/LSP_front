
export const resizeWidth = (elem) => {
    const width = document.getElementById(elem).offsetWidth+
        document.getElementById(elem).clientWidth

    console.log(document.getElementById(elem).offsetWidth)

    const windowInnerWidth = window.innerWidth

    const resultWidth = windowInnerWidth - width

    return resultWidth
}
export const resizeHeight = (elem) => {

    const height = document.getElementById(elem).offsetHeight+
        document.getElementById(elem).clientHeight;

    const windowInnerHeight = window.innerHeight

    const resultHeight = windowInnerHeight - height

    return resultHeight;
}