import moment from "moment"


export const formatDateLL = (date) => {
    return moment(date).format('LL');
}

export const formatDateISO = (date) => {
    return moment(date).format("YYYY-MM-DD");
}