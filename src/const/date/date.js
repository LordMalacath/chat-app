const MONTHshort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
const MONTHlong = ["January", "February", "March", "April", "May", "June", "July", "Augus", "September", "October", "November", "December"]

export const msgTime = (date) => {
    const dateConstruction = date.getHours() + `:` + date.getMinutes()
    return dateConstruction
}

export const ddMonth = (date) => {
    const dateConstruction = date.getDate() + ' ' + MONTHshort[date.getMonth()]
    return dateConstruction
}

export const DOB = (date) => {
    const dateConstruction = date.getDate() + '/' + date.getMonth() + '/' + date.getYear()
    return dateConstruction
}

