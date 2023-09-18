const Highlight = ({ text, render, match = [] }) => {
    let regex
    if (typeof match === 'string') regex = new RegExp(`(${match}+)`, 'gi')
    else regex = new RegExp(`${match.map((val) => `(${val}+)`).join('|')}`, 'gi')
    const parts = text.split(regex)
    return parts.map((part) => (regex.test(part) ? render(part) : part))
}

export default Highlight
