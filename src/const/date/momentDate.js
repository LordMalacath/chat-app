import moment from "moment";

//---------------------------------------------------

export const TIME = (date) => {
    return moment(date).format("HH:mm")
}

export const DoB = (date) => {
    return moment(date).format("DD/MM/YY")
}

export const DDMM = (date) => {
    return moment(date).format("D MMMM")
}