// Formatting Price
export function formatPriceIntl(price, locale = "en-IN", decimals = 0) {
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: decimals,
    })

    return formatter.format(price)
}

// Calculate Sell Price
export function calcSellPrice(price, dis) {
    // Calculating Discount from Discount %
    const discount = (
        (price * dis) /
        100
    ).toFixed(0)

    // Calculating Sell Price
    const sellPrice = (price - discount).toFixed(0)

    return formatPriceIntl(sellPrice)
}

export function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
        if (timeout) {
            clearTimeout(timeout)
            return
        }
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

// Formatting Date
export function formatDate(text) {
    const date = new Date(text)

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const day = String(date.getDate()).padStart(2, '0'); // Ensure two-digit day
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
