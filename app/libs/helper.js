const replacePlaceholders = (str, values) => str.replace(/{{}}/g, () => values.shift())

export { replacePlaceholders }
