const formatDate = (date) => {
    const reversed = date.split('-').reverse().join('/')
    return new Date(reversed).toDateString()
}

export {
    formatDate
}