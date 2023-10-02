const replacePlaceholders = (str, values) => str.replace(/{{}}/g, () => values.shift())
const replaceToEmoji = (str) =>
    '10' === str
        ? '🔟'
        : str
              .replace(/0/g, '0️⃣')
              .replace(/1/g, '1️⃣')
              .replace(/2/g, '2️⃣')
              .replace(/3/g, '3️⃣')
              .replace(/4/g, '4️⃣')
              .replace(/5/g, '5️⃣')
              .replace(/6/g, '6️⃣')
              .replace(/7/g, '7️⃣')
              .replace(/8/g, '8️⃣')
              .replace(/9/g, '9️⃣')

const twitterShare = (data) => {
    const twitterHref = encodeURI('https://twitter.com/intent/tweet?text=' + data).replace(/#/g, '%23') + '%0a' + encodeURI(URI)
    if (typeof window !== 'undefined') window.open(twitterHref, '_blank')
}

const inchToFt_in = (inch) => {
    return `${Math.trunc(inch / 12)}'${inch % 12}`
}

const inchToMetre = (inch) => {
    return inch * 0.0254
}

const lbToKg = (lb) => {
    return lb * 0.45359237
}

export { replacePlaceholders, replaceToEmoji, twitterShare, inchToFt_in, inchToMetre, lbToKg }
